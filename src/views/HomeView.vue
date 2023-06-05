<script lang="ts">
import { defineComponent } from 'vue';
import NewsArticle from '../components/NewsArticle.vue';

export default defineComponent ({
  name: "HomePage",
  components: {
    NewsArticle
  },
  data() {
    return {
      age: 25 as number,
    }
  },
})
</script>

<template>
  <main class="mt-10 w-full grid grid-cols-3 gap-4 p-4">
    <NewsArticle />
    <NewsArticle />
    <NewsArticle />
    <NewsArticle />
    <NewsArticle />

  </main>
</template>
