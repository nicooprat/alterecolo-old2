import { computed, reactive } from "vue";
import axios from "axios";

const state = reactive({
  isLoading: true,
  categories: [],
  items: [],
})

export const fetch = async () => {
  const { data } = await axios.get('/.netlify/functions/airtable')
  state.categories = data.categories;
  state.items = data.items;
  state.isLoading = false;
}

export const getCategories = computed(() => state.categories)

export const getItems = computed(() => state.items)

export const isLoading = computed(() => state.isLoading)
