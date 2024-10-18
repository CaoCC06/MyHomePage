<template>
  <div>
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
          <button class="box" :icon-content="item.content" @click="item.link">
            <Icon :icon="item.icon" width="30px" height="30px" class="link_icon"/>
          </button>
        </a>
          <button class="box" icon-content="关于" @click="active = !active">
            <Icon icon="mdi:about-circle-outline" width="30px" height="30px" class="link_icon"/>
          </button>
      </div>
    </div>
    <div class="footer">
      By Cancan | ©2024
    </div>
    
    <vs-dialog overlay-blur width="550px" v-model="active" not-close>
      <template #header>
        <h2 class="not-margin">
          关于<b>本站</b>
        </h2>
      </template>
      
      <div v-motion-slide-visible-once-left class="about_content">
        <vs-alert v-model:hidden-content.sync="tStackHidden">
          <template #title>
            <b>技术栈</b>
          </template>
          <b>本站基于以下技术搭建</b>
          <vs-avatar-group class="con-avatars" float>
            <vs-tooltip placement="top" v-for="i in avaters" :key="i.content">
              <vs-avatar>
                <Icon :icon="i.icon" width="40px" height="40px" />
              </vs-avatar>
              <template #content>{{ i.content }}</template>
            </vs-tooltip>
          </vs-avatar-group>
        </vs-alert>
      </div>
      <div v-motion-slide-visible-once-right>
        <vs-alert v-model:hidden-content.sync="aboutHidden">
          <template #title>
            <b>想说的话</b>
          </template>
          1111
        </vs-alert>
      </div>
      <template #footer>
        
      </template>
    </vs-dialog>
  </div>
</template>
<style>
  /* 引入Vuesax的样式 */
  @import 'vuesax-alpha/dist/index.css';
  /* Vuesax的暗黑模式样式 */
  @import 'vuesax-alpha/theme-chalk/dark/css-vars.css';
</style>
<script setup>
  import { ref } from 'vue';
  import Background from './components/background.vue';
  import { onMounted } from 'vue';
  import { Icon } from '@iconify/vue';

  let index = 0
  let active = ref(false)
  let tStackHidden = ref(true)
  let aboutHidden = ref(true)
  
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
      content: '博客',
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
    }
  ])

  const avaters = ref([
    {
      icon: 'skill-icons:vuejs-light',
      content: 'Vue3'
    },
    {
      icon: 'skill-icons:vite-light',
      content: 'Vite'
    },
    {
      icon: 'skill-icons:less-light',
      content: 'Less'
    },
    {
      icon: 'line-md:iconify1',
      content: 'iconify'
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

