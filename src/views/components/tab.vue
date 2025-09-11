<script setup>
import { ref, watchEffect } from 'vue'

const tabList = ref([
  {text:'featured', active:true},
  {text:'trendy'},
  {text:'visited'},
])

const active = ref('')
const clickHender = (e)=>{
    console.log(e.target)
    console.log(e)
}
// const props = defineProps(['active']);

watchEffect(() => {
  //console.log(props.active)
  console.log(active.value)
})
</script>

<template>
  <div class="tabBox">
    <div class="tabBox-area">
        <button 
            class="tabBtn"
            :class="item.active && 'is-active'"
            v-for="(item,i) in tabList" :key="i"
            @click="clickHender"
        >
            <span class="text">{{ item.text }}</span>
            <span v-if="item.active" class="bar"></span>
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
        background:none;
        position:relative;
        .text{
            padding-bottom:10px;
            text-transform: capitalize;
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
            color: #f9a58b;
            .bar{display:block;}
        }
    }
}
</style>
