# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-03-27 14:30
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0030_servicedetails_sla_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='value_to_customer',
            new_name='user_value',
        ),
        migrations.AddField(
            model_name='service',
            name='certifications',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='endpoint',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='languages',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='screenshots_videos',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='standards',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='tagline',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='target_customers',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='target_users',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='url',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]
