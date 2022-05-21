<template>
  <ul class="pages-list">
    <page-item></page-item>
  </ul>
</template>

<script>
import PageItem from "./PagesItem.vue";

export default {
  components: {
    PageItem,
  },
};
</script>

<style lang="scss">
.pages-list {
  background-color: aqua;

  @media (min-width: 768px) {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
  }
}
</style>