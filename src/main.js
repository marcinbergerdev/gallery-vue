import { createApp } from "vue";
import App from "./App.vue";
import Router from './router.js';

import RegistrationCard from './components/card/RegistrationCard.vue';



const app = createApp(App);
app.use(Router);
app.component('registration-card', RegistrationCard);
app.mount("#app");
