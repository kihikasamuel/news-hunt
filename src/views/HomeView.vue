<template>
  <main v-if="sorted_news" class="mt-10 min-h-screen grid grid-cols-12 p-4">
    <div v-for="(article, index) in sorted_news" :key="index" class="flex md:flex-row col-span-12 md:col-span-4 p-4 justify-center">
      <NewsArticle :article="article" />
    </div>
    <div class="inline-flex items-center justify-center gap-3">
      <a href="#" @click.prevent="decrement(pageNumber)" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
        <span class="sr-only">Prev</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"/>
        </svg>
      </a>

      <p class="text-xs text-gray-900">{{ pageNumber }}<span class="mx-0.25">/</span>{{ totalPages }}</p>

      <a href="#" @click.prevent="increment(pageNumber)" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
        <span class="sr-only">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </main>
  <main v-else-if="!sorted_news" id="else-block" class="mt-10 min-h-screen grid grid-cols-12 p-4">
      <p class="text-black font-bold">Loading...</p>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import NewsArticle from '../components/NewsArticle.vue';
import type Article from '@/types/Article';
import Service from '@/services/Service'
import type ResponseData from '@/types/ResponseData';
import { watch } from 'vue';

export default defineComponent ({
  name: "HomePage",
  components: {
    NewsArticle
  },
  setup() {

    const news = ref<Article[]>([]);
    let query_param: string = "technology";
    let page_size: number = 12;
    let pageNumber = ref<number>(1);
    let sort_term: string = "publishedAt";
    let totalRecords: number = 50;

    async function getNews(param: string, page_size: number, pageNumber: number, sort_term: string) {
      let response: ResponseData = await Service.getAll(param, page_size, pageNumber, sort_term);
      if(response.data.status === "ok") {
        totalRecords = response.data.totalResults
        return news.value.push(...response.data.articles);
      }
      else {
        return news.value = [];
      }
    }

    getNews(query_param, page_size, pageNumber.value, sort_term);
        
    // let getNews run inside a watcher
    
    const sorted_news = computed(() => {
      return [...news.value].sort((a: Article, b: Article) => a['publishedAt'] > b['publishedAt'] ? -1 : 1)
      // return news.value.slice(0).sort((a: Article, b: Article) => a['publishedAt'] > b['publishedAt'] ? -1 : 1)
    })

    const totalPages = computed(() => {
      return Math.ceil(totalRecords / page_size);
    })


    const increment = (page: number) => {
      console.log(page, pageNumber.value)
      page < totalPages.value ? pageNumber.value += 1 : pageNumber.value = totalPages.value;
    }

    const decrement = (page: number) => {
      page > 1 ? pageNumber.value -= 1 : pageNumber.value = 1;
    }
    

    return { sorted_news, totalPages, pageNumber, increment, decrement }
  }
})
</script>
