<script setup>
import { ref, watchEffect } from 'vue'

const tabList = ref([
  {text:'wallet', img:'../../assets/btn_wallet_off.png'},  
  {text:'pick', img:'../../assets/btn_pick_off.png'},
  {text:'home', img:'../../assets/btn_home_off.png'},
  {text:'setting', img:'../../assets/btn_setting_off.png'},
  {text:'mypage', img:'../../assets/btn_mypage_off.png'},
])

// const props = defineProps({
//     title: String
// })
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <div class="tabBox">
    <div class="tabBox-area">
        <button 
            class="tabBtn"
            v-for="(item,i) in tabList" :key="i"
        >
            <span class="text">{{ item.text }}</span>
            <span class="bar"></span>
        </button>
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
