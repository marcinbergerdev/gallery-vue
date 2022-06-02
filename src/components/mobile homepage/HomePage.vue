<template>
  <section class="homepage-header">
    <img
      class="homepage-header__mobileBg"
      src="../../assets/backgroundMobile.jpg"
      alt="mobile-background"
    />

    <article class="boxDecorations">
      <div class="boxDecorations__left"></div>
      <div class="boxDecorations__right"></div>
    </article>

    <a href="#myList" class="homepage-header__button" @click="scrollMeTo">Search Gallery</a>
  </section>
</template>



<script>
export default {
};
</script>

<style lang="scss" scoped>
.homepage-header {
  min-height: 100vh;
  text-align: center;
  background-color: #4c4c4c;
  overflow: hidden;

  &__mobileBg {
    width: 100%;
    height: 70vh;
    filter: brightness(50%);
  }

  &__button {
    display: block;
    margin: 0 auto;
    width: 100px;
    font-size: 1.2rem;
    margin-top: 100px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: 0;
    box-shadow: 0px 1px 17px rgb(199, 197, 197);
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.boxDecorations {
  position: relative;

  &__left,
  &__right {
    position: absolute;
    width: 500px;
    height: 150px;
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
      height: 115px;
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