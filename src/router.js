import { createRouter, createWebHistory } from "vue-router";

const AppHeader = () => import("./components/header/AppHeader.vue");
const HomePage = () => import("./components/mobile homepage/HomePage.vue");
const AppMain = () => import("./components/main/AppMain.vue");

const AppLogin = () => import("./components/registration/AppLogin.vue");
const AppRegistration = () =>
   import("./components/registration/AppRegistration.vue");

const UserRegistration = () =>
   import("./components/header/nav/UserRegistration.vue");
const UserAccount = () => import("./components/header/nav/UserAccount.vue");
const UserSignout = () => import("./components/header/nav/UserSignout.vue");

const PhotosList = () => import("./components/main/photos/PhotosList.vue");
const GalleryList = () =>
   import("./components/main/my gallery/GalleryList.vue");

const NotFound = () => import("./components/notfound/NotFound.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", redirect: "/home/random" },
      {
         name: "home",
         path: "/home",
         components: { default: AppHeader, homepage: HomePage, main: AppMain },
         children: [
            {
               name: "user-login",
               path: "",
               components: { default: UserRegistration, gallery: PhotosList },
            },

            {
               name: "category",
               path: ":category",
               components: { default: UserRegistration, gallery: PhotosList },
               props: true,
            },

            {
               name: "user",
               path: "user",
               components: {
                  default: UserSignout,
                  myaccount: UserAccount,
                  gallery: PhotosList,
               },
            },

            {
               name: "user-category",
               path: "user/:category",
               components: {
                  default: UserSignout,
                  myaccount: UserAccount,
                  gallery: PhotosList,
               },
               props: true,
            },

            {
               name: "my-gallery",
               path: "user/mygallery",
               components: {
                  default: UserSignout,
                  myaccount: UserAccount,
                  gallery: GalleryList,
               },
            },
         ],
      },
      { name: "login-section", path: "/login", components: {validation: AppLogin} },
      {
         name: "new-account",
         path: "/registration",
         components: {validation: AppRegistration},
      },
      {
         path: "/:notFound(.*)",
         component: NotFound,
      },
   ],
});

export default router;
