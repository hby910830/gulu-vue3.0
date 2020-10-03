import Dialog from '../lib/Dialog.vue'
import {createApp, h} from 'vue'

export const openDialog = (options) => {
  const {title, content, ok, cancel, closeOnClickOverlay} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        closeOnClickOverlay,
        'onUpdate:visible': (newValue) => {
          if (newValue === false) {
            close()
          }
        },
        ok,
        cancel
      }, {
        title,
        content
      })
    }
  })
  app.mount(div)
}