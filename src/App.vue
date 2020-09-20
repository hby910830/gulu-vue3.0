<template>
  <h1>导航拦 <router-link to="/">Han</router-link> | <router-link to="/B">Bao</router-link> </h1>
  <hr>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
