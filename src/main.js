import { createApp } from "vue";
import VLazyImage from "v-lazy-image";

import Router from './router.js';
import App from "./App.vue";

// import RegistrationCard from './components/card/RegistrationCard.vue';
// import PhotosItemCard from './components/card/PhotosItemCard.vue';



const app = createApp(App);
// app.component('registration-card', RegistrationCard);
// app.component('photos-item-card', PhotosItemCard);
app.component('v-lazy-image',VLazyImage);
app.use(Router);
app.mount("#app");
