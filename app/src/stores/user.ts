// user.js
import { ref, reactive } from 'vue';
import axios from 'axios';
import router from '../router';

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
  axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/logout/`,
    { withCredentials: true });
  if (location.pathname !== '/login' && location.pathname !== '/signup')
    router.push({ name: 'login' });
}

async function checkAuth() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/auth/`,
      { withCredentials: true });
    const data = response.data;
    if (data.id !== null && data.id !== undefined) {
      loginUser({ id: data.id, username: data.username });
    } else {
      throw new Error('User is not authenticated');
    }
  } catch (err) {
    logoutUser();
  }
}



export { isAuthenticated, user, loginUser, logoutUser, checkAuth };

