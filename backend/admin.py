from django.contrib import admin
from .models import Image, Users
from django.utils.html import format_html

# Register your models here.
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

    # Show wallpaper_type conditionally
    def get_fields(self, request, obj=None):
        fields = ['title', 'category', 'image']
        if obj and obj.category == 'wallpaper':
            fields.insert(2, 'wallpaper_type')
        return fields

    def get_readonly_fields(self, request, obj=None):
        # make sure wallpaper_type is editable if needed
        return []

    # Make sure wallpaper_type shows on Add page when wallpaper selected
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        return form
    
admin.site.register(Users)