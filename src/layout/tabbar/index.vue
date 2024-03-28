<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="tabbar-right">
            <Setting></Setting>
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';



</script>
<script lang="ts">
export default{
    name: "Tabbar"
}
</script>
<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, rgb(232,223,223), rgb(222, 200, 200), white);

    .tabbar-left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar-right {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
}
</style>