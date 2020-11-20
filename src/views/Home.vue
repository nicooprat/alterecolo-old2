<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
