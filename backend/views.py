from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse
from .models import Images, Users

# Create your views here.
def index(request):
    return HttpResponse("Hello, World!")

def image_list(request):
    images = Images.objects.all()
    data = [
        {'id': image.id, 'title': image.title, 'url': image.url}
        for image in images
    ]
        
    return JsonResponse(data, safe=False)

def user_list(request):
    users = Users.objects.all()
    data = [
        {'id': user.id, 'name': user.name, 'email': user.email}
        for user in users
    ]
    return JsonResponse(data, safe=False)