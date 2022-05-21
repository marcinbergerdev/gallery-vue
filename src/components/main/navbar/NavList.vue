<template>
  <nav class="nav">
    <ul class="nav__list">
      <nav-item></nav-item>
    </ul>
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  components: {
    NavItem,
  },
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.95;

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 50px 60px;
    min-height: 100%;
  }

  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    opacity: 1;

    &__list{
      display: block;
    }
  }
}
</style>

