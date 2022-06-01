from django.urls import URLPattern, path
from . import views


app_name = 'sneakers_app'
urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.user_login, name='user_login'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('logout/', views.user_logout, name='logout'),
]
