from rest_framework import serializers
from .models import Image, Download
from django.contrib.auth.models import User  # ✅ Import default User model

# ✅ 1. Image Serializer (already correct)
class ImageSeralizer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url

# ✅ 2. Download Serializer
class DownloadSerializer(serializers.ModelSerializer):
    image = ImageSeralizer(read_only=True)

    class Meta:
        model = Download
        fields = ['id', 'image', 'downloaded_at']  # You can customize fields here

# ✅ 3. User Serializer (for showing/updating user info)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id', 'username']  # Optional: username cannot be changed
