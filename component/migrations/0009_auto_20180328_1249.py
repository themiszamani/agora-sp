# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-28 12:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0008_auto_20180119_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicecomponent',
            name='logo',
            field=models.ImageField(default='/var/www/html/agora/static/img/logos/logo-none.jpg', upload_to='static/img/logos'),
        ),
    ]
