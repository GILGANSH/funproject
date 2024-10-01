from django.db import models

# Create your models here.

class PokaBezNazvania(models.Model):
    name = models.CharField(max_length=30, default=None)
    email = models.EmailField(default=None)
    message = models.CharField(max_length=100, default=None)