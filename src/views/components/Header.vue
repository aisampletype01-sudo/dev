<script setup>
import { ref, watchEffect } from 'vue'

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

const props = defineProps({
    title: String
})


watchEffect(() => {
  console.log(props.title)
})


</script>

<template>
  <!-- header -->
  <header class="p-head">
    <div class="wrap">
        <p class="p-head_title">{{props.title}}</p>
        <div class="p-head_iconBox">
            <span class="img"><img :src="imgPath('icon_profile')" alt=""></span>
        </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.p-head{
  margin-top: 45px;
  .wrap{
     display:flex;
     align-items: center;
  }
  &_title{
     font-size:18px;
     color:#F9A58B;
  }
  &_iconBox{
     margin-left:auto;
     width: 38px;
     height: 38px;
     border-radius:50px;
     background:gray;
     overflow:hidden;
     img{
         font-size: 0;
         border: 0;
         width: 100%;
     }
  }
}
</style>
