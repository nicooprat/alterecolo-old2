<template>
  <nav class="flex items-center space-x-4">
    <button
      v-for="(label, key) in {
        createdTime: 'Récentes',
        difficulty: 'Faciles'
      }"
      :key="key"
      class="flex items-center space-x-2 font-bold"
      :class="{ 'text-primary-400': sort === key }"
      @click="$emit('update:sort', key)"
    >
      <span>{{ label }}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        :style="sort === key && order === 'asc' ? 'transform: scaleY(-1)' : ''"
      >
        <path
          fill="currentColor"
          d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
        />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    sort: {
      type: String,
      required: true
    },
    order: {
      type: String,
      required: true
    }
  }
};
</script>
