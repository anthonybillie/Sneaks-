# Generated by Django 4.0.3 on 2022-06-08 02:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sneakers_app', '0003_favoriteshoe_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favoriteshoe',
            name='user',
        ),
    ]
