export const socket = new WebSocket(`${import.meta.env.VITE_BACKEND_WS_URL}/ws/`)

if (import.meta.env.MODE === 'development') {
  socket.addEventListener('open', () => {
    console.log('Socket connected')
  })

  socket.addEventListener('close', () => {
    console.log('Socket disconnected')
  })

  socket.addEventListener('message', (e: MessageEvent) => {
    console.log(`Socket message: ${e.data}`)
  })

  socket.addEventListener('error', (e: Event) => {
    console.log(`Socket error: ${e}`)
  })
}

export default socket
