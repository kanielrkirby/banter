import { reactive } from 'vue'
import socket from './socket'
import axios from 'axios'
import { RelationStatusEnum } from "../types/StatusEnum"
import { type Profile } from "./user"

interface Invite extends Profile {
  invite_sent_at: string
}

export const invites = reactive<Invite[]>([])

  ; (async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/?status=${RelationStatusEnum.received}`,
        { withCredentials: true })
      console.log(response)
      const data = response.data.results
      if (data !== null && data !== undefined && data.length > 0) {
        invites.push(...data)
      }
    } catch (err) {
      console.log(err)
    }
  })()

socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  const friendRequest = data.friend_request
  if (friendRequest) {
    invites.push(friendRequest)
  }
})
