class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Try to get the token from the Authorization header first (standard behavior)
        header = self.get_header(request)
        if header is None:
            raw_token = request.COOKIES.get('access_token')  # Using the actual name of your cookie
            if raw_token is None:
                return None

            # Validate the token and get the user
            validated_token = self.get_validated_token(raw_token)
            return self.user_model.objects.get(pk=validated_token["user_id"]), validated_token

        return super().authenticate(request)

