<template>
    <main v-if="sorted_news" class="mt-10 w-full min-h-screen grid grid-cols-12 p-4">
      <TransitionGroup name="list">
        <div v-for="(article, index) in sorted_news" :key="index" class="col-span-12 md:col-span-4 flex md:flex-row p-4 h-fit justify-center">
          <NewsArticle :article="article" />
        </div>
      </TransitionGroup>
      <div class="col-span-12 flex md:flex-row justify-center">
        <a href="#" @click.prevent="decrement(pageNumber)" class="inline-flex pr-2 h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
          <span class="sr-only">Prev</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"/>
          </svg>
        </a>
  
        <span class="text-xs text-gray-900">{{ pageNumber }}<span class="inline-flex justify-center">/</span>{{ totalPages }}</span>
  
        <a href="#" @click.prevent="increment(pageNumber)" class="inline-flex pl-2 h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
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
    <!-- <div v-if="loader" class="mt-10 flex justify-center">
      <p>Loading...</p>
    </div> -->
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref, watch, watchEffect, type PropType } from 'vue';
  import NewsArticle from '../components/NewsArticle.vue';
  import type Article from '@/types/Article';
  import Service from '@/services/Service'
  import type ResponseData from '@/types/ResponseData';
  
  export default defineComponent ({
    name: "ScienceNews",
    components: {
      NewsArticle
    },
    props: {
      searchQuery: {
        required: true,
        type: String as PropType<string>
      }
    },
    setup(props) {
  
      const news = ref<Article[]>([]);
      let page_size: number = 12;
      let pageNumber = ref<number>(1);
      let sort_term: string = "publishedAt";
      let totalRecords = ref<number>(1);
      let loader: boolean = false
  
      const totalPages = computed(() => {
        return Math.ceil(totalRecords.value / page_size);
      })
  
  
      const increment = (page: number) => {
        page < totalPages.value ? pageNumber.value += 1 : pageNumber.value = totalPages.value;
      }
  
      const decrement = (page: number) => {
        page > 1 ? pageNumber.value -= 1 : pageNumber.value = 1;
      }
  
      watchEffect( async () => {
        loader = true;
        const response: ResponseData = await Service.getAll(props.searchQuery, page_size, pageNumber.value, sort_term);
        news.value = response.data.articles
        totalRecords.value = response.data.totalResults
        loader = false
      })
  
      watch(() => props.searchQuery, () => {
        pageNumber.value = 1;
      })
  
      const sorted_news = computed(() => {
        return [...news.value].sort((a: Article, b: Article) => a['publishedAt'] > b['publishedAt'] ? -1 : 1)
      })
      
  
      return { sorted_news, totalPages, pageNumber, increment, decrement, loader }
    }
  })
  </script>
  
  <style scoped>
    .list-enter-active, .list-leave-active {
      transition: all 0.5s ease-out;
    }
  
    .list-enter-from, .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
  
    .list-enter-to, .list-leave-from {
      opacity: 1;
      transform:translate(30px);
    }
  </style>
  