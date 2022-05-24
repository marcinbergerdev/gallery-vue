<template>
  <registration-card>
    <template #login>
      <label for="">Login</label>
      <input type="text" />
    </template>

    <template #password>
      <label for="">Password</label>
      <input type="password" />
    </template>

    <template #confirmPassword>
      <label for="">Confirm password</label>
      <input type="password" />
    </template>

    <template #sendBtn>
      <router-link class='sendButton' to="/home">Create</router-link>
    </template>
  </registration-card>
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
label {
  margin-bottom: 5px;
  font-size: 1.6rem;
  color: #fff;
}

input {
  padding: 5px 8px;
  border-radius: 5px;
  border: 0;
}

input:focus {
  outline: 2px solid #ffffff;
}

.sendButton {
  margin-top: 45px;
  padding: 9px 0;
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  border: 0;

  @media (orientation: landscape) {
    margin-top: 15px;
  }

  @media (min-width: 900px) {
    cursor: pointer;
    margin-top: 45px;
  }
}
</style>