<template>
  <ul id="myList" ref="list" class="photos-list">
    <photos-item
      v-for="photo in newPhotos"
      :key="photo.id"
      :id="photo.id"
      :link="photo.url"
      :category="this.category"
      @add-photo="this.addPhoto"
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
  inject: ["menuLinks", "selectedPhotos", "userLoggStatus"],
  data() {
    return {
      numberOfPhotos: 20,
      uploadedPhotos: [],
      newPhotos: [],
    };
  },
  methods: {
    photosConvert(id, newRoute, response) {
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

      for (let i = 0; i < this.numberOfPhotos; i++) {
        axios
          .get(selectedOption.url)
          .then((response) => {
            this.photosConvert(i, newRoute, response);
          })
          .catch((error) => {
            console.error(
              "Please check your API link or single photo API didn't load properly, refresh if you wont upload! " +
                error
            );
          });
      }
    },

    addPhoto(id) {
      const selectedPhoto = this.newPhotos.find((photo) => photo.id === id);
      this.selectedPhotos(selectedPhoto);
    },

    ifUserIsLogged(currentRoute) {
      if (
        currentRoute === "/home" ||
        currentRoute === "/home/" + this.category
      ) {
        this.userLoggStatus(false);
      } else if (
        currentRoute === "/home/user" ||
        currentRoute === "/home/user/" + this.category
      ) {
        this.userLoggStatus(true);
      }
    },
  },
  watch: {
    category(newRoute) {
      const currentRoute = this.$route.href;

      const scrollToElement = this.$refs["list"];
      const top = scrollToElement.offsetTop;
      window.scrollTo(0, top);

      newRoute !== undefined
        ? this.getPhotos(newRoute)
        : this.getPhotos("random");

      this.ifUserIsLogged(currentRoute);
    },
  },
  created() {
    const newRoute = this.$route.params.category;
    const currentRoute = this.$route.href;

    currentRoute === "/home" || currentRoute === "/home/user"
      ? this.getPhotos("random")
      : this.getPhotos(newRoute);

    this.ifUserIsLogged(currentRoute);
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