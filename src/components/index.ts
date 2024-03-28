import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
//import all icons from @element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const allGlobalComponent: any = { SvgIcon, Pagination }
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      // register global components
      app.component(key, allGlobalComponent[key])
    })

    //register all icons globally.
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
