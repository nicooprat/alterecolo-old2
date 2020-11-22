import { computed, watchEffect } from "vue";
import Fuse from "fuse.js";

import { sync } from "@/composable/sync";

export const useSearch = items => {
  const fuse = new Fuse([], {
    findAllMatches: true,
    keys: ["title", "replaced"],
    threshold: 0.3
  });

  watchEffect(() => fuse.setCollection(items));

  let query = sync("search");

  return {
    query,
    results: computed(() => fuse.search(query).map(match => match.item))
  };
};
