<template>
  <div class="space-y-8">
    <header class="flex items-center space-x-8">
      <Search v-model:search="getSearch" />
      <Sort v-model:sort="getSort" v-model:order="getOrder" />
    </header>
    <Navigation :isLoading="isLoading" :categories="categories" />
    <List :isLoading="isLoading" :items="items" />
  </div>
</template>

<script>
import List from "@/components/List";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { isLoading, getSearch, getSort, getOrder } from "@/composable/data";

export default {
  components: {
    List,
    Navigation,
    Search,
    Sort
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      isLoading,
      getSearch,
      getSort,
      getOrder
    };
  }
};
</script>
