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

export const addFriend = async (id: string) => {
    const res = await axios.post(`${API_URL}/friends/add`, {}, options);
    return getResponse(res);
};

export const blockUser = async (id: string) => {
    //...
};

export const editRoom = async (id: string, name: string) => {
    //...
};

export const unfriendUser = async (id: string) => {
    //...
};

export const deleteRoom = async (id: string) => {
    //...
};

export const leaveRoom = async (id: string) => {
    //...
};

export const createNewRoomWith = async (name: string, id: string[]) => {
    //...
};

export const createNewRoom = async (name: string) => {
    //...
};

export const removeUserFromRoom = async (id: string, userId: string) => {
    //...
};

export const getRoomInfo = async (id: string) => {
    //...
};

export const getRoomMessages = async (id: string) => {
    //...
};

export const getRoomUsers = async (id: string) => {
    //...
};

export const connectToRoom = async (id: string) => {
    //...
};

export const sendMessage = async (id: string, message: string) => {
    //...
};

export const getFriends = async () => {
    //...
};

export const getRooms = async () => {
    //...
};

