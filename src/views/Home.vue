<template>
  <div class="space-y-8">
    <Search v-model:search="getSearch" />
    <Navigation :isLoading="isLoading" :categories="categories" />
    <List :isLoading="isLoading" :items="items" />
  </div>
</template>

<script>
import List from "@/components/List";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import { isLoading, getSearch } from "@/composable/data";

export default {
  components: {
    List,
    Navigation,
    Search
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
      getSearch
    };
  }
};
</script>
