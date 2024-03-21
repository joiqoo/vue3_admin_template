import { createApp } from 'vue'
import App from '@/App.vue'
//import element-plus plugin and css style
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import global style
import '@/styles/index.scss'
//svg plugin
import 'virtual:svg-icons-register'
//import custom plugin object to register global components
import globalComponent from '@/components'
//import router
import router from './router'
//import store
import pinia from './store'


// get the app instance object
const app = createApp(App);
// install element-plus plugin
app.use(ElementPlus);
// install custom plugin
app.use(globalComponent);
// register the router
app.use(router);
// install store
app.use(pinia);

// mout the app
app.mount('#app');
