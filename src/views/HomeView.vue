<template>
  <main v-for="article in news" :key="article.source.id" class="mt-10 w-full grid grid-cols-3 gap-4 p-4">
    <NewsArticle :article="article" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NewsArticle from '../components/NewsArticle.vue';
import type Article from '@/types/Article';
import Service from '@/services/Service'
import type ResponseData from '@/types/ResponseData';

export default defineComponent ({
  name: "HomePage",
  components: {
    NewsArticle
  },
  setup() {

    const news = ref<Article[]>([]);
    let query_param: string = "technology";

    async function getNews(param: string) {
      let response: ResponseData = await Service.getAll(param);
      // news.value = response.data.articles;
      news.value.push(...response.data.articles);
      // console.log(news.value);
      return news;
    }

    // invoke the function
    getNews(query_param);

    return { news }
  }
})
</script>
