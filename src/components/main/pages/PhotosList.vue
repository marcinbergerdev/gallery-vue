<template>
  <ul id="myList" class="photos-list">
    <photos-item
      v-for="photo in newPhotos"
      :key="photo.id"
      :id="photo.id"
      :link="photo.url"
    ></photos-item>
  </ul>
</template>

<script>
import PhotosItem from "./PhotosItem.vue";
import axios from "axios";

export default {
  components: {
    PhotosItem,
  },
  props: ["category"],
  inject: ["menuLinks"],
  data() {
    return {
      uploadedPhotos: [],
      newPhotos: [],
    };
  },
  methods: {
    photoConvert(id, newRoute, response) {
      const photo = {
        id: "",
        url: "",
      };

      if (newRoute === "random") {
        photo.id = response.headers["picsum-id"];
        photo.url = response.request.responseURL;
      } else if (newRoute === "dogs") {
        photo.id = id;
        photo.url = response.data.message;
      } else if (newRoute === "cats") {
        photo.id = response.data[0].id;
        photo.url = response.data[0].url;
      } else if (newRoute === "foods") {
        photo.id = id;
        photo.url = response.data.image;
      } else if (newRoute === "fox") {
        photo.id = id;
        photo.url = response.data.image;
      }
      this.newPhotos.push(photo);
    },

    getPhotos(newRoute) {
      this.newPhotos = [];
      const selectedOption = this.menuLinks.find(
        (link) => link.id === newRoute
      );

      for (let i = 0; i < 10; i++) {
        axios
          .get(selectedOption.url)
          .then((response) => {
            this.photoConvert(i, newRoute, response);
          })
          .catch((error) => {
            console.log("Please check your API link " + error);
          });
      }
    },
  },
  watch: {
    category(newRoute) {
      this.getPhotos(newRoute);
    },
  },
  created() {
    const newRoute = this.$route.params.category;
    const homeRoute = this.$route.href;

    if (homeRoute === "/home") {
      this.getPhotos("random");
    } else {
      this.getPhotos(newRoute);
    }
  },
};
</script>



<style lang="scss" scoped>
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
  background-image: linear-gradient(329deg, #b9b9b9, #fff, #b9b9b9);

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
</style>