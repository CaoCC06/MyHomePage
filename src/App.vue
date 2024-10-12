<script setup>
    import Background from './template/background.vue';
</script>

<template>
    <Background/>
    <div class="main" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="2000">
        <div class="info">
          <div class="header">
            <img src="./assets/avatar.png" alt="">
          </div>
  
          <div class="infoText">
            <h1>Welcome To</h1>
            <h1><span class="qn">灿灿</span><span class="de">de小窝</span></h1>
          </div>
        </div>
      </div>
</template>

<style scoped>
</style>
