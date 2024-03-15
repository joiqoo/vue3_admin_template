import { createApp } from 'vue'
import App from '@/App.vue'
//import element-plus plugin and css style
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// get the app instance object
const app = createApp(App)
// install element-plus plugin
app.use(ElementPlus)
// mout the app
app.mount('#app')