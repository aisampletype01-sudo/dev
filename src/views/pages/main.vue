<script setup>
import Header from '../components/Header.vue'
import SearchBox from '../components/searchBox.vue'
import Tab from '../components/tab.vue'
import Footer from '../components/Footer.vue'
import ImgSlider from '../components/imgSlider.vue'
</script>

<template>
  <Header title="Hi, Jon Henry"/>
  <div class="p-contentBody">
    <SearchBox />
    <Tab />
    <ImgSlider />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
</style>
