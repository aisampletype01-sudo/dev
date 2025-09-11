<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
    <div class="cardBox-thum">
        <span class="thum"><img :src="imgPath(props.data.img)" alt=""></span>
        <div class="textBox">
            <p class="title">
              <strong>{{ props.data.title}}</strong>
              <span>{{ props.data.text}}</span>
            </p>
            <p class="text">$ 250/night</p>
            <div class="starBox">
              <span class="star"/><span class="star"/><span class="star"/><span class="star"/><span class="star"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
