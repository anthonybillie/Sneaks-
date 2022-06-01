
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class favorite(models.Model):
    favorite = models.IntegerField(default=1)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='fav')

    def __str__(self):
        return f'{self.user} {self.favorite}'
