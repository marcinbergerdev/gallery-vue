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
  inject: ["menuLinks", "userLogStatus"],
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

      //Osobiście jestem fanem używania if-a w JS..
      if (newRoute === "dogs" || newRoute === "foods" || newRoute === "fox") {
        photo.id = id;
        photo.url = response.data.image;
      }
      if (newRoute === "random") {
        photo.id = response.headers["picsum-id"];
        photo.url = response.request.responseURL;
      }
      if (newRoute === "cats") {
        photo.id = response.data[0].id;
        photo.url = response.data[0].url;
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
        this.userLogStatus(false);
      } else if (
        currentRoute === "/home/user" ||
        currentRoute === "/home/user/" + this.category
      ) {
        this.userLogStatus(true);
      }
    },
    scrollToList() {
      const scrollToElement = this.$refs["list"];
      const top = scrollToElement.offsetTop;
      window.scrollTo(0, top);
    },
  },
  watch: {
    $route(newRoute) {
      if (newRoute.path === "/home") this.getPhotos("random");
      this.scrollToList();
    },
    category(newRoute) {
      const currentRoute = this.$route.path;
      this.scrollToList();

      newRoute !== undefined
        ? this.getPhotos(newRoute)
        : this.getPhotos("random");

      this.ifUserIsLogged(currentRoute);
    },
  },
  created() {
    const newRoute = this.$route.params.category;
    const currentRoute = this.$route.path;

    currentRoute === "/home" || currentRoute === "/home/user"
      ? this.getPhotos("random")
      : this.getPhotos(newRoute);

    this.ifUserIsLogged(currentRoute);
  },
};
</script>
