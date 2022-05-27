<template>
  <router-view name="homepage"></router-view>
  <router-view name="header" :activation="this.activation"></router-view>
  <router-view :activation="this.activation"></router-view>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import axios from "axios";

export default {
  components: {},
  provide() {
    return {
      toggleMenu: this.toggleHamburgerAndMenu,
      menuLinks: this.menuLinks,
      getPhotos: this.getPhotosList,
      newPhotos: this.newPhotosList,
    };
  },
  data() {
    return {
      activation: false,
      targetScrollElement: null,
      newPhotosList: [],
      menuLinks: [
        { id: "m1", name: "Random", url: "https://picsum.photos/200/300" },
        {
          id: "m2",
          name: "Dogs",
          url: "https://dog.ceo/api/breeds/image/random",
        },
        {
          id: "m3",
          name: "Cats",
          url: "https://api.thecatapi.com/v1/images/search",
        },
        {
          id: "m4",
          name: "Foods",
          url: " https://foodish-api.herokuapp.com/api/",
        },
        {
          id: "m5",
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
    getPhotosList({ url, id }) {
      this.newPhotosList.length = 0;

      //GET API
      for (let i = 0; i < 20; i++) {
        axios.get(url).then((res) => {
          this.convertPhotos(id, res);
        });
      }
    },
    convertPhotos(id, res) {
      const photos = {
        id: "",
        url: "",
      };

      if (id === "m1") {
        photos.id = res.headers["picsum-id"];
        photos.url = res.request.responseURL;
      } else if (id === "m2") {
        photos.id = id;
        photos.url = res.data.message;
      } else if (id === "m3") {
        photos.id = res.data[0].id;
        photos.url = res.data[0].url;
      } else if (id === "m4") {
        photos.id = id;
        photos.url = res.data.image;
      } else if (id === "m5") {
        photos.id = id;
        photos.url = res.data.image;
      }
      this.newPhotosList.push(photos);
    },
  },
  created() {
    const defaultPhotosList = {
      id: "m1",
      url: "https://picsum.photos/200/300",
    };

    this.getPhotosList(defaultPhotosList);
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
