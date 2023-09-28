from django.shortcuts import render

class ProfileAuthView(APIView):
    """
    View to check if a profile is authenticated, and if so, return the profile.
    Also, this view is used to refresh the access token.
    """
    authentication_classes = []
    permission_classes = [AllowAny]

    def get(self, request):
        """
        Get the authenticated profile or handle token refresh.
        """
        response = Response()

        def logout():
            print("In logout")
            response = Response("Unauthorized", status=status.HTTP_401_UNAUTHORIZED)
            response.delete_cookie('access_token')
            response.delete_cookie('refresh_token')
            return response

        try:
            print("In try")
            refresh_token = request.COOKIES.get('refresh_token')
            if refresh_token:
                print("In refresh_token")
                refresh = RefreshToken(refresh_token)
                access_token = str(refresh.access_token)

                try:
                    print("In try 2")
                    access = AccessToken(access_token)
                    user = access.payload.get('user_id')  # Assuming the user ID is stored in the token
                    if user:
                        print("In user")
                        # Retrieve the user and include user data in response_data
                        profile = Profile.objects.get(id=user)  # Replace with your UserProfile model retrieval logic
                        serializer = ProfileSerializer(profile)
                        response.data = serializer.data
                        response.set_cookie('access_token', access_token, httponly=True, secure=secure)
                        response.data['password'] = None
                        response.data['authenticated'] = True

                except Exception as e:
                    print("In except")
                    print(e)
                    return logout()

        except Exception as e:
            print("In except 2")
            return logout()

        return response

class ProfileLogoutView(APIView):
    """
    View to logout a profile.
    """
    permission_classes = []
    def get(self, request):
        """
        Logout a profile.
        """
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response

