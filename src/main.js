import { createApp } from 'vue';
import { setupStore } from './store/setup';
import vClickOutside from 'click-outside-vue3';
import './style.css';
import App from './App.vue';

const app = createApp(App);

setupStore(app);

app.use(vClickOutside);

app.mount('#app');
