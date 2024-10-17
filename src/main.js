import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import './style/App.less'
import { VsButton, VsAvatar, VsTooltip, VsDialog, VsNotification, VsAlert } from 'vuesax-alpha'
import App from './App.vue'

const app = createApp(App)
app.use(MotionPlugin)
app.use(VsButton).use(VsAvatar).use(VsTooltip).use(VsDialog).use(VsNotification).use(VsAlert)
app.mount('#app')

