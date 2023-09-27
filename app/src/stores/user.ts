// user.js
import { ref, reactive } from 'vue';
import axios from 'axios';

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

async function checkAuth() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/auth`,
                                    { withCredentials: true });
    const data = response.data;
    if (data.user.id !== null && data.user.id !== undefined) {
      loginUser(data.user);
    }
  } catch (err) {
    console.error(err);
  }
}
checkAuth();

export { isAuthenticated, user, loginUser, logoutUser };

