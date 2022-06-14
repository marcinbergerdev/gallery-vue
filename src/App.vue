<template>
  <router-view name="homepage"></router-view>
  <router-view :activation="this.activation"></router-view>
  <!-- <button @click="test">Test</button> -->
  <router-view
    name="main"
    :activation="this.activation"
    :user-logg="this.userStatus"
  ></router-view>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  components: {},
  provide() {
    return {
      toggleMenu: this.toggleHamburgerAndMenu,
      closeMenu: this.menuActivity,
      menuLinks: this.menuLinks,
      userLoggStatus: this.userLoggedStatus,
    };
  },
  data() {
    return {
      activation: false,
      targetScrollElement: null,
      userStatus: false,
      myGalleryList: [],
      menuLinks: [
        {
          id: "random",
          name: "Random",
          url: "https://picsum.photos/200/300",
        },
        {
          id: "dogs",
          name: "Dogs",
          url: "https://dog.ceo/api/breeds/image/random",
        },
        {
          id: "cats",
          name: "Cats",
          url: "https://api.thecatapi.com/v1/images/search",
        },
        {
          id: "foods",
          name: "Foods",
          url: "https://foodish-api.herokuapp.com/api/",
        },
        {
          id: "fox",
          name: "Fox",
          url: "https://randomfox.ca/floof/",
        },
      ],
    };
  },
  methods: {
    toggleHamburgerAndMenu() {
      this.activation = !this.activation;

      // ScrollBlocked
      if (this.targetScrollElement.style.overflow !== "hidden") {
        disableBodyScroll(this.targetScrollElement);
      } else {
        enableBodyScroll(this.targetScrollElement);
      }
    },
    userLoggedStatus(value) {
      this.userStatus = value;
    },
    menuActivity() {
      this.activation = false;
      enableBodyScroll(this.targetScrollElement);
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

  --validation-error: #ff5858;
}
html {
  scroll-behavior: smooth;
}

.registration-link {
  margin: 0 20px;
  padding: 3px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  background-color: transparent;

  @media (min-width: 768px) {
    position: relative;
    border: 0;
    cursor: pointer;

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
