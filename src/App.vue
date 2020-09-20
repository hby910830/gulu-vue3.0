<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asidesVisible = ref(width > 500)
    provide('asidesVisible', asidesVisible)
    router.afterEach(() => {
      if (width <= 500) {
        asidesVisible.value = false;
      }
    });
  }
}
</script>
