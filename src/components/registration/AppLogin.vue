<template>
  <Registration-card>
    <template #default>
      <h1 class="header-text">{{$t("login.header")}}</h1>
    </template>

    <template #messageError>
      <p class="account-notexist" v-if="accountStatus">
        {{$t("login.errorMessage")}}
      </p>
    </template>

    <template #formValidation>
      <Form @submit="sendData">
        <div class="form-input">
          <label for="login">{{$t("login.input")}}</label>
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
          <label for="password">{{$t("login.password")}}</label>
          <Field
            id="password"
            name="password"
            type="password"
            v-model="inputPassword"
            :rules="isRequired"
          />
          <ErrorMessage name="password" />
        </div>

        <button class="form-sendBtn">{{$t("login.confirm")}}</button>
      </Form>
    </template>
  </Registration-card>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import router from "@/router";
import RegistrationCard from "../card/RegistrationCard.vue";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    RegistrationCard,
  },
  data() {
    return {
      inputLogin: "admin",
      inputPassword: "admin",
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
  created() {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = {
      login: "admin",
      password: "admin",
      confrimPassword: "admin",
      myGallery: [],
    };

    if (users) {
      if (users.length >= 2) {
        this.inputLogin = "";
        this.inputPassword = "";
      }
      return;
    } else {
      localStorage.setItem("users", JSON.stringify([user]));
    }
  },
};
</script>

<style lang="scss" scoped>
.header-text {
  font-size: 1.7rem;
  letter-spacing: 1px;
  color: var(--white);
}

.account-notexist {
  font-size: 1.5rem;
  margin-top: 1.9rem;
  text-align: center;
  color: var(--red);
}
</style>