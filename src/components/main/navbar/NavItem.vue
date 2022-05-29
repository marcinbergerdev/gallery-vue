<template>
  <li class="link">
    <router-link :to="categoryLink">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    linkName: {
      type: String,
      required: true,
    },
    userLogg: {
      type: Boolean,
    },
  },
  computed: {
    categoryLink() {
      return this.userLogg
        ? { name: "user-category", params: { category: this.linkName } }
        : { name: "category", params: { category: this.linkName } };
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
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
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>