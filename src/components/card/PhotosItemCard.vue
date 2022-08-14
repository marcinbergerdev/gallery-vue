<template>
  <article class="photos">
    <div class="photos__img">
      <slot></slot>
    </div>
    <slot name="button"></slot>
  </article>
</template>

<style lang="scss" scoped>
@keyframes showPhoto {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.photos {
  position: relative;
  display: flex;
  flex-direction: column;
  animation: showPhoto;
  animation-duration: 2s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    display: block;
    width: 13rem;
    height: 1px;
    background: var(--black);
  }

  &::before {
    bottom: -7%;
    left: 41%;
  }

  &::after {
    bottom: 18%;
    left: 72%;
    transform: rotate(90deg);
  }

  &__img {
    position: relative;
    width: 17rem;
    height: 17rem;
    box-shadow: 0 2px 2rem rgba(0, 0, 0, 0.7);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 13rem;
      height: 1px;
      background: var(--black);
    }

    &::before {
      top: -9%;
      left: -17%;
    }

    &::after {
      top: 21%;
      left: -49%;
      transform: rotate(90deg);
    }

    @media (min-width: 370px) {
      width: 25rem;
      height: 25rem;
      &::before,
      &::after {
        content: "";
        width: 20rem;
      }

      &::before {
        top: -9%;
        left: -17%;
      }

      &::after {
        top: 21%;
        left: -49%;
      }
    }
  }

  @media (min-width: 370px) {
    &::before,
    &::after {
      content: "";
      width: 20rem;
    }

    &::before {
      bottom: -7%;
      left: 41%;
    }

    &::after {
      bottom: 18%;
      left: 72%;
    }
  }
}
</style>
