from django.db import models
from django.contrib.auth.models import User

# Create your models here.
def upload_to_category(instance, filename):
    if instance.category == 'wallpaper' and instance.wallpaper_type:
        return f'{instance.category}/{instance.wallpaper_type}/{filename}'
    return f'{instance.category}/{filename}'

class Image(models.Model):
    CATEGORY_CHOICES = [
        ('animals', 'Animals'),
        ('art', 'Art'),
        ('buildings', 'Buildings'),
        ('cars', 'Cars'),
        ('darkness', 'Darkness'),
        ('foods', 'Foods'),
        ('nature', 'Nature'),
        ('people', 'People'),
        ('sertificates', 'Sertificates'),
        ('sport', 'Sport'),
        ('technology', 'Technology'),
        ('wallpaper', 'Wallpaper'),
        
    ]
    WALLPAPER_TYPE_CHOICES = [
        ('phone', 'Phone'),
        ('pc', 'PC'),
    ]

    title = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    wallpaper_type = models.CharField(
        max_length=10,
        choices=WALLPAPER_TYPE_CHOICES,
        blank=True,
        null=True,
        help_text="Only used if category is 'wallpaper'"
    )
    image = models.ImageField(upload_to=upload_to_category)

    def __str__(self):
        return self.title


class Users(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.name
    
class Download(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ForeignKey(Image, on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} downloaded {self.image.title}"