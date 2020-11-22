<template>
  <div>
    <ul class="grid gap-8 grid-cols-list">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  components: {
    Item,
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
  }
}
</script>
