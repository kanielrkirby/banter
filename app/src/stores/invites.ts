import { reactive } from 'vue'
import socket from './socket'
import axios from 'axios'
import { RelationStatusEnum } from "../types/StatusEnum"
import { watchEffect } from 'vue';

type Invite = {
  id: number
  username: string
}

export const invites = reactive<Invite[]>([])

  ; (async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/?status=${RelationStatusEnum.received}`,
        { withCredentials: true })
      console.log(response)
      const data = response.data.results
      if (data !== null && data !== undefined && data.length > 0) {
        console.log('HERE')
        invites.push(...data)
      }
    } catch (err) {
      console.log(err)
    }
  })()


watchEffect(() => {
  console.log("changed", invites);
});


socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  if (data.type === 'INVITE') {
    invites.push(data.invite)
  }
})
