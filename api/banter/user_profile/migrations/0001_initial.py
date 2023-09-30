# Generated by Django 4.2.5 on 2023-09-30 00:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('room', '0001_initial'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=128, null=True, verbose_name='password')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('offline', 1), ('active', 2), ('busy', 3), ('deleted', 4)], max_length=20)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='ProfileRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('owner', 1), ('admin', 2), ('member', 3), ('muted', 4), ('banned', 5), ('ignored', 6)], max_length=20)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='room.room')),
            ],
            options={
                'unique_together': {('profile', 'room')},
            },
        ),
        migrations.CreateModel(
            name='ProfileRelation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('friend', 1), ('requested', 2), ('received', 3), ('blocked', 4), ('ignored', 5), ('rejected', 6)], max_length=20)),
                ('receiver_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receiver_relations', to=settings.AUTH_USER_MODEL)),
                ('requester_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requester_relations', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['requester_profile', 'receiver_profile'],
                'unique_together': {('requester_profile', 'receiver_profile')},
            },
        ),
    ]
