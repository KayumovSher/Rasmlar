from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse
from .models import Images, Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.serializers import ImagesSeralizer

# Create your views here.
def index(request):
    return HttpResponse("Hello, World!")

@api_view(['GET'])
def image_list(request):
    images = Images.objects.all()
    serializer = ImagesSeralizer(images, many=True)
        
    return Response(serializer.data)

def user_list(request):
    users = Users.objects.all()
    data = [
        {'id': user.id, 'name': user.name, 'email': user.email}
        for user in users
    ]
    return JsonResponse(data, safe=False)