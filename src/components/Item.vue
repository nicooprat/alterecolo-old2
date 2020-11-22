<template>
  <li :class="{'is-checked': checked}" class="flex flex-col bg-white xs:rounded-xl shadow-md -mx-4 xs:-mx-0 hover:shadow-lg">
    <router-link style="padding-bottom: 56.25%" class="relative xs:rounded-t-xl overflow-hidden" :to="{name: 'Details', params: {slug: item.slug, id: item.id}}">
      <img class="absolute inset-0 w-full h-full object-cover" v-if="item.cover" loading="lazy" :src="item.cover.thumbnails.large.url" :alt="item.title" :width="item.cover.thumbnails.large.width" :height="item.cover.thumbnails.large.height">
      <span class="absolute inset-0 bg-neutral-200" v-else></span>
    </router-link>

    <div class="p-4 flex-grow flex flex-col">
      <router-link class="mb-2" :to="{name: 'Details', params: {slug: item.slug, id: item.id}}">
        <small class="block text-neutral-600 font-bold opacity-60">
          {{item.replaced}} <span class="ml-1">⤵︎</span>
        </small>
        <strong class="block font-bold text-lg leading-tight">
          {{item.title}}
        </strong>
      </router-link>

      <nav class="mb-2">
        <small class="flex flex-wrap -m-1">
          <router-link class="m-1 leading-tight underline" v-for="category in item.categories" :key="category.slug" :to="{name: 'Category', params: {category: category.slug}}">
            {{category.name}}
          </router-link>
        </small>
      </nav>

      <div class="flex items-center mt-auto">
        <span v-if="item.difficulty" class="flex space-x-1 mr-4">
          <svg v-for="n in 3" :class="{'text-neutral-300': item.difficulty < n, 'text-primary-400': item.difficulty >= n}" :key="n" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        </span>

        <button class="flex items-center bg-primary-400 py-2 px-3 ml-auto rounded-md text-white hover:bg-primary-500" v-on:click.prevent="check" type="button">
          <svg class="mr-2" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg>
          <strong>Fait !</strong>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    return {
      checked: false,
      check: () => {},
    }
  }
}
</script>

<style scoped></style>
