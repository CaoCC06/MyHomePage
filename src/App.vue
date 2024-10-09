<script setup>

</script>

<template>
    <div class="background" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
        <div class="sun">
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
            <span style="--i:4"></span>
            <span style="--i:5"></span>
            <span style="--i:6"></span>
            <span style="--i:7"></span>
            <span style="--i:8"></span>
        </div>
        <div class="cloud_wind" style="--i:1">
            <div class="cloud a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="cloud b">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="cloud c">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind b">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind c">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind d">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="cloud_wind" style="--i:2">
            <div class="cloud a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="cloud b">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="cloud c">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind b">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind c">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="wind d">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="windmill_wrap">
            <!-- 风车 -->
            <div class="windmill">
                <!-- 风车支架 -->
                <div class="pole"></div>
                <div class="head">
                    <div class="fan">
                        <span style="--i:1"></span>
                        <span style="--i:2"></span>
                        <span style="--i:3"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
