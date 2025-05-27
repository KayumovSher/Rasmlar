from rest_framework import serializers
from .models import Image, Download, Users

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

class DownloadSerializer(serializers.ModelSerializer):
    image = ImageSeralizer(read_only=True)

    class Meta:
        model = Download
        fields = '__all__'