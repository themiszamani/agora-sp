# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-09-03 11:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0050_auto_20190729_1148'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='service',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
