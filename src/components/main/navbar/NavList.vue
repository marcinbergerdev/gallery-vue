<template>
  <nav class="nav" :class="active">
    <ul class="nav__list">
      <nav-item
        v-for="link in menuLinks"
        :key="link.id"
        :id="link.id"
        :user-log="this.userLog"
      ></nav-item>
    </ul>
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  components: {
    NavItem,
  },
  inject: ["menuLinks", "closeMenu"],
  props: {
    activation: {
      type: Boolean,
      required: true,
    },
    userLog: {
      type: Boolean,
    },
  },
  computed: {
    active() {
      return { "nav-open": this.activation };
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 200%;
  transform: rotate(50deg);
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0;
  transition: 0.4s ease-in-out;

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 5rem 6rem;
    min-height: 100%;
  }

  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    opacity: 1;
    transform: none;
    transition: all 0s ease 0s;

    &__list {
      display: block;
      width: 19rem;
      height: calc(100vh - 7rem);
      overflow: auto;
    }
  }
}

.nav-open {
  transform: translateX(-200%);
  transition: transform 0.4s ease-in-out;
  opacity: 1;

  @media (min-width: 768px) {
    transform: none;
    transition: all 0s ease 0s;
  }
}
</style>

