<template>
  <section class="form-wrapper">
    <article class="form-box">
      <header class="form-header">
        <slot></slot>
        <router-link to="/home" class="form-header__button">Back</router-link>
      </header>

      <slot name="messageError"></slot>
      <slot name="formValidation"></slot>
    </article>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.form-box {
  width: 80%;
  margin: 50px 0;
  border: 1px solid #000;
  background-color: #fff;
  animation: registrationAnimation;
  animation-duration: 0.2s;

  @media (min-width: 768px) {
    max-width: 450px;
  }
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background-color: #000;

  &__button {
    padding: 5px;
    font-size: 1.4rem;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    border-radius: 17px;
    border: 2px solid #fff;
  }
}
</style>


