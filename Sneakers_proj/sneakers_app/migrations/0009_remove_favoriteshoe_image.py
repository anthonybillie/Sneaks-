# Generated by Django 4.0.3 on 2022-06-10 04:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sneakers_app', '0008_alter_favoriteshoe_releasedate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favoriteshoe',
            name='image',
        ),
    ]
