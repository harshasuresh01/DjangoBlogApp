# Generated by Django 4.2.5 on 2023-10-04 00:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_comment_blogpost_comments'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='blog.blogpost'),
            preserve_default=False,
        ),
    ]
