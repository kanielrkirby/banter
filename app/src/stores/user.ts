// user.js
import { ref, reactive } from 'vue';

// Create a ref for the user's authentication status
const isAuthenticated = ref(false);

// Create a user object using reactive
const user = reactive({
  id: null,
  username: '',
});

// Functions to update user data and authentication status
function loginUser(userData: { id: number; username: string }) {
  isAuthenticated.value = true;
  Object.assign(user, userData);
}

function logoutUser() {
  isAuthenticated.value = false;
  Object.assign(user, {
    id: null,
    username: '',
  });
}

export { isAuthenticated, user, loginUser, logoutUser };

