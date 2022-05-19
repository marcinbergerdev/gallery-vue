<template>
<home-page></home-page>
<app-header></app-header>
</template>

<script>
import HomePage from "./components/mobile homepage/HomePage.vue";
import AppHeader from './components/header/AppHeader.vue';

export default {
components: {
   HomePage,
   AppHeader
}
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

</style>
