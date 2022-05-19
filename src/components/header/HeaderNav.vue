<template>
   <section class='nav-container'>
      <user-registration></user-registration>
      <user-account></user-account>
      <user-signout></user-signout>
      <hamburger-button></hamburger-button>
   </section>
</template>

<script>
import UserRegistration from './nav/UserRegistration.vue';
import UserAccount from './nav/UserAccount.vue';
import UserSignout from './nav/UserSignout.vue';
import HamburgerButton from './hamburger/HamburgerButton.vue';

export default {
   components: {
      UserRegistration,
      UserAccount,
      UserSignout,
      HamburgerButton
   }

}
</script>

<style lang="scss" scoped>
.nav-container{
   display: flex;
   align-items: center;
}
</style>