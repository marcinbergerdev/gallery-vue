<template>
  <router-view name="homepage"></router-view>
  <router-view name="header" :activation="this.activation"></router-view>
  <router-view :activation="this.activation"></router-view>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  components: {
  },
  provide() {
    return {
      toggleMenu: this.toggleHamburgerAndMenu,
      menuLinks: this.menuLinks,
    };
  },
  data() {
    return {
      activation: false,
      targetScrollElement: null,
      menuLinks: [
        { id: "m1", name: "Nature" },
        { id: "m2", name: "Random" },
        { id: "m3", name: "Dogs" },
        { id: "m4", name: "Cats" },
        { id: "m5", name: "Fruits" },
        { id: "m6", name: "Coctails" },
      ],
    };
  },
  methods: {
    toggleHamburgerAndMenu() {
      this.activation = !this.activation

      // ScrollBlocked
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
