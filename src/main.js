import { createApp } from "vue";
import VLazyImage from "v-lazy-image";

import Router from './router.js';
import App from "./App.vue";
import i18n from './i18n'

const app = createApp(App);
app.use(Router);
app.use(i18n);
app.component('v-lazy-image',VLazyImage);
app.mount("#app");
