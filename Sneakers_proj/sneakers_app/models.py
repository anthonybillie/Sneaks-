
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class favorite(models.Model):
    apiID = models.CharField(max_length=40)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='fav')

    def __str__(self):
        return f'{self.user} {self.favorite}'
