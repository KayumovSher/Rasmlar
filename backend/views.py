from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse
from .models import Image, Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.serializers import ImageSeralizer

# Create your views here.
def index(request):
    return HttpResponse("Hello, World!")

@api_view(['GET'])
def image_list(request):
    category = request.GET.get('category')
    wallpaper_type = request.GET.get('wallpaper_type')
    image = Image.objects.all()
    if category:
        images = images.filter(category=category)

    if category == 'wallpaper' and wallpaper_type:
        images = images.filter(wallpaper_type=wallpaper_type)

    serializer = ImageSeralizer(image, many=True, context={'request': request})
    return Response(serializer.data)





def user_list(request):
    users = Users.objects.all()
    data = [
        {'id': user.id, 'name': user.name, 'email': user.email}
        for user in users
    ]
    return JsonResponse(data, safe=False)