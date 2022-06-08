from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model


class nestedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username']


class sneaksSerializer(serializers.ModelSerializer):
    user_detail = nestedUserSerializer(read_only=True, source='user')

    class Meta:
        model = favoriteShoe
        fields = ['id', 'user_detail', 'name', 'brand', 'releaseDate',
                  'retailPrice', 'flightClub', 'goat', 'image', 'user_detail']
