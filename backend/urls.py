from django.urls import path, include
from . import views
from .views import index, image_list

urlpatterns = [
    path('', views.index, name='index'),
    path('images/', views.image_list, name='image-list'),
    path('users/', views.user_list, name='user-list'),

]
#     return HttpResponse("Hello, world. You're at the polls index.")
