
from email.policy import default
from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

# Create your models here.


class favoriteShoe(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    releaseDate = models.DateField(blank=True)
    retailPrice = models.IntegerField()
    flightClub = models.CharField(max_length=300)
    goat = models.CharField(max_length=300)
    # image = models.ImageField(upload_to=None,)

    def __str__(self):
        return f'{self.name} {self.brand} {self.releaseDate} {self.retailPrice}'
