import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import GamesList from './components/GamesList.vue';
import GameDetails from './components/GameDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: GamesList },
    { path: '/game/:id', name: 'GameDetails', component: GameDetails, props: true }
  ]
});

createApp(App).use(router).mount('#app');
