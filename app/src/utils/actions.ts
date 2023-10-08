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

export const actions = {
  addFriend: async (id: string) => {
    const res = await axios.post(`${API_URL}/friends/add`, {}, options);
    return getResponse(res)
  },
  blockUser: async (id: string) => {

  },
  editRoom: async (id: string, name: string) => {

  },
  unfriendUser: async (id: string) => {

  },
  deleteRoom: async (id: string) => {

  },
  leaveRoom: async (id: string) => {

  },
  createNewRoomWith: async (name: string, id: string[]) => {

  },
  createNewRoom: async (name: string) => {

  },
  removeUserFromRoom: async (id: string, userId: string) => {

  },
  getRoomInfo: async (id: string) => {

  },
  getRoomMessages: async (id: string) => {

  },
  getRoomUsers: async (id: string) => {

  },
  connectToRoom: async (id: string) => {

  },
  sendMessage: async (id: string, message: string) => {

  },
  getFriends: async () => {

  },
  getRooms: async () => {

  },
}
