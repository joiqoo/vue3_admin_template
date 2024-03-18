import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponent:any = { SvgIcon, Pagination };
export default {
    install(app:any) {
        Object.keys(allGlobalComponent).forEach(key => {
            // register global components
            app.component(key, allGlobalComponent[key])
        })
    }
}