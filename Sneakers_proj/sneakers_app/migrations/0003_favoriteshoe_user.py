# Generated by Django 4.0.3 on 2022-06-08 01:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sneakers_app', '0002_alter_favoriteshoe_flightclub_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='favoriteshoe',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='favorites', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]