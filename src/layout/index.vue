<template>
    <div class="layout_container">
        <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <!-- <p v-for="item in 200" :key="item" class="scrollbar-demo-item">{{ item }}</p> -->
                <el-menu :collapse="layoutSettingStore.fold" background-color="#001529" text-color="white" :default-active="$route.path">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <!-- <p style="height: 5000px; background: green">this is a paragraph</p> -->
            <!-- <router-view></router-view> -->
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'

import { useRoute } from 'vue-router'

import useUserStore from '@/store/modules/user';
import useLayoutSettingStore from '@/store/modules/setting';

let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();

let $route = useRoute();

</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        color: white;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        // background: yellowgreen;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background: green;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>
