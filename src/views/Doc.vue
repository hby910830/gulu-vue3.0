<template>
<div>
  <TopNav />
  <div class="content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</div>
</template>

<script lang="js">
import TopNav from '../components/TopNav.vue'
export default {
  name: 'Doc',
  components: {TopNav}
}
</script>

<style lang="scss" scoped>

</style>