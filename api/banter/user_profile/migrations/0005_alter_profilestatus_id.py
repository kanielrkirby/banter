# Generated by Django 4.2.5 on 2023-09-26 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0004_alter_profilestatus_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilestatus',
            name='id',
            field=models.IntegerField(auto_created=True, primary_key=True, serialize=False),
        ),
    ]