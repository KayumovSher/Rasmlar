from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('image/', views.image_list, name='image-list'),
    path('users/', views.user_list, name='user-list'),

    # New auth routes
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),

    # Download tracking
    path('record-download/', views.record_download, name='record-download'),
    path('my-downloads/', views.user_downloads, name='my-downloads'),
]
