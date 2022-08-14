<template>
  <section class="nav-container">
    <router-view name="myAccount"></router-view>
    <router-view :activation="this.activation"></router-view>

    <hamburger-button :activation="this.activation"></hamburger-button>
  </section>
</template>

<script>
import HamburgerButton from "./hamburger/HamburgerButton.vue";

export default {
  components: {
    HamburgerButton,
  },
  props: ["activation"],
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
}
</style>
