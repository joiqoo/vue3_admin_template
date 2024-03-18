<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'

</script>

<template>
  <div>
    <h1>this is app root component</h1>

    <svg-icon name="phone" customColor="red" width="20px" height="20px"></svg-icon>
    <Pagination></Pagination>

    <el-button type="primary" size="default" :icon="Plus">button</el-button><br>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<style scoped></style>
