<template>
  <Registration-card>
    <template #default>
      <h1 class="form-header__text">Registration</h1>
    </template>

    <template #messageError>
      <p class="accountExist" v-if="accountStatus">account already exists</p>
    </template>

    <template #formValidation>
      <Form @submit="searchLocaleStorage">
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
    </template>
  </Registration-card>

  <Error-alert v-if="confirmAndLeaveActivity">
    <button class="modal-buttons error" @click="closeWindowErrorModal">
      Cancel
    </button>
    <button class="modal-buttons error" @click="confirmAndLeaveErrorModal">
      Okey
    </button>
  </Error-alert>

  <Succes-alert v-if="createdSuccesActivity">
    <button class="modal-buttons succes" @click="successModalGoToLogin">
      OK
    </button>
  </Succes-alert>
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

.accountExist {
  font-size: 1.5rem;
  margin-top: 19px;
  text-align: center;
  color: red;
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
  background-color: #000;
  color: #fff;
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.error {
  padding: 10px 15px;
  margin: 10px 0 0 10px;
}

.succes {
  padding: 5px 20px;
  margin-top: 10px;
  border-radius: 20px;

  @media (min-width: 768px) {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
</style>