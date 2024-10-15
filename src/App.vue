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

    <div class="content">
      <div class="content_container">
        <ul class="content_container_list">
          <li v-for="item in personality_signature" :key="item" class="content_container_list_item">{{item}}</li>
        </ul>
      </div>
    </div>

    <div class="icon_container">
      <a v-for="item in link_icon" :key="item" :href="item.link">
        <button class="box" :icon-content="item.content">
          <Icon :icon="item.icon" width="30px" height="30px" class="link_icon"/>
        </button>
      </a>
    </div>
  </div>
  <div class="footer">
    By Cancan | ©2024
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Background from './components/background.vue';
  import { onMounted } from 'vue';
  import { Icon } from '@iconify/vue';
  import { VsNotification } from 'vuesax-alpha'

  let index = 0

  
  const personality_signature = ref([
    '前途似海，来日方长',
    '高岸为谷，深谷为陵',
    '静以修身，俭以养德',
    '长风破浪会有时'
  ])

  const link_icon = ref([
    {
      icon: 'hugeicons:blogger',
      link: '',
      content: '博客'
    },
    {
      icon: 'hugeicons:github',
      link: 'https://github.com/CaoCC06',
      content: 'Github'
    },
    {
      icon: 'ic:baseline-alternate-email',
      link: '',
      content: '邮箱'
    },
    {
      icon: 'mingcute:music-3-line',
      link: '',
      content: '网易云'
    },
    {
      icon: 'mdi:about-circle-outline',
      link: '',
      content: '关于'
    }
  ])


  onMounted(() => {
    setInterval(()=>{
    if(index < personality_signature.value.length){
      document.querySelector('.content_container_list').style.transform = `translateY(-${index * 40}px)`
      index++
    }else{
      index = 0
    }
    
  },2000)
  })
</script>

