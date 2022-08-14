<template>
  <li class="link">
    <router-link :to="categoryLink">{{ $t(`menu.${id}`) }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    userLog: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    categoryLink() {
      return this.userLog
        ? { name: "user-category", params: { category: this.id } }
        : { name: "category", params: { category: this.id } };
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.7;

  &:hover,
  &.router-link-active {
    opacity: 1;
  }
}
.link {
  padding: 1rem;
  font-size: 2rem;
  list-style: none;
  color: var(--white);
  background-color: transparent;

  @media (orientation: landscape) {
    padding: 0.5rem;
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    font-size: 1.7rem;
    cursor: pointer;
  }
}
</style>
