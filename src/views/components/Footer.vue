<script setup>
import { ref, watchEffect } from 'vue'

const navList = ref([
  {text:'wallet', img:'../../assets/images/btn_wallet_off.png'},  
  {text:'pick', img:'../../assets/images/btn_pick_off.png'},
  {text:'home', img:'../../assets/images/btn_home_off.png'},
  {text:'setting', img:'../../assets/images/btn_setting_off.png'},
  {text:'mypage', img:'../../assets/images/btn_mypage_off.png'},
])

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
        <span class="img"><img :src="item.img" alt=""></span>
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
      // position:relative;
      // &::before{
      //   content:attr(data-img)
      // }
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
