<template>
  <article
    class="w-full rounded-lg border-2 border-gray-200 bg-white shadow-sm"
  >
    <img
      :alt="`${ article.title }`"
      :src="`${ article.urlToImage || defaultImg }`"
      class="h-56 w-full object-cover"
    />

    <div class="p-4 sm:p-6">
      <a href="#">
        <h3 class="text-lg font-medium text-gray-900">
          {{ article.title }}
        </h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {{ article.description }}
      </p>

      <a
        :href="`${article.url}`"
        target="_blank"
        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        Read full article

        <span
          aria-hidden="true"
          class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
          &rarr;
        </span>
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import type Article from '@/types/Article';
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
    name: "NewsArticle",
    props: {
      article: {
        type: Object as PropType<Article>,
        required: true
      }
    },
    setup(props) {
      // console.table(props.article)
      let defaultImg = ref<string>("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");

      return { defaultImg }
    }
})
</script>

<style scoped>
</style>