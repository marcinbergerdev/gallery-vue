<template>
  <router-link to="/home/user/myGallery">
    <Icon class="user-icon" icon="ant-design:user-outlined" />
  </router-link>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.user-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.1rem;
  color: var(--white);

  @media (min-width: 370px) {
    margin-right: 2.5rem;
  }
  @media (min-width: 768px) {
    margin-right: 3rem;
  }
}
</style>