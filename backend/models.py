from django.db import models

# Create your models here.
class Images(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField()

    def __str__(self):
        return self.title
    
class Users(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.name