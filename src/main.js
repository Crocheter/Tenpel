import { createApp } from 'vue'
import App from './App.vue'

import main from './components/main.vue'
import section from './components/section.vue'

import './style.css'

const app = createApp(App);

app.component('app-main', main)
app.component('app-section', section)
app.mount('#app')