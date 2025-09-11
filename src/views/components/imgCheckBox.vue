<script setup>
import { ref, watchEffect } from 'vue'

const active = ref(false)
const random = ref(Math.abs(Math.random() * (99 - 1) + 1))

const props = defineProps(['img'])
const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
  <div class="imgCheckBox">
    <div class="bg"><img :src="imgPath(props.img)" alt=""></div>
    <label class="chkBox" :for="`chk-${random}`" :class="active && 'on'">
        <input 
            type="checkbox" 
            :id="`chk-${random}`" 
            v-model="active"
        >
        <span class="custom-chk" >
            <span class="icon" />
        </span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.imgCheckBox{
    min-width:150px;
    height: 100px;
    border-radius: 20px;
    position:relative;
    .bg{
        width: 100%;
        height: 100%;
    }
    .chkBox{
        position:absolute;
        top:20px;
        left:20px;
        input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        .custom-chk{
            display: block;
            cursor: pointer;
            position:relative;
            .icon{
                position:absolute;
                top:0;
                left:0;
                width:9px;
                height:9px;
                background: url(../../assets/images/icon_9_chk.png) no-repeat 100% 100%;
            }
        }
        input[type="checkbox"]:checked + .custom-ch{
            .icon{
                background: url(../../assets/images/icon_9_chk_on.png) no-repeat 100% 100%;
            }
        }
    }
}
</style>
