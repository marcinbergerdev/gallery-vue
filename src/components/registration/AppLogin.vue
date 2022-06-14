<template>
  <section class="form-wrapper">
    <article class="form-box">
      <header class="form-header">
        <h1 class="form-header__text">Login</h1>
        <router-link to="/home" class="form-header__button">Back</router-link>
      </header>
      <p class="accountNotExist" v-if="accountStatus">
        The account does not exist
      </p>
      <Form @submit="sendData">
        <div class="form-input">
          <label for="login">Login</label>
          <Field
            id="login"
            name="Login"
            type="text"
            v-model="inputLogin"
            :rules="isRequired"
          />
          <ErrorMessage name="Login" />
        </div>

        <div class="form-input">
          <label for="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            v-model="inputPassword"
            :rules="isRequired"
          />
          <ErrorMessage name="password" />
        </div>

        <button class="form-sendBtn">Log in</button>
      </Form>
    </article>
  </section>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import router from "@/router";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      inputLogin: "",
      inputPassword: "",
      accountStatus: false,
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        this.accountStatus = false;
        return true;
      }
      return "This is required";
    },
    sendData() {
      const usersData = localStorage.getItem("users");
      const usersAccount = JSON.parse(usersData);

      if (usersData) {
        const myAccount = usersAccount.find(
          (user) =>
            user.login === this.inputLogin &&
            user.password === this.inputPassword
        );

        if (myAccount) {
          localStorage.setItem("usersAccount", myAccount.login);
          router.push("/home/user");
        } else {
          this.accountStatus = true;
        }
      } else {
        this.accountStatus = true;
      }
    },
  },
};
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

  @media (min-width: 768px) {
    max-width: 450px;
  }
}

.accountNotExist {
  font-size: 1.5rem;
  margin-top: 19px;
  text-align: center;
  color: red;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background-color: #000;

  &__text {
    font-size: 1.7rem;
    letter-spacing: 1px;
    color: #fff;
  }

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

.form-input {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

form {
  padding: 10px;
}

.form-input label {
  font-size: 1.5rem;
}

.form-input input {
  margin-top: 5px;
  padding: 6px;
}
.form-input span {
  color: red;
}

.form-sendBtn {
  width: 100%;
  margin-top: 20px;
  padding: 13px 0;
  background-color: #000;
  color: #fff;
  border: 0;
}
</style>