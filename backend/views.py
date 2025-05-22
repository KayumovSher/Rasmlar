from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Image, Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ImageSeralizer
from django.db.models import Q  # ✅ Needed for search

# Simple index view
def index(request):
    return HttpResponse("Hello, World!")

# ✅ Updated API to support category, wallpaper_type, and search filtering
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
