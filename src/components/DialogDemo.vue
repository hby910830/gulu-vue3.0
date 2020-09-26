<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="visible"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {toggle, visible}
  }
}
</script>

<style scoped>

</style>