import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Han from './components/Han.vue'
import Bao from './components/Bao.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Han},
    {path: '/B', component: Bao}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')