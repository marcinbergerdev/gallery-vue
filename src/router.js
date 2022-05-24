import { createRouter, createWebHistory } from "vue-router";

const AppMain = () => import("./components/main/AppMain.vue");
const AppHeader = () => import("./components/header/AppHeader.vue");
const AppLogin = () => import("./components/registration/AppLogin.vue");

const AppRegistration = () =>
   import("./components/registration/AppRegistration.vue");

const HomePage = () => import("./components/mobile homepage/HomePage.vue");

const UserRegistration = () =>
   import("./components/header/nav/UserRegistration.vue");

const UserAccount = () => import("./components/header/nav/UserAccount.vue");

const UserSignout = () => import("./components/header/nav/UserSignout.vue");

const PhotosList = () => import("./components/main/pages/PhotosList.vue");
const GalleryList = () =>
   import("./components/main/my gallery/GalleryList.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },

      {
         name: "web",
         path: "/home",
         components: {
            default: AppMain,
            homepage: HomePage,
            header: AppHeader,
         },
         children: [
            {
               name: "user-login",
               path: "",
               components: { default: UserRegistration, gallery: PhotosList },
            },
            {
               name: "my-account",
               path: ":user",
               components: {
                  default: UserSignout,
                  myaccount: UserAccount,
                  gallery: PhotosList,
               },
            },
            {
               name: "my-gallery",
               path: ":user/mygallery",
               components: {
                  default: UserSignout,
                  myaccount: UserAccount,
                  gallery: GalleryList,
               },
            },
         ],
      },
      { name: "login-section", path: "/login", component: AppLogin },
      {
         name: "new-account",
         path: "/registration",
         component: AppRegistration,
      },
   ],
});

export default router;
