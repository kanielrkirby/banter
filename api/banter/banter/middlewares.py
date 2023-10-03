from channels.middleware import BaseMiddleware
from channels.db import database_sync_to_async
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from http.cookies import SimpleCookie
from django.contrib.auth import get_user_model

class JwtAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        # Get the token from the scope (from the httpOnly cookie)
        # token = scope['cookies'].get('access_token', None)
        # cookies is not available in the scope on a ws connection
        cookies = None
        headers = dict(scope['headers'])
        cookies_header = headers.get(b'cookie')
        token = None
            
        if cookies_header:
            # Parse the cookies string
            cookies = SimpleCookie()
            cookies.load(cookies_header.decode('utf-8'))
            token = cookies.get('access_token').value
        
        if token:
            # Validate the token using SimpleJWT's UntypedToken. This will raise an error if it's invalid.
            try:
                from rest_framework_simplejwt.tokens import UntypedToken
                UntypedToken(token)
                # Decoding the token payload to get the user ID. 
                # Note: We're assuming "user_id" is a payload field; adjust as necessary.
                payload = UntypedToken(token).payload
                scope['user'] = await self.get_user(payload['user_id'])
            except (InvalidToken, TokenError):
                # Token is invalid. You might want to handle this differently.
                pass

        return await super().__call__(scope, receive, send)

    @database_sync_to_async
    def get_user(self, user_id):
        User = get_user_model()
        return User.objects.get(id=user_id)

