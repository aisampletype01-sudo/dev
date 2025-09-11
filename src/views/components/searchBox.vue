<script setup>
// import { ref, watchEffect } from 'vue'
import IconSearch from '../../assets/images/icons/iconSearch.vue'

</script>

<template>
    <div class="searchBox">
        <div class="wrap"> 
            <h2 class="searchBox-title">Discover a new adventure</h2>
            <div class="frm-group">
                <input 
                    id="frm-search" 
                    type="text" 
                    name="search" 
                    placeholder="London, Bankok etc"
                    class="frm-search"
                >
                <button class="btn-search">
                    <span class="icon"><IconSearch /></span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchBox{
    .wrap{
        width:70vw;
        margin:auto;
    }
    &-title{
        font-size:17px;
        color:#5f4cbb;
        text-align: center;
        margin-bottom: 20px;
    }
    .frm-group{
        border-radius: 50px;
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
        box-shadow: 0 2px 5px rgba(117, 103, 191, 0.25);
        &::placeholder{
          color:#cecece;  
        }
    }
    .btn-search{
        position:absolute;
        top:2px;
        right:0;
        .icon{
            display:block;
            width:36px;
            height:36px;
        }
    }
}
</style>
