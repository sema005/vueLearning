import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './stores'
import 'nprogress/nprogress.css'


createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')