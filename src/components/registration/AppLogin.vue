<template>
  <section class="form-container">
    <h1 class="form-container__logo">Login</h1>
    <router-link class="back-button" to="/">Back</router-link>

    <form>
      <div class="form-container__box">
        <label for="">Login</label>
        <input type="text" />
      </div>

      <div class="form-container__box">
        <label for="">Password</label>
        <input type="password" />
      </div>
      <button class="form-container__sendButton">Log in</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 10px 20px;
  font-size: 3rem;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  border-radius: 50px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background-color: #4c4c4c;

  &__logo {
    margin-bottom: 50px;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 25px 25px 55px 25px;
    background-color: #bebebe;
    color: #fff;
    border-radius: 25px;
    box-shadow: 0px 0px 20px 2px #212121;

    @media (orientation: landscape) {
      max-width: 500px;
      padding: 10px 30px;
    }

    @media (min-width: 900px) and (orientation: landscape) {
      padding: 25px 25px 55px 25px;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
      margin-bottom: 5px;
      font-size: 1.6rem;
      color: #000;
    }

    input {
      padding: 7px 10px;
      border-radius: 5px;
      border: 0;
    }

    input:focus {
      outline: 2px solid #4c4c4c;
    }
  }

  &__sendButton {
    margin-top: 20px;
    padding: 9px 0;
    border-radius: 5px;
    border: 0;
    background-color: #000;
    color: #fff;

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}
</style>