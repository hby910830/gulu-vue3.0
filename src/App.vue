<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'

export default {
  name: 'App',
  setup() {
    const asidesVisible = ref(true)
    provide('asidesVisible', asidesVisible)
  }
}
</script>
