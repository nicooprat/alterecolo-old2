import { ref, watchEffect } from "vue";
import router from '@/router'

export const sync = (key) => {
  const val = ref(null)

  // Sync at init
  watchEffect(() => {
    val.value = router.currentRoute.value.query[key]
  })

  // Watch query and update ref
  watchEffect(() => {
    router.replace({
      ...router.currentRoute,
      query: {
        ...router.currentRoute.query,
        [key]: val.value || undefined, // undefined removes key from URL
      }
    })
  })

  return val
}
