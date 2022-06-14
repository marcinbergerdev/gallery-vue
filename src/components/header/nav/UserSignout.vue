<template>
  <article class="registration-container" :class="active">
    <button class="registration-link" @click="signOut">Sign out</button>
  </article>
</template>

<script>
import router from '@/router';
export default {
  props: {
    activation: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    signOut(){
      localStorage.removeItem('usersAccount');
      router.push('/home');
    }
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
  transform: translateX(50%);
  transition: 0.4s ease-in-out;
  opacity: 1;

  @media (min-width: 768px) {
    transform: none;
    transition: all 0s ease 0s;
  }
}
</style>