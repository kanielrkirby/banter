import { ref } from 'vue'
import socket from './socket'
import axios from 'axios'

export const invites = ref(0)

  ; (async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/self/`,
        { withCredentials: true })
      const data = response.data
      console.log(data)
      if (data.id !== null && data.id !== undefined) {
        invites.value = data.invites
      }
    } catch (err) {
      console.log(err)
    }
  })()

socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  if (data.type === 'INVITE') {
    invites.value++
  }
})
