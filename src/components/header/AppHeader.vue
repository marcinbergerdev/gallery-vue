<template>
  <header class="header" :class="mobileNav">
    <section class="logo-languages">
      <header-logo></header-logo>
      <header-languages></header-languages>
    </section>

    <header-nav :activation="this.activation"></header-nav>
  </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderLanguages from "./HeaderLanguages.vue";
import HeaderNav from "./HeaderNav.vue";

export default {
  components: {
    HeaderLogo,
    HeaderLanguages,
    HeaderNav,
  },
  props: ["activation"],
  data() {
    return {
      scrollMobileNavigation: false,
    };
  },
  methods: {
    test() {
      const userHeight = window.innerHeight;
      const currentHeight = window.scrollY;

      currentHeight >= userHeight
        ? (this.scrollMobileNavigation = true)
        : (this.scrollMobileNavigation = false);
    },
  },
  computed: {
    mobileNav() {
      return { test: this.scrollMobileNavigation };
    },
  },
  created() {
    window.addEventListener("scroll", this.test);
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: transparent;


  @media (min-width: 768px) {
    position: static;
    min-height: 70px;
    background-color: #000;
  }
}

.logo-languages {
  display: flex;
  align-items: center;
}

.test {
  background-color: #000;
  transition: .3s ease-in-out;
}
</style>