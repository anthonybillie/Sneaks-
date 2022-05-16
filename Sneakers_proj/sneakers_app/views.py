from django.shortcuts import render
from .import models
from django.http import HttpResponseRedirect
from django.urls import reverse

# Create your views here.


def index(request):
    return render(request, 'sneakers_app/index.html')
