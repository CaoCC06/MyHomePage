<template>
  <Loading v-if="loading"/>
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

    <div class="content">
      <div class="content_container">
        <ul :key="item" class="content_container_list">
          <li class="content_container_list_item">前途似海，来日方长</li>
          <li class="content_container_list_item">world !</li>
          <li class="content_container_list_item">world !</li>
          <li class="content_container_list_item">world !</li>
        </ul>
      </div>
    </div>

  </div>
  <div class="footer">
    By Cancan | ©2024
  </div>
</template>

<script setup>
  import Background from './template/background.vue';

</script>

