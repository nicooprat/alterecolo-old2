<template>
  <div class="space-y-8">
    <Navigation :isLoading="isLoading" :categories="categories" />
    <List :isLoading="isLoading" :items="items" />
  </div>
</template>

<script>
import List from "@/components/List";
import Navigation from "@/components/Navigation";
import { isLoading } from "@/composable/data";

export default {
  components: {
    List,
    Navigation,
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
  },
  setup() {
    return {
      isLoading
    }
  }
}
</script>
