// eslint-disable-next-line no-unused-vars
import { ref, watch } from "vue";
// eslint-disable-next-line no-unused-vars
import router from "@/router";

export const sync = (key, value) => {
  const val = ref(value);

  // Sync at init
  router.afterEach(to => {
    val.value = to.query[key];
  });

  // Watch query and update ref
  watch(
    () => val.value,
    value => {
      const currentRoute = router.currentRoute.value;
      // Avoid infinite loop
      if (currentRoute.query[key] === value) {
        return;
      }
      router.replace({
        ...currentRoute,
        query: {
          ...currentRoute.query,
          [key]: value || undefined // undefined removes key from URL
        }
      });
    }
  );

  return val;
};
