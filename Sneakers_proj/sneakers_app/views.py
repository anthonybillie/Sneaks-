from urllib import response
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import requests as fetch
from django.template import loader

# Create your views here.


def index(request):
    template = loader.get_template('sneakers_app/index.html')
    context = {}
    return HttpResponse(template.render(context, request))

    # return render(request, 'sneakers_app/index.html')


def nike(request):
    return render(request, 'sneakers_app/nike.html')
