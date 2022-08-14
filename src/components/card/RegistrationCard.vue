<template>
  <!-- Raz używasz class-class a raz classClass + te nazwy klas do  zmiany -->
  <section class="form-wrapper">
    <article class="form-box">
      <header class="form-header">
        <slot></slot>
        <router-link to="/home" class="form-header__button">{{
          $t("back")
        }}</router-link>
      </header>

      <slot name="messageError"></slot>
      <slot name="formValidation"></slot>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.from {
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--registration-bg); //plus za używanie zmiennych
  }
  &-box {
    width: 80%;
    margin: 5rem 0;
    border: 1px solid var(--black);
    background-color: var(--white);
    animation: registrationAnimation;
    animation-duration: 0.2s;

    @media (min-width: 768px) {
      max-width: 45rem;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    background-color: var(--black);
  }
  &__button {
    padding: 0.5rem;
    font-size: 1.4rem;
    text-decoration: none;
    background-color: var(--black);
    color: var(--white);
    border-radius: 1.7rem;
    border: 2px solid var(--white);
  }
}
</style>
