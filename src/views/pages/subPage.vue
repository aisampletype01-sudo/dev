<script setup>
import Header from '@/views/components/Header.vue'
import AddDate from '@/views/components/addDate.vue'
import AddPeople from '@/views/components/addPeople.vue'
import BedNRoom from '@/views/components/bedNRoom.vue'
import Checkbox from '@/views/components/imgCheckBox.vue'
import Btn from '@/views/components/btn.vue'
import CardBox from '@/views/components/cardBox.vue'

</script>

<template>thum2
  <div class="bg-gray subpage">
    <Header title="Booking Trip"/>
    <div class="p-contentBody">
      <CardBox :data="{img:'thum2', title:'Place Name Here', text:'Place Name Here'}" />
      
      <AddDate :data="{start:24, max:4}"/>
      <AddPeople :data="[
        {num:'04', text:'Adult', active:true},
        {num:'00', text:'child', },
        {num:'00', text:'child', },
      ]"/>
      <BedNRoom :data="[
        {num:'02', text:'Bed', active:true},
        {num:'02', text:'Room', active:true},
        {num:'00', text:'child', },
      ]"/>

      <ul class="chk-area">
        <li class="chk-item">
          <div class="wrap">
            <Checkbox img="thum_m1" />
            <Btn text="$180/Day" small="true"/>
          </div>
          <p class="title">Deluxe</p>
        </li>
        <li class="chk-item">
          <div class="wrap">
            <Checkbox img="thum_m2" />
            <Btn text="$250/Day" small="true"/>
          </div>
          <p class="title">Luxury</p>
        </li>
      </ul>
    </div>
    <div class="btn-area">
      <Btn text="Next Process" large="true"/>
    </div>
  </div> 
</template>

<style lang="scss" scoped>
.btn-area{
  margin-top:30px;
  text-align: center;
}
</style>
