<template>
<home-page></home-page>
</template>

<script>
import HomePage from "./components/mobile homepage/HomePage.vue";

export default {
components: {
   HomePage
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
