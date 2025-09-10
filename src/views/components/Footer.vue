<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({
    title: String
})
watchEffect(() => {
  console.log(props.title)
})
</script>

<template>
  footer
</template>

<style lang="scss" scoped>
</style>
