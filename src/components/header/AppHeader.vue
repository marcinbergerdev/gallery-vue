<template>
  <header class='header'>
    <section class='logo-languages'>
      <header-logo></header-logo>
      <header-languages></header-languages>
    </section>

    <header-nav></header-nav>
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
};
</script>

<style lang="scss" scoped>

.header{
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 1rem;

   // background-color: black;
}

.logo-languages{
   display: flex;
   align-items: center;
}
</style>