from django.urls import URLPattern, path
from . import views


app_name = 'sneakers_app'
urlpatterns = [
    path('', views.index, name='index'),
]
