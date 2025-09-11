<script setup>
import { ref, watchEffect } from 'vue'

const slideList = ref([
  {img:'btn_pick_off'},
  {img:'btn_home_off'},
  {img:'btn_setting_off'},
])
// vite는 require를 지원하지 않음.

const imgPath = (img) => {
    return new URL(`./../assets/images/${img}.png`, import.meta.url).href;
}
// const modules = import.meta.glob('./../assets/images/*.png');
// for(const path in modules){
//     modules[path]().then(mod => {
//         console.log(path, mod)
//     })
// }


// const props = defineProps({
//     title: String
// })
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <div class="imgSlideBox">
    <div class="slide-big-thum">
        <img :src="imgPath('thum1')" alt="">
    </div>
    <div class="slide-box">
        <ul class="slide-area">
            <li class="slide-item"
                v-for="i in 3" :key="i">
                <span><img :src="imgPath(slideList[i-1].img)" alt=""></img></span>
            </li>
        </ul>
        <div class="slide-btn">
            <button class="btn btn-left"><img src="#" alt=""></button>
            <button class="btn btn-right"><img src="#" alt=""></button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imgSlideBox{
    background: gray;
    img{width:100%;}
    .slide-big-thum{
        width:100%;
        aspect-ratio: 1/0.65;
    }
}
</style>
