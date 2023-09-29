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

async function refresh() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/token/refresh/`,
      {},
      { withCredentials: true });
    const data = response.data;
    console.log(data);
    if (data.user.id !== null && data.user.id !== undefined) {
      loginUser(user as { id: number; username: string });
    } else {
      throw new Error('User is not authenticated');
    }
  } catch (err) {
    console.log(err);
    logoutUser()
  }
}

function logoutUser() {
  isAuthenticated.value = false;
  Object.assign(user, {
    id: null,
    username: '',
  });
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/token/discard/`,
    {},
    { withCredentials: true });
  if (location.pathname !== '/login' && location.pathname !== '/signup')
    router.push({ name: 'login' });
}

async function checkAuth() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/profile/`,
      { withCredentials: true });
    const data = response.data;
    console.log(data);
    if (data.id !== null && data.id !== undefined) {
      loginUser(data as { id: number; username: string });
    } else {
      throw new Error('User is not authenticated');
    }
  } catch (err) {
    refresh()
  }
}



export { isAuthenticated, user, loginUser, logoutUser, checkAuth };

