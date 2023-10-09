import { API_URL } from './constants';
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

export const addFriend = async (...args: [string]) => {
  id = args[0];
  const res = await axios.post(`${API_URL}/friends/add`, {}, options);
  return getResponse(res);
};

export const blockUser = async (...args: [string]) => {
  //...
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
  //...
};

export const deleteRoom = async (...args: [string]) => {
  //...
};

export const leaveRoom = async (...args: [string]) => {
  //...
};

export const createNewRoomWith = async (...args: [string, string[]]) => {
  //...
};

export const createNewRoom = async (...args: [string]) => {
  //...
};

export const removeUserFromRoom = async (...args: [string, string]) => {
  //...
};

export const getRoomInfo = async (...args: [string]) => {
  //...
};

export const getRoomMessages = async (...args: [string]) => {
  //...
};

export const getRoomUsers = async (...args: [string]) => {
  //...
};

export const connectToRoom = async (...args: [string]) => {
  //...
};

export const sendMessage = async (...args: [string, string]) => {
  //...
};

export const getFriends = async (...args: []) => {
  //...
};

export const getRooms = async (...args: []) => {
  //...
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
