<template>
  <router-view name="validation"></router-view>
  <router-view name="homepage"></router-view>
  <router-view :activation="this.activation"></router-view>

  <!-- <HelloI18n /> -->

  <router-view
    name="main"
    :activation="this.activation"
    :user-logg="this.userStatus"
  ></router-view>
</template>

<script>
// import HelloI18n from './components/HelloI18n.vue';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  // components: { HelloI18n },
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
          url: "https://picsum.photos/200/300",
        },
        {
          id: "dogs",
          url: "https://dog.ceo/api/breeds/image/random",
        },
        {
          id: "cats",
          url: "https://api.thecatapi.com/v1/images/search",
        },
        {
          id: "foods",
          url: "https://foodish-api.herokuapp.com/api/",
        },
        {
          id: "fox",
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

  --white: #fff;
  --black: #000;
  --red: #ff0000;

  --modal-bg: #d5d5d5;
  --registration-bg: #f4f4f4;
  --language-bg: #333;
  --homepage-bg: #4c4c4c;
  --notfound-bg: #c0c0c0;

  --photosBg-gradient: #b9b9b9;
  --succes-txt: #0ca433;
  --validation-error: #ff5858;
}

html {
  scroll-behavior: smooth;
}

@keyframes elementAnimation {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes registrationAnimation {
  from {
    opacity: 0.8;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.registration-link {
  margin: 0 20px;
  padding: 3px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--white);
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid var(--white);

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
      background-color: var(--white);
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

ul li {
  list-style: none;
}

.photos-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  padding: 15rem 0;
  background-image: linear-gradient(
    329deg,
    var(--photosBg-gradient),
    var(--white),
    var(--photosBg-gradient)
  );

  @media (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
    gap: 13rem;

    width: 100%;
    height: calc(100vh - 7rem);
    padding: 12rem;
    overflow: auto;
  }
}

.img {
  width: 100%;
  height: 100%;
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

form {
  padding: 1rem;
}

.form-input label {
  font-size: 1.5rem;
}

.form-input input {
  margin-top: 0.5rem;
  padding: 0.6rem;
}
.form-input span {
  color: var(--red);
}

.form-sendBtn {
  width: 100%;
  margin-top: 2rem;
  padding: 1.3rem 0;
  background-color: var(--black);
  color: var(--white);
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>
