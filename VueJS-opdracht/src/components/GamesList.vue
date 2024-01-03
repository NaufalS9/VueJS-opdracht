<template>
  <div>
    <h1>Free to Play Games</h1>
    <ul>
      <li v-for="game in games" :key="game.id" @click="showDetails(game)">
        {{ game.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      games: [] as any[] // Your list of games fetched from the API
    };
  },
  methods: {
    async fetchGames() {
      try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        this.games = response.data;
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    },
    showDetails(game) {
      this.$router.push({ name: 'GameDetails', params: { id: game.id }});
    }
  },
  mounted() {
    this.fetchGames(); // Fetch games when the component mounts
  }
});
</script>

<style scoped>
/* Your component-specific styling */
</style>
