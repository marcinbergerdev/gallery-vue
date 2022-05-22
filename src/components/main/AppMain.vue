<template>
  <main class="main-content">
    <nav-list :activation="this.activation"></nav-list>
    <pages-list></pages-list>
  </main>
</template>

<script>
import NavList from "./navbar/NavList.vue";
import PagesList from "./pages/PhotosList.vue";

export default {
  components: {
    NavList,
    PagesList,
  },
  props: ["activation"],

  data() {
    return {
    };
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