<template>
  <section class="form-container">
    <form>
      <h1 class="form-container__logo">Registration</h1>
      <router-link class="form-container__backBtn" to="/">Back</router-link>

      <div class="form-container__box">
        <slot name="login"></slot>
      </div>

      <div class="form-container__box">
        <slot name="password"></slot>
      </div>

      <div class="form-container__box">
        <slot name="confirmPassword"></slot>
      </div>

      <slot name="sendBtn"></slot>
    </form>
  </section>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background-color: #2d3137;

  &__logo {
    margin-bottom: 10px;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 2px;

    @media (orientation: landscape) {
      margin-bottom: 0px;
    }
  }

  &__backBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 30px;
    border: 0;
    font-size: 1.4rem;
    text-decoration: none;
    background-color: #000;
    color: #fff;

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 25px 25px 25px 25px;
    background-color: #222830;
    color: #fff;
    border-radius: 25px;
    box-shadow: 0px 0px 20px 2px #4b4b4b;

    @media (min-width: 768px) {
      max-width: 500px;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
}
</style>