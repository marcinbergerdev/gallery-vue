<template>
  <button
    class="hamburger"
    :class="hamburgerActive"
    @click="changeActiveStatus"
  >
    <span class="hamburger__box">
      <span class="hamburger__box-line"></span>
    </span>
  </button>
</template>



<script>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  data() {
    return {
      activity: false,
      targetElement: null,
    };
  },
  methods: {
    changeActiveStatus() {
      this.activity = !this.activity;

      console.log(this.targetElement);

      if (this.targetElement.style.overflow !== "hidden") {
        disableBodyScroll(this.targetElement);
      } else {
        enableBodyScroll(this.targetElement);
      }


    },
  },
  computed: {
    hamburgerActive() {
      return { active: this.activity };
    },
  },
  created() {
    this.targetElement = document.querySelector("body");
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  background-color: transparent;
  border: 0;

  &__box {
    position: relative;
    display: block;
    width: 3rem;
    height: 2rem;

    &-line {
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 100%;
      height: 0.2rem;
      background-color: rgb(255, 255, 255);
      transition: all 0.3s ease-in-out;

      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 0.2rem;
        background-color: rgb(255, 255, 255);
        transition: all 0.3s ease-in-out;
      }

      &::before {
        width: 70%;
        top: 9px;
        right: 0;
      }

      &::after {
        top: 18px;
        left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    //  display: none;
  }
}

.active {
  .hamburger {
    &__box {
      &-line {
        transform: translateY(9px) rotate(45deg);
        transition: all 0.3s 0.1s ease-in-out;

        &::before {
          transform: translateX(-30px);
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }

        &::after {
          transform: translateY(-18px) rotate(90deg);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>