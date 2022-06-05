<template>
  <li class="link">
    <router-link :to="categoryLink">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userLogg: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    categoryLink() {
      return this.userLogg
        ? { name: "user-category", params: { category: this.id } }
        : { name: "category", params: { category: this.id } };
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
  opacity: 0.7;

  &:hover,
  &.router-link-active{
    opacity: 1;
  }
}
.link {
  padding: 10px;
  font-size: 2rem;
  list-style: none;
  color: #fff;
  background-color: transparent;

  @media (orientation: landscape) {
    padding: 5px;
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    font-size: 1.7rem;
    cursor: pointer;
  }
}
</style>

