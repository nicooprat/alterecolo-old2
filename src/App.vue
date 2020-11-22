<template>
  <header class="text-primary-400 container mx-auto py-4">
    <svg viewBox="0 0 60 70" width="60px" height="70px">
      <path transform="translate(60,70) rotate(180)" fill="currentColor" d="M55,24.8L31.6,0.6C31.2,0.2,30.7,0,30.1,0c-0.1,0-0.2,0-0.3,0c-0.9,0-1.6,0.6-1.9,1.4L5.4,24.8l-0.1,0.1 C1.9,28.9,0,34.2,0,39.8s1.9,10.9,5.3,14.9c3.5,4.1,8.1,6.3,13.1,6.3c3.4,0,6.7-1.1,9.6-3.1v10.5c0,1.1,0.9,2,2,2s2-0.9,2-2V57.5 c3,2.3,6.5,3.5,10.1,3.5c5,0,9.6-2.3,13.1-6.3C62.1,46.5,62.1,33.1,55,24.8C55.1,24.9,55.1,24.9,55,24.8z M17.6,17.9l10.2,10.2 v0.1v15.3L10.1,25.7L17.6,17.9z M31.9,22.6v-16l8.2,8.5L31.9,22.6z M27.9,22.5L20.4,15l7.5-7.8V22.5z M31.9,28.1l11-10.1l7.6,7.8 L31.9,43.6V28.1z M18.4,57.1c-3.8,0-7.3-1.8-10-4.9c-2.8-3.3-4.3-7.6-4.3-12.3c0-4.1,1.2-8,3.4-11.1l20.4,20.4v3.4 C25.3,55.5,21.9,57.1,18.4,57.1z M52.1,52.1c-2.7,3.2-6.3,4.9-10,4.9c-3.8,0-7.3-1.8-10-4.9L32,52v-2.9l21.2-20.3 C57.8,35.7,57.5,45.8,52.1,52.1z" />
    </svg>
    <h1 class="font-bold">AlterÉcolo</h1>
  </header>

  <div class="container mx-auto">
    <div v-if="isLoading">LOADING</div>
    <router-view v-else :categories="getCategories" :items="getItems" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { fetch, getCategories, getItems, isLoading } from "@/composable/data";

export default {
  setup() {
    onMounted(fetch)

    return {
      getCategories,
      getItems,
      isLoading
    }
  }
}
</script>

<style>
body {
  @apply bg-neutral-100;
}
#app {
  @apply font-sans text-neutral-600;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  @apply max-w-7xl px-4 mx-auto;
}
</style>
