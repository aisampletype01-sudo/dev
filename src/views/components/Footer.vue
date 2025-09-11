<script setup>
import { ref, watchEffect } from 'vue'

const navList = ref(['wallet','pick','home','setting','mypage'])
// const props = defineProps({
//     title: String
// })
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <nav class="p-footer">
    <div class="p-footer_nav">
      <button 
        class="p-footer_nav-btn"
        v-for="(item,i) in navList" :key="i"
      >
        <span>{{item}}</span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.p-footer{
  height: 58px;
  background:#eeecf9;
  &_nav{
    display:flex;
    justify-content: center;
    padding:15px 20px;
  }
  &_nav-btn{
    width:28px;
    height: 28px;
    span{
      display:block;
    }
    img{width:100%;}
  }
}
</style>
