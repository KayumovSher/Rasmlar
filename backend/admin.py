from django.contrib import admin
from .models import Image, Users, Download
from django.utils.html import format_html

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'wallpaper_type', 'image_preview')
    list_filter = ('category', 'wallpaper_type')
    search_fields = ('title', 'category')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" />', obj.image.url)
        return "-"
    image_preview.short_description = 'Preview'

@admin.register(Download)
class DownloadAdmin(admin.ModelAdmin):
    list_display = ('user', 'image_title', 'category', 'downloaded_at')
    list_filter = ('user', 'image__category')
    search_fields = ('user__username', 'image__title')

    def image_title(self, obj):
        return obj.image.title
    image_title.short_description = 'Image Title'

    def category(self, obj):
        return obj.image.category
    category.short_description = 'Category'

@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')
    search_fields = ('name', 'email')
