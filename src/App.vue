<script setup> 
import { ref, watchEffect } from 'vue'

const active = ref(0)
const link = ref([
  {path:'/', name:'Main'},  
  {path:'/sub1', name:'SubPage1'},
  {path:'/sub2', name:'SubPage3'},
])

// const router = useRouter()

</script>

<template>
  <div class="page">
    <!-- 페이지 랜딩용 버튼 -->
    <div class="top-menu">
      <span 
        class="btn-link" 
        :class="active === i && 'is-active'"
        v-for="(item,i) in link" :key="i"
        @click="active = i"
      >
        <span class="dot" />
        <router-link :to="{ path: item.path}">{{ item.name }}</router-link>
        <!-- {{ item.name }} -->
      </span>
    </div>
    <!--////-->
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.top-menu{
  display:flex;
  align-self: center;
  .btn-link{
    margin-right:20px;
    color:#666;
    .dot{
      display: inline-block;
      width:7px;
      height:7px;
      border-radius: 30px;
      background: yellow;
      margin-right:5px;
    }
    &.is-active{
      color:#000;
      .dot{
        background: red;
      }
    }
  }
}
</style>
