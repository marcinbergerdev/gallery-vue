<template>
  <main class='main-content'>
    <nav-list :navMenuActivity="this.navMenuActivity"></nav-list>
    <pages-list></pages-list>
  </main>

</template>

<script>
import NavList from "./navbar/NavList.vue";
import PagesList from "./pages/PagesList.vue";

export default {
  components: {
    NavList,
    PagesList,
  },
  props: ["navMenuActivity"]
};
</script>

<style lang="scss">
.main-content{

   width: 100%;

   @media(min-width: 768px){
      display: flex;
      min-height: calc(100vh - 70px);
   }
}

</style>