<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])

const imgPath = (img) => {
    return new URL(`/src/assets/images/${img}.png`, import.meta.url).href;
}

</script>

<template>
  <div class="cardBox-bottom">
    <h3 class="titleBox">
      <span>4 person, 2 Room, Days</span>
      <strong>Total Cost: $1,000.00</strong>
    </h3>
    <span class="thum"><img :src="imgPath(props.data.img)" alt=""></span>
    <div class="textBox">
      <dl>
        <dt>Ac Number:</dt>
        <dd>
          <input type="text" value="2255 4595 9874 4423" disabled>
        </dd>
      </dl>
      <dl>
        <dt>Password:</dt>
        <dd>
          <input type="text" value="·········" disabled>
        </dd>
      </dl>
      <dl>
        <dt>Exp. Date:</dt>
        <dd>12/24</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
