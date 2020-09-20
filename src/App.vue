<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asidesVisible = ref(width > 500)
    provide('asidesVisible', asidesVisible)
  }
}
</script>
