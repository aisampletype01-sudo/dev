<script setup>
import { ref, watchEffect } from 'vue'

const slideList = ref([
  {img:'thum_s1'},
  {img:'thum_s2'},
  {img:'thum_s3'},
  {img:'thum1'},
  {img:'thum_s1'},
  {img:'thum_s2'},
  {img:'thum_s3'},
  {img:'thum1'},
])
// vite는 require를 지원하지 않음.

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
  <div class="imgSlideBox">
    <div class="slide-big-thum">
        <img :src="imgPath('thum1')" alt="">
    </div>
    <div class="slide-box">
        <ul class="slide-area">
            <li class="slide-item" v-for="i in 8" :key="i">
                <span><img :src="imgPath(slideList[i-1].img)" alt=""></img></span>
            </li>
        </ul>
    </div>
    <div class="slide-btn">
      <button class="btn btn-left"><span class="arr"/></button>
      <button class="btn btn-right"><span class="arr"/></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imgSlideBox{
    position: relative;
    img{width:100%;}
    .slide-big-thum{
        width:100%;
        aspect-ratio: 1/0.65;
        margin-bottom: 10px;
    }
    .slide-box{
      width:100%;
      overflow: hidden;
      overflow-x: auto;
      .slide-area{  
        display: flex;
        justify-content: flex-start;
        padding-left:0;
        width:calc(110px * 8 );
        .slide-item{
          width:100px;
          margin-right:10px;
          border-radius: 20px;
          overflow: hidden;
          img{
            position:relative;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            min-width:100%;
            min-height:100%;
          }
        }
      }
    }
  .slide-btn{
    .btn{
      position:absolute;
      bottom: 26px;
    }
    .arr{
      display: block;
      width:15px;
      height:23px;
      background: url(../../assets/images/arr_l.png) no-repeat;
    }
    .btn-left{
      left:10px;
    }
    .btn-right{
      transform:rotate(180deg);
      right:10px;
    }
  }
}
</style>
