import { ref } from 'vue'
import socket from './socket'
import axios from 'axios'

type Invite = {
  id: number
  name: number
}

export const invites = ref<Invite[]>([])

  ; (async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/relations?status=received/`,
        { withCredentials: true })
      const data = response.data
      console.log(data)
      if (data.id !== null && data.id !== undefined) {
        invites.value = data.results
      }
    } catch (err) {
      console.log(err)
    }
  })()

socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  if (data.type === 'INVITE') {
    invites.value.push(data.invite)
  }
})
