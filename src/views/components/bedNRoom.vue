<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <div class="tableList bed">
    <p class="th-label">Bed & Room</p>
    <div class="td-btns">
        <button 
            class="btn"
            v-for="(item,i) in props.data" :key="i"
            :class="item.active && 'on'"
        >
            <span class="text">{{ item.num }}</span>
            <span class="text">{{ item.text }}</span>
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
