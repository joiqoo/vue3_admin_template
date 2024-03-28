<template>
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayoutSettingStore.fold?'Fold':'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="vertical-align: middle;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span style="margin: 0 5px;">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
// import { it } from 'node:test';
import { useRoute } from 'vue-router'; 

let LayoutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
    LayoutSettingStore.fold = !LayoutSettingStore.fold;
    console.log(LayoutSettingStore.fold);
}

let $route = useRoute();
</script>

<script lang="ts">
export default{
    name: "Breadcrumb"
}
</script>

<style scoped></style>