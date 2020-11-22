<template>
  <ul class="grid gap-8 grid-cols-list">
    <template v-if="isLoading">
      <li v-for="item in Array.from(Array(12))" :key="item" class="h-48 bg-neutral-200 rounded-xl" />
    </template>
    <template v-else-if="items.length" >
      <Item v-for="item in items" :key="item.id" :item="item" class="-mx-4 xs:-mx-0" />
    </template>
  </ul>
</template>

<script>
import Item from "@/components/Item";

export default {
  components: {
    Item,
  },
  props: {
    items: {
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
