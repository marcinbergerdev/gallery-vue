<template>
  <main class="main-content">
    <nav-list :activation="this.activation" :user-logg="this.userLogg"></nav-list>
    <router-view name="gallery"></router-view>
  </main>
</template>

<script>
import NavList from "./navbar/NavList.vue";

export default {
  components: {
    NavList,
  },
  props: ["activation", "newPhotosList", 'userLogg'],

  data() {
    return {};
  },
  methods: {
    test() {
      console.log(this.newPhotosList);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    min-height: calc(100vh - 70px);
  }
}
</style>