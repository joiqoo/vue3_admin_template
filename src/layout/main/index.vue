<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag"/>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { watch,ref,nextTick } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
let layoutSettingStore = useLayoutSettingStore();
let flag = ref(true);
watch(()=>layoutSettingStore.refresh,()=>{
    flag.value = false;
    nextTick(()=>{
        flag.value = true;
    })
})
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 0.3s;
}
.fade-enter-to {
    opacity: 1;
}
</style>