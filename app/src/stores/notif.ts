import { ref } from 'vue'

const title = 'New notification'
const options = {
  body: 'You have a new notification',
  icon: '/assets/logo.png',
  sound: '/assets/notif.wav',
}

const notify = () => {
  if (Notification.permission === 'granted') {
    new Notification(title, options)
  } else if (Notification.permission !== 'default') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(title, options)
      }
    })
  }
}

const notif = {
  notifications:  ref(0),
  add(n = 1) {
    this.notifications.value += n
    if ("Notification" in window) {
      notify()
    }
  },
  clear() {
    this.notifications.value = 0
  },
  remove(n = 1) {
    this.notifications.value -= n
  },
}

export default notif

