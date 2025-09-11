<script setup>
import { ref, watchEffect } from 'vue'

const navList = ref([
  {text:'wallet', img:'btn_wallet'},  
  {text:'pick', img:'btn_pick'},
  {text:'home', img:'btn_home'},
  {text:'setting', img:'btn_setting'},
  {text:'mypage', img:'btn_mypage'},
])

const active = ref('')

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
  <nav class="p-footer">
    <div class="p-footer_nav">
      <button 
        class="p-footer_nav-btn"
        :class="active && 'is-active'"
        v-for="(item,i) in navList" :key="i"
      >
        <span class="img"><img :src="imgPath(item.img + (active ? '_on' : '_off'))" alt=""></span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.p-footer{
  margin: auto -20px 0;
  height: 58px;
  background:#eeecf9;
  &_nav{
    display:flex;
    justify-content: center;
    padding:8px 20px;
  }
  &_nav-btn{
    width: 40px;
    height: 40px;
    margin: auto;
    &.is-active{
      color:#FAA58B;
    }
    span{
      display:block;
      width:100%;
      height:100%;
    }
    img{
      width:100%;
      height:auto;
      position:relative;
      top:50%;
      transform:translateY(-50%);
    }
  }
}
</style>
