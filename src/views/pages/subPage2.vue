<script setup>
import Header from '@/views/components/Header.vue'
import Btn from '@/views/components/btn.vue'
import CardBoxThum from '@/views/components/cardBoxThum.vue'
import cardBoxBottom from '@/views/components/cardBoxBottom.vue'

</script>

<template>
  <div class="bg-gray subpage">
    <Header title="Confirm Booking"/>

    <div class="p-contentBody pb100">
      <CardBoxThum :data="{img:'thum_list1',title:'Place Name Here', text:'Place Name Here'}"/>
    </div>

    <div class="p-bottom">
      <cardBoxBottom :data="{img:'img-card'}"/>
    </div>

    <div class="btn-area p-btn">
      <Btn text="Next Process" large="true"/>
    </div>
  </div>   
</template>

<style lang="scss" scoped>
</style>
