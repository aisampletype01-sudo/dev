<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({
    title: String
})
watchEffect(() => {
  console.log(props.title)
})
</script>

<template>
    <div class="searchBox">
        <h2 class="searchBox-title">Discover a new adventure</h2>
        <div class="frm-group">
            <input id="frm-search" type="text" name="search">
            <button class="btn-search"><span class="icon" /></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchBox{
    &-title{
        font-size:17px;
        color:#5f4cbb;
        margin-bottom: 20px;
    }
    .frm-group{
        border-radius: 50px;
        width:70vw;
        height: 43px;
        position:relative;
    }
    .frm-search{
        border:0;
        border-radius:50px;
        width:100%;
        height:43px;
        padding-left:20px;
        font-size:14px;
        &::placeholder{
          color:#cecece;  
        }
    }
    .btn-search{
        position:absolute;
        top:4px;
        right:4px;
        width:35px;
        height:35px;
        .icon{
            display:block;
            background:url('../../assets/images/G_icon.svg') no-repeat 100% 100%;
        }
    }
}
</style>
