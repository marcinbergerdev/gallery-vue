<template>
  <ul id="myList" ref="list" class="photos-list">
    <Photos-item
      v-for="photo in newPhotos"
      :key="photo.id"
      :id="photo.id"
      :link="photo.url"
      :category="this.category"
      @add-photo="this.addPhoto"
    ></Photos-item>
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
  inject: ["menuLinks", "userLoggStatus"],
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

      const currentUser = localStorage.getItem("usersAccount");
      const users = localStorage.getItem("users");
      const usersList = JSON.parse(users);

      const selectedUser = usersList.find((user) => user.login === currentUser);
      const userIndex = usersList.findIndex(
        (user) => user.login === currentUser
      );
      usersList.splice(userIndex, 1);

      selectedUser.myGallery.push(selectedPhoto);
      usersList.push(selectedUser);
      localStorage.setItem("users", JSON.stringify(usersList));
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
    $route(newRoute) {
      if (newRoute.href === "/home") this.getPhotos("random");
    },
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
