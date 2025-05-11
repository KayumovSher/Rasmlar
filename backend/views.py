from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello, World!")

def image_list(request):
    data = [
        {'id': 1, 'title': 'First Image', 'url': 'https://images.unsplash.com/photo-1726661025462-b0ddd7a363a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {'id': 2, 'title': 'Second Image', 'url': 'https://plus.unsplash.com/premium_photo-1694540892449-5c3170caf81c?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ]
    return JsonResponse(data, safe=False)

def user_list(request):
    users = [
       
        {'id': 1, 'name': 'Shermuhammad', 'email': 'shermuhammad@mail.com'},
        {'id': 2, 'name': 'Mohichexra', 'email': 'Mohichexra@gmail.com'},
        {'id': 1, 'name': 'Shermuhammad', 'email': 'shermuhammad@mail.com'},
        {'id': 2, 'name': 'Mohichexra', 'email': 'Mohichexra@gmail.com'},
        {'id': 1, 'name': 'Shermuhammad', 'email': 'shermuhammad@mail.com'},
        {'id': 2, 'name': 'Mohichexra', 'email': 'Mohichexra@gmail.com'},
    ]
    return JsonResponse(users, safe=False)