// user.js
import { ref, reactive } from 'vue';
import axios from 'axios';

// Create a ref for the user's authentication status
const isAuthenticated = ref(false);

// Create a user object using reactive
const user = reactive<{
  id: number | null;
  username: string;
}>({
  id: null,
  username: '',
});

// Functions to update user data and authentication status
function loginUser(userData: { id: number; username: string }) {
  isAuthenticated.value = true;
  user.id = userData.id;
  user.username = userData.username;
}

function logoutUser() {
  isAuthenticated.value = false;
  Object.assign(user, {
    id: null,
    username: '',
  });
  // Clear the httpOnly cookie
  axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/logout/`,
    { withCredentials: true });
}

async function checkAuth() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/auth/`,
      { withCredentials: true });
    const data = response.data;
    console.log(data);
    if (data.id !== null && data.id !== undefined) {
      loginUser({ id: data.id, username: data.username });
    } else {
      logoutUser();
    }
  } catch (err) {
    console.error(err);
  }
}

export { isAuthenticated, user, loginUser, logoutUser, checkAuth };

