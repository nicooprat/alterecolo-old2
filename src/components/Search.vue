<template>
  <input
    type="text"
    :value="search"
    @focus="$event.target.select()"
    @keydown.esc="$emit('update:search', '')"
    @input="$emit('update:search', $event.target.value.trim())"
    class="py-2 px-4 rounded-md"
    placeholder="Rechercher..."
  />
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      required: true
    }
  }
};
</script>
