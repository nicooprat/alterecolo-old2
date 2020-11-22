import { computed, reactive, watch, watchEffect } from "vue";
import axios from "axios";
import Fuse from 'fuse.js'

import router from '@/router'

const state = reactive({
  isLoading: true,
  categories: [],
  items: [],
  search: '',
})

// Router sync

watchEffect(() => {
  state.search = router.currentRoute.value.query.search || ''
})

watchEffect(() => {
  router.replace({
    ...router.currentRoute,
    query: {
      ...router.currentRoute.query,
      search: state.search || undefined, // undefined removes key from URL
    }
  })
})

// Data

export const fetch = async () => {
  const { data } = await axios.get('/.netlify/functions/airtable')
  state.categories = data.categories;
  state.items = data.items;
  state.isLoading = false;
}

export const getCategories = computed(() => state.categories)

export const getItems = computed(() => {
  // Must state.items in new const to wake them watched
  const items = state.items
  if (!state.search) {
    return items
  }
  const matches = fuse.search(state.search)
  return matches.map((match) => match.item)
})

export const isLoading = computed(() => state.isLoading)

// Search

const fuse = new Fuse([], {
  findAllMatches: true,
  keys: ['title', 'replaced'],
  threshold: 0.3
})

watch(() => state.items, (items) => fuse.setCollection(items))

export const getSearch = computed({
  get: () => state.search,
  set: (search) => state.search = search,
})
