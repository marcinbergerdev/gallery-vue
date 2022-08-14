<template>
  <article class="registration-container" :class="active">
    <router-link class="registration-link" to="/login">{{
      $t("login.logo")
    }}</router-link>

    <router-link class="registration-link" to="/registration">{{
      $t("signIn.logo")
    }}</router-link>
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
.active {
  transform: translateX(50%);
  transition: transform 0.4s ease-in-out;
  opacity: 1;

  @media (min-width: 768px) {
    transform: none;
    transition: all 0s ease 0s;
  }
}
</style>
