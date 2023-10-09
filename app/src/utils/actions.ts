import { API_URL, API_WS_URL } from './constants';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

const options = { withCredentials: true }

const getResponse = (res: AxiosResponse) => {
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error(res.data);
  }
}

const removeById = (id: string) => {
  const element = document.querySelector(`[data-id="${id}"]`) as HTMLElement
  if (element) element.remove();
}

export const addFriend = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.post(`${API_URL}/friends/add`, {}, options);
  return getResponse(res);
};

export const blockUser = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.post(`${API_URL}/profile/relations/`, {
    id,
    status: "blocked",
  }, options);
  const response = getResponse(res);
  removeById(id)
  return response;
};

export const editRoom = async (...args: [string, string]) => {
  const [id, name] = args;
  const element = document.querySelector(`[data-id="${id}"]`) as HTMLElement
  const res = await axios.put(`${API_URL}/room/${id}/`, {
    name,
  }, options);
  const data = getResponse(res);
  const h4 = element?.querySelector("h4") as HTMLElement;
  if (h4) h4.textContent = data.name;
  return data;
};

export const unfriendUser = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/profile/relation/${id}/`, options);
  const response = getResponse(res);
  removeById(id)
  return response;
};

export const deleteRoom = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/room/${id}/`, options);
  const response = getResponse(res);
  removeById(id)
  return response;
};

export const leaveRoom = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.delete(`${API_URL}/room/${id}/`, options);
  const response = getResponse(res);
  removeById(id)
  return response;
};

export const createNewRoomWith = async (...args: [string, string[]]) => {
  const [name, profiles] = args;
  const res = await axios.post(`${API_URL}/rooms/`, {
    name,
    profiles,
  }, options);
  return getResponse(res);
};

export const createNewRoom = async (...args: [string]) => {
  const [name] = args;
  const res = await axios.post(`${API_URL}/rooms/`, {
    name,
  }, options);
  return getResponse(res);
};

export const removeUserFromRoom = async (...args: [string, string]) => {
  const [roomId, profileId] = args;
  const res = await axios.delete(`${API_URL}/room/${roomId}/profile/${profileId}`, {
    ...options,
  });
  return getResponse(res);
};

export const getRoomInfo = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/`, options);
  return getResponse(res);
};

export const getRoomMessages = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/messages/`, options);
  return getResponse(res);
};

export const getRoomUsers = async (...args: [string]) => {
  const [id] = args;
  const res = await axios.get(`${API_URL}/room/${id}/profiles/`, options);
  return getResponse(res);
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
  return getResponse(res);
};

export const getFriends = async (...args: []) => {
  const res = await axios.get(`${API_URL}/friends/`, options);
  return getResponse(res);
};

export const getRooms = async (...args: []) => {
  const res = await axios.get(`${API_URL}/profile/rooms/`, options);
  return getResponse(res);
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
