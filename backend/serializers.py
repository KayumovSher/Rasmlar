from rest_framework import serializers
from .models import  Images

class ImagesSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['id', 'title', 'url']
        fields = '__all__'
        # exclude = ['id']