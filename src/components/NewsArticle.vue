<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NewsArticle",
})
</script>
<template>
    <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<article
  class="col-span-3 md:col-span-1 overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-sm"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>

    <a
      href="#"
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
    <!-- <article class="col-span-4 flex ml-2 bg-white transition hover:shadow-xl p-4 rounded-md border-2 border-gray-200">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
            </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
            <img
            alt="Guitar"
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            class="aspect-square h-full w-full object-cover"
            />
        </div>

        <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h3 class="font-bold uppercase text-gray-900">
                Finding the right guitar for your style - 5 tips
                </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, at vero ducimus itaque commodi autem sapiente sit, labore praesentium, cum odit maiores unde quae esse quidem rerum doloremque aut id?
            </p>
            </div>

            <div class="sm:flex sm:items-end sm:justify-end">
            <a
                href="#"
                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
                Read Blog
            </a>
            </div>
        </div>
    </article> -->
</template>

<style scoped>
</style>