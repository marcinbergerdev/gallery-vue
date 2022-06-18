import { createApp } from "vue";
import VLazyImage from "v-lazy-image";

import Router from './router.js';
import App from "./App.vue";
import i18n from './i18n'

// import RegistrationCard from './components/card/RegistrationCard.vue';
// import PhotosItemCard from './components/card/PhotosItemCard.vue';



const app = createApp(App).use(i18n);
// app.component('registration-card', RegistrationCard);
// app.component('photos-item-card', PhotosItemCard);
app.component('v-lazy-image',VLazyImage);
app.use(Router);
app.mount("#app");
