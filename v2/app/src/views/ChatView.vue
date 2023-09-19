<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <strong>{{ message.username }}:</strong> {{ message.message }}
    </div>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },

  created() {
    this.$socket.onMessage((message) => {
      this.messages.push({
        username: message.username,
        message: message.message,
        id: message.id,
      });
    });
  },

  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.$socket.sendObj({ message: this.newMessage });
        this.newMessage = '';
      }
    },
  },

  beforeDestroy() {
    this.$socket.close();
  },
};
</script>

