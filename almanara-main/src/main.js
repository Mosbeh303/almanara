import './assets/tailwind.css'
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerPiniaPlugins } from './plugins/piniaStore.js';
import App from './App.vue'
import router from './router'

const app = createApp(App)
registerPiniaPlugins(app);
app.use(createPinia())
app.use(router)

app.mount('#app')
