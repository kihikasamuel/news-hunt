<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="max-w-full mx-10 border-b-2 border-gray-100">
      <nav aria-label="Site Nav" class="mx-auto flex max-w-5xl items-center justify-between p-4">
        <RouterLink to="/" class="inline-flex text-gray-100 items-center justify-center rounded-lg">
          <span class="sr-only">News Hunt</span>
          <div class="md:flex md:flex-row">
            <span class="text-grey-100">N</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span class="text-grey-100">WS</span>
          </div>

        </RouterLink>

        <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li class="lg:block">
            <RouterLink class="rounded-lg px-3 py-2" to="/"> Technology </RouterLink>
          </li>
          <li class="lg:block">
            <RouterLink class="rounded-lg px-3 py-2" to="/"> Sports </RouterLink>
          </li>
          <li class="lg:block">
            <RouterLink class="rounded-lg px-3 py-2" to="/"> Technology </RouterLink>
          </li>
          <li class="lg:block">
            <RouterLink class="rounded-lg px-3 py-2" to="/"> Technology </RouterLink>
          </li>

          <li><RouterLink class="rounded-lg px-3 py-2" to="/"> About the Developer </RouterLink></li>

          <li>
            <a class="flex items-center gap-2 rounded-lg px-3 py-2" href="https://github.com/kihikasamuel" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
  </header>

  <!-- main content -->
  <RouterView />
  <!-- end main content -->

  <footer aria-label="Site Footer" class="bg-gray-200">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center sm:justify-start">
          <RouterLink to="/" class="inline-flex text-gray-100 items-center justify-center rounded-lg">
            <div class="md:flex md:flex-row">
              <span class="text-black">N</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <span class="text-black">WS</span>
            </div>
          </RouterLink>
        </div>

        <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
