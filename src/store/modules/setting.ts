//store the configuration of layout component
import { defineStore } from "pinia";

let useLayoutSettingStore = defineStore ('SettingStore', {
    state: () => {
        return {
            fold: false, //determine the sidebar menu to be fold or not
            refresh: false,

        }
    }
})

export default useLayoutSettingStore;

