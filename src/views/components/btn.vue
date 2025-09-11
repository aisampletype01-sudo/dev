<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['text', 'large', 'small'])
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <button 
    class="btn btn-comp" 
    :class="[
        props.small && 'small', 
        props.large && 'large'
    ]">
    <span>{{ props.text }}</span>
  </button>
</template>

<style lang="scss" scoped>
</style>
