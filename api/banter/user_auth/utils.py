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

