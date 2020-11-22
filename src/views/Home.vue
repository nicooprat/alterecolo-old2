<template>
  <div class="space-y-8">
    <Navigation v-if="categories.length" :isLoading="isLoading" :categories="categories" />

    <ul v-if="items.length" class="grid gap-8 grid-cols-list">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";
import Navigation from "@/components/Navigation";
import { isLoading } from "@/composable/data";

export default {
  components: {
    Item,
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
