import { createApp } from 'vue'
import App from '@/App.vue'
//import element-plus plugin and css style
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// get the app instance object
const app = createApp(App)
// install element-plus plugin
app.use(ElementPlus)
// svg plugin
import 'virtual:svg-icons-register'

//import custom plugin object to register global components
import globalComponent from '@/components'
// install custom plugin
app.use(globalComponent)

// import global style
import '@/styles/index.scss'

// mout the app
app.mount('#app')
