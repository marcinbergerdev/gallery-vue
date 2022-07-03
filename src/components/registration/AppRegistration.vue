<template>
  <registration-card>
    <template #default>
      <h1 class="form-text">{{$t("signin.header")}}</h1>
    </template>

    <template #messageError>
      <p class="account-exist" v-if="accountStatus">{{$t("signin.errorMessage")}}</p>
    </template>

    <template #formValidation>
      <Form @submit="searchLocaleStorage">
        <div class="form-input">
          <label for="login">{{$t("signin.input")}} <span>*</span></label>
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
          <label for="password">{{$t("signin.password")}} <span>*</span></label>
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
          <label for="confirm-password">{{$t("signin.confirmPassword")}} <span>*</span></label>
          <Field
            id="confrim-password"
            name="confrim-password"
            type="password"
            v-model="inputConfrimPassword"
            :rules="[isRequired, somePassword]"
          />
          <ErrorMessage name="confrim-password" />
        </div>

        <button class="form-sendBtn">{{$t("signin.confirm")}}</button>
      </Form>
    </template>
  </registration-card>

  <error-alert v-if="confirmAndLeaveActivity">
    <button class="modal-buttons error" @click="closeWindowErrorModal">
      {{$t("error.cancel")}}
    </button>
    <button class="modal-buttons error" @click="confirmAndLeaveErrorModal">
      {{$t("error.confirm")}}
    </button>
  </error-alert>

  <succes-alert v-if="createdSuccesActivity">
    <button class="modal-buttons succes" @click="successModalGoToLogin">
      {{$t("succes.confirm")}}
    </button>
  </succes-alert>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import ErrorAlert from "../alerts/ErrorAlert.vue";
import SuccesAlert from "../alerts/SuccessAlert.vue";
import router from "@/router";
import RegistrationCard from "../card/RegistrationCard.vue";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    ErrorAlert,
    SuccesAlert,
    RegistrationCard,
  },
  data() {
    return {
      inputLogin: "test",
      inputPassword: "test",
      inputConfrimPassword: "test",
      confirmAndLeaveActivity: false,
      confirm: false,
      createdSuccesActivity: false,
      accountStatus: false,
    };
  },
  methods: {
    isRequired(inputValue) {
      if (inputValue && inputValue.trim()) {
        this.accountStatus = false;
        this.createdSuccesActivity = false;
        return true;
      }
      return "This is required";
    },

    somePassword(confrimPassword) {
      if (this.inputPassword === confrimPassword) {
        return true;
      }
      return "the password is different";
    },

    searchLocaleStorage() {
      const users = JSON.parse(localStorage.getItem("users"));
      const user = {
        login: this.inputLogin,
        password: this.inputPassword,
        confrimPassword: this.inputConfrimPassword,
        myGallery: [],
      };

      users ? this.serachAccounts(users, user) : this.createAccount(user);

      this.inputLogin = "";
      this.inputPassword = "";
      this.inputConfrimPassword = "";
    },

    serachAccounts(users, curentUser) {
      const searchingUser = users.some(
        (user) => user.login === curentUser.login
      );

      if (searchingUser) {
        this.accountStatus = true;
      } else {
        this.pushUsers(curentUser);
      }
    },

    createAccount(user) {
      const usersAccount = [];
      usersAccount.push(user);
      localStorage.setItem("users", JSON.stringify(usersAccount));
      this.createdSuccesActivity = true;
    },

    pushUsers(user) {
      let users = [];
      users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      this.createdSuccesActivity = true;
    },

    confirmAndLeaveErrorModal() {
      this.confirm = true;
      router.push("/");
    },

    closeWindowErrorModal() {
      this.confirmAndLeaveActivity = false;
    },
    successModalGoToLogin() {
      router.push("/login");
      this.createdSuccesActivity = false;
    },
  },
  beforeRouteLeave(to, from, next) {
    const confirm = this.confirm;

    if (
      this.inputLogin !== "" ||
      this.inputPassword !== "" ||
      this.inputConfrimPassword !== ""
    ) {
      this.confirmAndLeaveActivity = true;
      next(confirm);
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped>
.form-text {
  font-size: 1.7rem;
  letter-spacing: 1px;
  color: var(--white);
}

.account-exist {
  font-size: 1.5rem;
  margin-top: 1.9rem;
  text-align: center;
  color: var(--red);
}

.modal-buttons {
  background-color: var(--black);
  color: var(--white);
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.error {
  padding: 1rem 1.5rem;
  margin: 1rem 0 0 1rem;
}

.succes {
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  border-radius: 2rem;

  @media (min-width: 768px) {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
</style>