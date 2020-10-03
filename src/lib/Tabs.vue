<template>
  <div v-for="(title,index) in titles" :key="index">{{title}}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('传入的不是Tab标签！')
      }
    })
    const titles = defaults.map(tags => {
      return tags.props.title
    })
    return {defaults, titles}
  }
}
</script>

<style scoped>

</style>