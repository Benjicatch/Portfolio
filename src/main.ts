import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from "./i18n" // <--- 2

const vuetify = createVuetify({
    components,
    directives,
  })
  
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount("#app");
