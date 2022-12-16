import VueTransitions from '@morev/vue-transitions';
import "vue-toastification/dist/index.css";
import '@morev/vue-transitions/styles';
import Toast from "vue-toastification";
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './css/index.css'

//////////////////////
const app = createApp(App)
///////////////
app.use(VueTransitions)
app.use(router)
app.use(Toast)
///////////////
app.mount('#app')
