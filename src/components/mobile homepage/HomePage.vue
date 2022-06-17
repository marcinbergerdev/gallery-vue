<template>
  <section class="homepage-header" v-if="hiddenSection">
    <img
      class="homepage-header__mobileBg"
      src="../../assets/backgroundMobile.jpg"
      alt="mobile-background"
    />

    <article class="boxDecorations">
      <div class="boxDecorations__left"></div>
      <div class="boxDecorations__right"></div>
    </article>

    <a href="#myList" class="homepage-header__button">Search Gallery</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hiddenSection: false,
    };
  },
  methods: {
    homePageHidden(value) {
      const width = value.target.innerWidth;

      if (width <= 768) {
        this.hiddenSection = true;
      } else {
        this.hiddenSection = false;
      }
    },
  },
  created() {
    const pageWidth = window.innerWidth;
    if (pageWidth <= 768) this.hiddenSection = true;
    window.addEventListener("resize", this.homePageHidden);
  },
};
</script>

<style lang="scss" scoped>
.homepage-header {
  min-height: 100vh;
  text-align: center;
  background-color: var(--homepage-bg);
  overflow: hidden;

  &__mobileBg {
    width: 100%;
    height: 70vh;
    filter: brightness(50%);
  }

  &__button {
    display: block;
    margin: 10rem auto 5rem auto;
    padding: 1rem;
    width: 10rem;
    font-size: 1.2rem;
    text-decoration: none;
    background-color: var(--black);
    color: var(--white);
    border: 0;
    box-shadow: 0px 1px 17px rgb(199, 197, 197);
  }
}

.boxDecorations {
  position: relative;

  &__left,
  &__right {
    position: absolute;
    width: 50rem;
    height: 15rem;
    background-color: #060606;
  }

  &__left {
    top: -30px;
    left: -244px;
    transform: rotate(-29deg);
  }

  &__right {
    top: -33px;
    right: -242px;
    transform: rotate(29deg);
    box-shadow: -3px 2px 2px rgba(70, 70, 70, 0.26);
  }

  @media (orientation: landscape) {
    &__left,
    &__right {
      height: 11.5rem;
    }

    &__left {
      top: -47px;
      left: -140px;
      transform: rotate(351deg);
    }

    &__right {
      top: -35px;
      right: -145px;
      transform: rotate(13deg);
    }
  }

  @media (min-width: 685px) and (orientation: landscape) {
    &__left {
      left: -106px;
    }

    &__right {
      right: -110px;
    }
  }

  @media (min-width: 430px) and (orientation: portrait) {
    &__left,
    &__right {
      height: 160px;
    }

    &__left {
      top: -24px;
      left: -224px;
    }

    &__right {
      top: -29px;
      right: -195px;
    }
  }

  @media (min-width: 480px) and (orientation: portrait) {
    &__left,
    &__right {
      height: 170px;
    }
    &__right {
      top: -42px;
      right: -182px;
    }
  }

  @media (min-width: 530px) and (orientation: portrait) {
    &__left,
    &__right {
      height: 180px;
    }

    &__left {
      top: -41px;
      left: -167px;
    }

    &__right {
      top: -48px;
      right: -145px;
    }
  }

  @media (min-width: 600px) and (orientation: portrait) {
    &__left,
    &__right {
      width: 500px;
      height: 180px;
    }

    &__left {
      top: -71px;
      left: -117px;
      transform: rotate(-21deg);
    }

    &__right {
      top: -63px;
      right: -118px;
      transform: rotate(21deg);
    }
  }
}
</style>