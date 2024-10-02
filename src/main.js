import { createApp } from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// import axios from 'axios';

window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'reverb',
    key: 'hovew44vyr1lqdgs6n1e',
    wsHost: 'localhost',
    wsPort: 8082,
    wssPort: 8082,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
    auth: {
        headers: {
          Authorization: "Bearer 2|FOfkFLUWVMyJv9UUFHdR7yZ5CaX3PoQjuXp2tYd167852389"
        }
      }
});



createApp(App).mount('#app')
