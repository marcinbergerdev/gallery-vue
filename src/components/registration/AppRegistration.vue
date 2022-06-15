<template>
  <section class="form-wrapper">
    <article class="form-box">
      <header class="form-header">
        <h1 class="form-header__text">Registration</h1>
        <router-link to="/home" class="form-header__button">Back</router-link>
      </header>

      <Form @submit="sendData">
        <div class="form-input">
          <label for="login">Login <span>*</span></label>
          <Field
            id="login"
            name="login"
            type="text"
            v-model="inputLogin"
            :rules="isRequired"
          />
          <ErrorMessage name="login" />
        </div>

        <div class="form-input">
          <label for="password">Password <span>*</span></label>
          <Field
            id="password"
            name="password"
            type="password"
            v-model="inputPassword"
            :rules="isRequired"
          />
          <ErrorMessage name="password" />
        </div>

        <div class="form-input">
          <label for="confirm-password">Confirm password <span>*</span></label>
          <Field
            id="confrim-password"
            name="confrim-password"
            type="password"
            v-model="inputConfrimPassword"
            :rules="[isRequired, somePassword]"
          />
          <ErrorMessage name="confrim-password" />
        </div>

        <button class="form-sendBtn">Create</button>
      </Form>
    </article>

    <error-alert v-if="confrimAndLeave">
      <button class="modal-buttons" @click="closeWindow">Cancel</button>
      <button class="modal-buttons" @click="confirmAndLeave">Okey</button>
    </error-alert>
  </section>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import ErrorAlert from "../error/ErrorAlert.vue";
import router from "@/router";


export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    ErrorAlert,
  },
  data() {
    return {
      usersAccount: [],
      inputLogin: "",
      inputPassword: "",
      inputConfrimPassword: "",
      confrimAndLeave: false,
      confirm: false,
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },

    somePassword(value) {
      if (this.inputPassword === value) {
        return true;
      }
      return "the password is different";
    },

    sendData() {
      const user = {
        login: this.inputLogin,
        password: this.inputPassword,
        confrimPassword: this.inputConfrimPassword,
        myGallery: [],
      };
      this.usersAccount.push(user);
      localStorage.setItem("users", JSON.stringify(this.usersAccount));

      this.inputLogin = "";
      this.inputPassword = "";
      this.inputConfrimPassword = "";
    },

    confirmAndLeave() {
      this.confirm = true;
      router.push("/");
    },
    closeWindow() {
      this.confrimAndLeave = false;
    },
  },
  beforeRouteLeave(to, from, next) {
    const confirm = this.confirm;

    if (this.inputLogin !== "" ||  this.inputPassword !== "" || this.inputConfrimPassword !== "") {
      this.confrimAndLeave = true;
      next(confirm);
    } else {
      next();
    }
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

.modal-buttons {
  padding: 10px 15px;

  margin: 10px 0 0 10px;
  background-color: #000;
  color: #fff;
  border: 0;
  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>