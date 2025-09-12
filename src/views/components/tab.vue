<script setup>
import { ref, watchEffect } from 'vue'

const tabList = ref([
  {text:'featured', active:true},
  {text:'trendy'},
  {text:'visited'},
])

const active = ref(0)

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
            :class="active === i && 'is-active'"
            v-for="(item,i) in tabList" :key="i"
            @click="active = i"
        >
            <span class="text">{{ item.text }}</span>
            <span v-if="active === i" class="bar"></span>
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabBox{
    &-area{
        display: flex;
        align-items: center;
        position:relative;
    }
    .tabBtn{
        &:not(:last-child){margin-right:38px;}
        font-size:17px;
        color:#c5c1c9;
        background:none;
        position:relative;
        cursor:pointer;
        .text{
            padding-bottom:10px;
            text-transform: capitalize;
        }
        .bar{
            position:absolute;
            bottom:0;
            left:0;
            width:0%;
            height:1px;
            background:#F9A58B;
            // display: none;
            transition: .4s all;
        }
        &.is-active{
            color: #F9A58B;
            .bar{
                // display:block;
                width:100%;
            }
        }
    }
}
</style>