from urllib import response
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import requests as fetch

# Create your views here.


def index(request):

    return render(request, 'sneakers_app/index.html')
