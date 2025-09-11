<script setup>
import { ref, watchEffect } from 'vue'

const tabList = ref([
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
  <div class="imgSlideBox">
    <div class="slide-big-thum"><img src="#" alt=""></div>
    <div class="slide-box">
        <ul class="slide-area">
            <li class="slide-item"
                v-for="i in 6">
                <span :data-num="i"><img src="#" alt=""></img></span>
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
.tabBox{
    &-area{
        display: flex;
        align-items: center;
    }
    .tabBtn{
        &:not(:last-child){margin-right:38px;}
        font-size:17px;
        color:#c5c1c9;
        position:relative;
        .text{
            padding-bottom:10px;
        }
        .bar{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:1px;
            background:#f9a58b;
            display: none;
        }
        &.is-active{
            .bar{display:block;}
        }
    }
}
</style>
