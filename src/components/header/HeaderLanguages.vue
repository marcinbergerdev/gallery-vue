<template>
  <article
    class="languages-container"
    :class="btnAnimationActivity"
    @click="changeLanguages"
  >
    <button class="languages-container__btn">DE</button>
    <button class="languages-container__btn">EN</button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      btnAnimation: false,
    };
  },
  methods: {
    changeLanguages() {
      this.btnAnimation = !this.btnAnimation;
    },
  },
  computed: {
    btnAnimationActivity() {
      return { active: this.btnAnimation };
    },
  },
};
</script>

<style lang="scss" scoped>
.languages-container {
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 3.6rem;
    height: 100%;
    background-color: var(--language-bg);
    opacity: 0.4;
    transition: transform 0.2s ease-in-out;
  }

  &__btn {
    margin: 0 5px;
    padding: 0.2rem;
    font-size: 2rem;
    font-family: "Grape Nuts", cursive;
    background-color: transparent;
    border: 0;
    color: var(--white);
    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}
.active {
  &::before {
    transform: translateX(105%);
    transition: 0.2s ease-in-out;
  }
}


</style>