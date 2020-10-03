<template>
  Tabs 组件
  <component v-for="c in defaults" :is="c"></component>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if(tag.type !== Tab){
        throw new Error('传入的不是Tab标签！')
      }
    })
    return {defaults}
  }
}
</script>

<style scoped>

</style>