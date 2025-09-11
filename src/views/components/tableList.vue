<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])
// watchEffect(() => {
//   console.log(props.title)
// })
</script>

<template>
  <div class="tableList">
    <p class="th-label">{{ props.label }}</p>
    <div class="td-btns">
        <button 
            class="btn"
            v-for="i in props.max" :key="i"
        >
            <span class="text">{{ props.start + i }}</span>
            <span class="text">Feb</span>
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
