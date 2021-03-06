import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Default from './components/Default.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', component: Default},
        {path: 'switch', component: Switch},
        {path: 'dialog', component: Dialog},
        {path: 'button', component: Button},
        {path: 'tabs', component: Tabs},
      ]
    }
  ]
})