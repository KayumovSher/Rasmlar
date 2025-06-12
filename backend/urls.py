from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),

    # 🔐 Auth routes
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),

    # 👤 Profile
    path('user/profile/', views.get_or_update_profile, name='get_or_update_profile'),  # GET/PUT
    path('user/downloads/', views.user_downloads, name='user_downloads'),              # 👈 Clearer path

    # 📥 Downloads
    path('record-download/', views.record_download, name='record_download'),

    # 🖼️ Images
    path('image/', views.image_list, name='image_list'),
]
