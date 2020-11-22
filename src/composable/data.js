import { computed, reactive, watchEffect } from "vue";
import axios from "axios";
import Fuse from "fuse.js";

import { sync } from "@/composable/sync";

const state = reactive({
  isLoading: true,
  categories: [],
  items: [],
  search: sync("search")
});

// Data

export const fetch = async () => {
  const { data } = await axios.get("/.netlify/functions/airtable");
  state.categories = data.categories;
  state.items = data.items;
  state.isLoading = false;
};

export const getCategories = computed(() => state.categories);

export const getItems = computed(() => {
  // Must store state.items in new const to wake them watched
  const items = state.items;
  if (!state.search) {
    return items;
  }
  const matches = fuse.search(state.search);
  return matches.map(match => match.item);
});

export const isLoading = computed(() => state.isLoading);

// Search

const fuse = new Fuse([], {
  findAllMatches: true,
  keys: ["title", "replaced"],
  threshold: 0.3
});

watchEffect(() => fuse.setCollection(state.items));

export const getSearch = computed({
  get: () => state.search,
  set: search => (state.search = search)
});
