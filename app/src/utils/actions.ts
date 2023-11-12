import { API_URL, API_WS_URL } from './constants';
import axios from 'axios';

const options = { withCredentials: true }

const removeById = (id: string) => {
  const element = document.querySelector(`[data-id="${id}"]`) as HTMLElement
  if (element) element.remove();
}

export const addFriend = async (...args: [string]) => {
  const [email] = args;
  const res = await axios.post(`${API_URL}/profile/relations/?status=requested`, {
    email,
  }, options);
  return res;
};

export const rejectFriend = async (...args: [string]) => {
  const [email] = args;
  const res = await axios.post(`${API_URL}/profile/relations/?status=rejected`, {
    email
  }, options);
  return res;
}

export const blockUser = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.post(`${API_URL}/profile/relations/`, {
    id,
    status: "blocked",
  }, options);
  removeById(id)
  return res;
};

export const editRoom = async (...args: [string, string]) => {
  const [id, name] = args;
  const element = document.querySelector(`[data-id="${id}"]`) as HTMLElement
  const res = await axios.put(`${API_URL}/room/${id}/`, {
    name,
  }, options);
  const data = res.data
  const h4 = element?.querySelector("h4") as HTMLElement;
  if (h4) h4.textContent = data.name;
  return data;
};

export const unfriendUser = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/profile/relation/${id}/`, options);
  removeById(id)
  return res;
};

export const deleteRoom = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/room/${id}/`, options);
  removeById(id)
  return res
};

export const leaveRoom = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/room/${id}/`, options);
  removeById(id)
  return res
};

export const createNewRoomWith = async (...args: [string, string[]]) => {
  const [name, profiles] = args;
  const res = await axios.post(`${API_URL}/rooms/`, {
    name,
    profiles,
  }, options);
  return res;
};

export const createNewRoom = async (...args: [string]) => {
  const [name] = args;
  const res = await axios.post(`${API_URL}/rooms/`, {
    name,
  }, options);
  return res;
};

export const removeUserFromRoom = async (...args: [string, string]) => {
  const [roomId, profileId] = args;
  const res = await axios.delete(`${API_URL}/room/${roomId}/profile/${profileId}`, {
    ...options,
  });
  return res;
};

export const getRoomInfo = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/`, options);
  return res;
};

export const getRoomMessages = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/messages/`, options);
  return res;
};

export const getRoomUsers = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/profiles/`, options);
  return res;
};

export const connectToRoom = async (...args: [string]) => {
  const [id] = args;
  const socket = new WebSocket(`${API_WS_URL}/ws/room/${id}/`);
  socket.onopen = () => {
    console.log("connected");
  }
  socket.onmessage = (e) => {
    console.log(e.data);
  }
  socket.onclose = () => {
    console.log("disconnected");
  }
  return socket;
};

export const sendMessage = async (...args: [string, string]) => {
  const [id, message] = args;
  const res = await axios.post(`${API_URL}/room/${id}/messages/`, {
    message,
  }, options);
  return res;
};

export const getFriends = async (...args: []) => {
  const res = await axios.get(`${API_URL}/profile/relations/?status=friend`, options);
  return res;
};

export const getRooms = async (...args: []) => {
  const res = await axios.get(`${API_URL}/profile/rooms/`, options);
  return res;
};

export default {
  addFriend,
  blockUser,
  editRoom,
  unfriendUser,
  deleteRoom,
  leaveRoom,
  createNewRoomWith,
  createNewRoom,
  removeUserFromRoom,
  getRoomInfo,
  getRoomMessages,
  getRoomUsers,
  connectToRoom,
  sendMessage,
  getFriends,
  getRooms,
}
