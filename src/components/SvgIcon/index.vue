<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="customColor"></use>
  </svg>
  <br />
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  customColor: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
