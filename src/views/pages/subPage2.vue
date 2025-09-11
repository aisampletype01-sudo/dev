<script setup>
import Header from '@/views/components/Header.vue'
import Btn from '@/views/components/btn.vue'
import CardBoxThum from '@/views/components/cardBoxThum.vue'
import cardBoxBottom from '@/views/components/cardBoxBottom.vue'

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
  <div class="bg-gray">
    <Header title="Confirm Booking"/>

    <div class="p-contentBody">
      <CardBoxThum :data="{img:'thum_list1',title:'Place Name Here', text:'Place Name Here'}"/>
    </div>
  </div> 
  <div class="p-footer">
    <cardBoxBottom :data="{img:'img-card'}"/>
    <Btn text="Next Process" large/>
  </div>
</template>

<style lang="scss" scoped>
</style>
