<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
    <div class="cardBox">
        <span class="thum"><img :src="imgPath(props.data.img)" alt=""></span>
        <div class="textBox">
            <p class="title"><strong>{{ props.data.title}}</strong></p>
            <p class="text">{{ props.data.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
