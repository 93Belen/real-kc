import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './fonts.css'
import App from './App.vue'
import {router} from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true,
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
};

const pinia = createPinia()
const app = createApp(App)

app.use(Toast, options);
app.use(router)
app.use(pinia)
app.mount('#app')