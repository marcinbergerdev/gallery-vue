<template>
  <section>
    <p v-if="emptyList" class="empty-list">{{ $t("emptyList")}}</p>
    <ul id="myList" class="photos-list">
      <gallery-item
        v-for="photo in myPhotos"
        :key="photo.id"
        :id="photo.id"
        :link="photo.url"
        @deleteSelectedPhoto="photoDelete"
      ></gallery-item>
    </ul>
  </section>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  components: {
    GalleryItem,
  },
  data() {
    return {
      myPhotos: [],
    };
  },
  inject: ["userLogStatus"],
  methods: {
    photoDelete(id) {
      const currentUser = localStorage.getItem("usersAccount");
      const users = localStorage.getItem("users");
      const usersList = JSON.parse(users);
      const selectedUser = usersList.find((user) => user.login === currentUser);

      const userIndex = usersList.findIndex(
        (user) => user.login === currentUser
      );
      usersList.splice(userIndex, 1);

      const photoIndex = selectedUser.myGallery.findIndex(
        (photo) => photo.id === id
      );
      selectedUser.myGallery.splice(photoIndex, 1);
      this.myPhotos = selectedUser.myGallery;
      usersList.push(selectedUser);
      localStorage.setItem("users", JSON.stringify(usersList));
    },
    ifUserIsLogged(currentRoute) {
      if (currentRoute === "/home/user/myGallery") {
        const currentUser = localStorage.getItem("usersAccount");
        const users = localStorage.getItem("users");
        const usersList = JSON.parse(users);

        const selectedUser = usersList.find(
          (user) => user.login === currentUser
        );

        this.myPhotos = selectedUser.myGallery;
        this.userLogStatus(true);
      }
    },
  },
  computed: {
    emptyList() {
      return this.myPhotos.length === 0;
    },
  },
  watch: {
    category(newRoute) {
      const scrollToElement = this.$refs["list"];
      const top = scrollToElement.offsetTop;

      window.scrollTo(0, top);
      this.ifUserIsLogged(newRoute);
    },
  },
  created() {
    const currentRoute = this.$route.href;
    this.ifUserIsLogged(currentRoute);
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  text-align: center;
}

.empty-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
}
</style>