from urllib import response
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import requests as fetch
from .models import *
from .forms import *
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
# Create your views here.


def index(request):
    return render(request, 'sneakers_app/index.html')


def user_login(request):
    if request.method == 'GET':
        form2 = NewLoginForm()
        return render(request, 'sneakers_app/login.html', {
            'form2': form2
        })

    elif request.method == 'POST':
        form2 = NewLoginForm(request.POST)
        if form2.is_valid():
            password = form2.cleaned_data['password']
            user = authenticate(
                request, username=form2.cleaned_data['username'], password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect(reverse('sneakers_app:profile'))
            else:
                form2.add_error('username', 'Invalid Login')
                return render(request, 'sneakers_app/login.html', {'form2': form2})


def register(request):
    if request.method == 'GET':
        form = NewSignUpForm()
        return render(request, 'sneakers_app/register.html', {
            'form': form,
        })
    elif request.method == 'POST':
        form = NewSignUpForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
                email=form.cleaned_data['email'],
                password=form.cleaned_data['password'],
            )
        return HttpResponseRedirect(reverse('sneakers_app:user_login'))


def profile(request):
    person = User.objects.all()
    context = {
        'person': person
    }
    return render(request, 'sneakers_app/profile.html', context)


# # logout function
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('sneakers_app:user_login'))
