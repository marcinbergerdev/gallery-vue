<template>
  <article class="registration-container" :class="active">
    <router-link class="registration-link" to="/home">Sign out</router-link>
  </article>
</template>

<script>
export default {
  props: {
    activation: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    active() {
      return { active: this.activation };
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-container {
  position: fixed;
  bottom: 10%;
  right: 50%;
  transform: translateX(300%);
  opacity: 0;
  transition: all 0.4s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    top: 0;
    left: 0;
    transform: none;
    transition: all 0s ease 0s;
    opacity: 1;
    width: auto;
  }
}

.active {
  transform: translateX(60%);
  transition: 0.4s ease-in-out;
  opacity: 1;

  @media (min-width: 768px) {
    transform: none;
    transition: all 0s ease 0s;
  }
}
</style>