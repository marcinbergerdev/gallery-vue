<template>
  <router-view name="homepage"></router-view>
  <router-view :activation="this.activation"></router-view>
  <router-view
    name="main"
    :activation="this.activation"
    :user-logg="this.userLoggedStatus"
  ></router-view>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  components: {},
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
      userLoggedStatus: false,
      menuLinks: [
        {
          id: "m1",
          name: "Random",
          url: "https://picsum.photos/200/300",
          linkName: "random",
        },
        {
          id: "m2",
          name: "Dogs",
          url: "https://dog.ceo/api/breeds/image/random",
          linkName: "dogs",
        },
        {
          id: "m3",
          name: "Cats",
          url: "https://api.thecatapi.com/v1/images/search",
          linkName: "cats",
        },
        {
          id: "m4",
          name: "Foods",
          url: " https://foodish-api.herokuapp.com/api/",
          linkName: "foods",
        },
        {
          id: "m5",
          name: "Fox",
          url: "https://randomfox.ca/floof/",
          linkName: "fox",
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
  },
  watch: {
    $route(value) {
      if (value.href === "/home") {
        this.userLoggedStatus = false;
      } else if (value.href === "/home/user") {
        this.userLoggedStatus = true;
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
