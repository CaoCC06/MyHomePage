import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { VsButton, VsAvatar, VsTooltip, VsDialog, VsNotification, VsAlert } from 'vuesax-alpha'
import './style.css'
import './style/App.less'
import App from './App.vue'
// style
// import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(MotionPlugin)
app.mount('#app')

