from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        header = self.get_header(request)
        if header is None:
            raw_token = request.COOKIES.get('access_token')
            if raw_token is None:
                return None
            validated_token = self.get_validated_token(raw_token)
            return self.user_model.objects.get(pk=validated_token["user_id"]), validated_token

        return super().authenticate(request)

class EmailBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        User = get_user_model()
        try:
            user = User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            return None

        # If the user is found and the password matches, return the user
        if user.check_password(password) and self.user_can_authenticate(user):
            return user

