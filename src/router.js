import { createRouter, createWebHistory } from "vue-router";

const AppMain = () => import("./components/main/AppMain.vue");
const AppHeader = () => import("./components/header/AppHeader.vue");
const AppLogin = () => import("./components/registration/AppLogin.vue");
const AppRegistration = () => import("./components/registration/AppRegistration.vue");
const HomePage = () => import("./components/mobile homepage/HomePage.vue");
const UserRegistration = () =>
   import("./components/header/nav/UserRegistration.vue");
// const UserAccount = () => import("./components/header/nav/UserAccount.vue");
// const UserSignout = () => import("./components/header/nav/UserSignout.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         name: "web",
         path: "/",
         components: {
            default: AppMain,
            homepage: HomePage,
            header: AppHeader,
         },
         children: [
            {
               path: "/",
               component: UserRegistration,
            },
         ],
      },
      {
         name: "login",
         path: "/login",
         component: AppLogin,
      },
      {
         name: "registration",
         path: "/registration",
         component: AppRegistration,
      },
   ],
});

export default router;
