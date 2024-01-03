<template>
  <div v-if="game">
    <h2>{{ game.title }}</h2>
    <!-- Display detailed information about the selected game -->
    <p>{{ game.description }}</p>
    <!-- Other game details -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      game: null as any // Selected game details fetched from the API
    };
  },
  methods: {
    async fetchGameDetails(id) {
      try {
        const response = await axios.get(`https://www.freetogame.com/api/game/${id}`);
        this.game = response.data;
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    }
  },
  mounted() {
    const gameId = this.$route.params.id; // Get the game ID from route params
    this.fetchGameDetails(gameId); // Fetch game details when the component mounts
  }
});
</script>

<style scoped>
/* Your component-specific styling */
</style>
