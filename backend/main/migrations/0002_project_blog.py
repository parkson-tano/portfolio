# Generated by Django 4.1.7 on 2023-02-22 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='blog',
            field=models.BooleanField(default=False),
        ),
    ]
