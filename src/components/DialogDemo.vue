<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="true"
      :ok="f1"
      :cancel="f2"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <p><strong>123</strong></p>
      <p>123</p>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">toggle</Button>
  <Dialog></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      console.log('ok')
      return false
    }
    const f2 = () => {

    }
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        closeOnClickOverlay: false,
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        }
      })
    }
    return {
      visible,
      showDialog,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style scoped>

</style>