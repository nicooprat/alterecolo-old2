<template>
  <nav class="flex items-center flex-wrap -mx-3 leading-tight">
    <template v-if="isLoading">
      <span v-for="item in [1, 2, 3, 4]" :key="item" class="rounded-full bg-neutral-200 w-28 h-4 m-3" />
    </template>
    <router-link v-else v-for="category in categories" :key="category.slug" :to="{ name: 'Category', params: { category: category.slug } }" class="text-primary-400 py-2 px-3 flex rounded-md hover:text-white hover:bg-primary-400 focus:text-white focus:bg-primary-400 focus:outline-none">
      <strong>{{ category.name }}</strong>
      <sup class="flex items-center ml-1 text-xs font-bold opacity-80">{{ category.count }}</sup>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped></style>
