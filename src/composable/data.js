import { computed, reactive, watchEffect } from "vue";
import axios from "axios";
import Fuse from "fuse.js";

import { sync } from "@/composable/sync";

const state = reactive({
  isLoading: true,
  categories: [],
  items: [],
  search: sync("search"),
  sort: sync("sort", "createdTime"),
  order: sync("order", "desc")
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
  let items = state.items;

  // Search

  if (state.search) {
    items = fuse.search(state.search).map(match => match.item);
  }

  // Sort

  if (state.sort === "createdTime") {
    items = items.sort((a, b) =>
      Date.parse(a.createdTime) < Date.parse(b.createdTime) ? 1 : -1
    );
  }

  if (state.sort === "difficulty") {
    items = items.sort((a, b) => (a.difficulty > b.difficulty ? 1 : -1));
  }

  if (state.order === "asc") {
    items = items.reverse();
  }

  return items;
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

// Sort

export const getSort = computed({
  get() {
    return state.sort;
  },
  set(newSort) {
    if (state.sort === newSort) {
      if (state.order === "desc") {
        state.order = "asc";
      } else {
        state.order = "desc";
      }
    } else {
      state.order = "desc";
      state.sort = newSort;
    }
  }
});

export const getOrder = computed(() => state.order);
