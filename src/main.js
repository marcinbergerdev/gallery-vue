import { createApp } from "vue";
import Router from './router.js';
import App from "./App.vue";

import RegistrationCard from './components/card/RegistrationCard.vue';



const app = createApp(App);
app.component('registration-card', RegistrationCard);
app.use(Router);
app.mount("#app");
