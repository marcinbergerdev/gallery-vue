<template>
  <home-page></home-page>
  <app-header :hamburgerActivity="this.hamburger"></app-header>
  <app-main :navMenuActivity="this.navMenu"></app-main>
</template>

<script>
import HomePage from "./components/mobile homepage/HomePage.vue";
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  components: {
    HomePage,
    AppHeader,
    AppMain,
  },
  provide() {
    return {
      toggleMenu: this.toggleHamburgerAndMenu,
    };
  },
  data() {
    return {
      hamburger: false,
      navMenu: false,
      targetScrollElement: null,
    };
  },
  methods: {
    toggleHamburgerAndMenu() {
      this.hamburger = !this.hamburger;
      this.navMenu = !this.navMenu;

      if (this.targetScrollElement.style.overflow !== "hidden") {
        disableBodyScroll(this.targetScrollElement);
      } else {
        enableBodyScroll(this.targetScrollElement);
      }
    },
  },
  created() {
    this.targetScrollElement = document.querySelector("body");
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

.registration-link {
  margin: 0 20px;
  padding: 3px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;

  @media (min-width: 768px) {
    position: relative;
    border: 0;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 34%;
      left: -26%;

      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: 0.4;
      transition: transform 0.2s ease-in-out;
    }
    &:hover {
      &::before {
        transform: translate(26%, -32%);
        transition: transform 0.2s ease-in-out;
      }
    }
  }
}
</style>
