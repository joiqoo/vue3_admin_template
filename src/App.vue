<script setup lang="ts">
// import { Plus } from '@element-plus/icons-vue'
// import request from './utils/request'
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  // request({
  //   url: 'user/login',
  //   method: 'post',
  //   data: {
  //     username: 'admin',
  //     password: '111111',
  //   },
  // }).then((res) => {
  //   console.log(res)
  // })

  // reqLogin({username:'admin',password:'111111'})
})
</script>

<template>
  <div>
    <!-- <h1>this is app root component</h1> -->
    <router-view></router-view>
<!-- 
    <svg-icon
      name="phone"
      customColor="red"
      width="20px"
      height="20px"
    ></svg-icon>
    <Pagination></Pagination>

    <el-button type="primary" size="default" :icon="Plus">button</el-button>
    <br />
    <el-pagination background layout="prev, pager, next" :total="1000" /> -->
  </div>
</template>

<style scoped lang="scss">

</style>
