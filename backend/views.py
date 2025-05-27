from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Image, Users, Download
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ImageSeralizer
from django.db.models import Q  
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

# Simple index view
def index(request):
    return HttpResponse("Hello, World!")

# API view to list images with filtering and search functionality
@api_view(['GET'])
def image_list(request):
    category = request.GET.get('category')
    wallpaper_type = request.GET.get('wallpaper_type')
    search = request.GET.get('search')  # ✅ New: search query

    images = Image.objects.all()

    # Filter by category
    if category:
        images = images.filter(category=category)

    # Filter by wallpaper type only if category is 'wallpaper'
    if category == 'wallpaper' and wallpaper_type:
        images = images.filter(wallpaper_type=wallpaper_type)

    # ✅ Apply search filtering (by title or category)
    if search:
        images = images.filter(
            Q(title__icontains=search) | Q(category__icontains=search)
        )

    serializer = ImageSeralizer(images, many=True, context={'request': request})
    return Response(serializer.data)

# Existing user list
def user_list(request):
    users = Users.objects.all()
    data = [
        {'id': user.id, 'name': user.name, 'email': user.email}
        for user in users
    ]
    return JsonResponse(data, safe=False)


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
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def logout_user(request):
    request.auth.delete()
    return Response(status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def record_download(request):
    image_id = request.data.get('image_id')
    if not image_id:
        return Response({'error': 'Image ID is required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        image = Image.objects.get(id=image_id)
    except Image.DoesNotExist:
        return Response({'error': 'Image not found.'}, status=status.HTTP_404_NOT_FOUND)

    download = Download.objects.create(user=request.user, image=image)
    return Response({'message': 'Download recorded.'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_downloads(request):
    downloads = Download.objects.filter(user=request.user).select_related('image')
    data = [{
        'title': d.image.title,
        'category': d.image.category,
        'downloaded_at': d.timestamp,
        'image_url': request.build_absolute_uri(d.image.image.url)
    } for d in downloads]
    return Response(data)