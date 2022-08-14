<template>
  <article class="registration-container" :class="active">
    <button class="registration-link" @click="signOut">
      {{ $t("signOut") }}
    </button>
  </article>
</template>

<script>
import router from "@/router";
export default {
  props: {
    activation: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    signOut() {
      localStorage.removeItem("usersAccount");
      router.push("/home");
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
  transition: 0.4s ease-in-out;
  opacity: 1;

  @media (min-width: 768px) {
    transform: none;
    transition: all 0s ease 0s;
  }
}
</style>
