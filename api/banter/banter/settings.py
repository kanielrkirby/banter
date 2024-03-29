"""
Django settings for banter project.

Generated by 'django-admin startproject' using Django 4.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

PORT = os.getenv('BACKEND_PORT') or 8000

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-loz0h1*3o7v^(e_3uqa%x=%=r5x4d2#ler4juqq4hgv9$mg0!)'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DJANGO_DEBUG') or False

ALLOWED_HOSTS = [
    "*",
    os.getenv('FRONTEND_HOST'),
    f'{os.getenv("FRONTEND_HOST")}:{os.getenv("FRONTEND_PORT")}',
]

AUTH_USER_MODEL = 'user_profile.Profile'

# Application definition

INSTALLED_APPS = [
    'channels',
    'channels_redis',

    'corsheaders',
    'rest_framework',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'user_profile',
    'user_auth',
    'room',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    f'{os.getenv("FRONTEND_HOST")}:{os.getenv("FRONTEND_PORT")}',
]

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

CORS_ALLOW_CREDENTIALS = True

ROOT_URLCONF = 'banter.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'banter.wsgi.application'
ASGI_APPLICATION = 'banter.asgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
         'ENGINE': 'django.db.backends.mysql',
         'NAME': 'banter',
         'USER': os.getenv('MYSQL_USER'),
         'PASSWORD': os.getenv('MYSQL_PASSWORD'),
         'HOST': os.getenv('MYSQL_HOST'),
         'PORT': os.getenv('MYSQL_PORT'),
    }
}

CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': f"redis://{os.getenv('REDIS_HOST')}:{os.getenv('REDIS_PORT')}/1",
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}


CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [f'{os.getenv("REDIS_HOST")}://:{os.getenv("REDIS_PASSWORD")}@{os.getenv("REDIS_HOST")}:{os.getenv("REDIS_PORT")}'],
        },
    },
}



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTHENTICATION_BACKENDS = [
    'user_auth.utils.EmailBackend',
]


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
         'user_auth.utils.CookieJWTAuthentication',
     ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.CursorPagination',
    'CURSOR_PAGINATION_PARAM': 'cursor',
    'PAGE_SIZE': 30,
    'CURSOR_PAGINATION_CURSOR_FORMAT': 'iso-8601',
}

import datetime
JWT_AUTH = {
    'JWT_RESPONSE_PAYLOAD_HANDLER':
    'rest_framework_jwt.utils.jwt_response_payload_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(seconds=3000),
    'JWT_ALLOW_REFRESH': True,
}

