from datetime import timezone
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Q

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers import ImageSeralizer, UserSerializer, DownloadSerializer

from .models import Image, Download

# ✅ 1. Simple test view
def index(request):
    return HttpResponse("Hello, World!")

# ✅ 2. Get images with category, wallpaper type, and search
@api_view(['GET'])
def image_list(request):
    category = request.GET.get('category')
    wallpaper_type = request.GET.get('wallpaper_type')
    search = request.GET.get('search')

    images = Image.objects.all()

    if category:
        images = images.filter(category=category)
        if category == 'wallpaper' and wallpaper_type:
            images = images.filter(wallpaper_type=wallpaper_type)

    if search:
        images = images.filter(Q(title__icontains=search) | Q(category__icontains=search))

    serializer = ImageSeralizer(images, many=True, context={'request': request})
    return Response(serializer.data)

# ✅ 3. Register user and return token
@api_view(['POST'])
def register_user(request):
    data = request.data
    required_fields = ['username', 'email', 'first_name', 'last_name', 'password']

    for field in required_fields:
        if field not in data or not data[field]:
            return Response({"error": f"{field} is required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=data['username']).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(
        username=data['username'],
        email=data['email'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        password=data['password']
    )
    token, _ = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
    })

# ✅ 4. Login user and return token
@api_view(['POST'])
def login_user(request):
    user = authenticate(
        username=request.data.get('username'),
        password=request.data.get('password')
    )
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
        })
    return Response({'error': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# ✅ 5. Logout by deleting token
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_user(request):
    request.auth.delete()
    return Response(status=status.HTTP_200_OK)

# ✅ 6. Save download if user is authenticated
import logging
logger = logging.getLogger(__name__)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def record_download(request):
    image_id = request.data.get('image_id')
    logger.info(f"User: {request.user} is downloading image_id: {image_id}")
    try:
        image = Image.objects.get(id=image_id)
        download = Download.objects.create(user=request.user, image=image)
        logger.info(f"Download created: {download}")
        return Response({'message': 'Download recorded.'}, status=201)
    except Image.DoesNotExist:
        logger.error('Image not found.')
        return Response({'error': 'Image not found.'}, status=404)



# ✅ 7. Return user's download history (profile page)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_downloads(request):
    downloads = Download.objects.filter(user=request.user).select_related('image').order_by('-downloaded_at')
    images = [download.image for download in downloads]
    serializer = DownloadSerializer(downloads, many=True, context={'request': request})
    return Response(serializer.data)

# ✅ 8. Update user profile (name/email)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user
    user.first_name = request.data.get('first_name', user.first_name)
    user.last_name = request.data.get('last_name', user.last_name)
    user.email = request.data.get('email', user.email)
    user.save()
    return Response({
        'message': 'Account updated successfully.',
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email
    })

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_or_update_profile(request):
    if request.method == 'GET':
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)