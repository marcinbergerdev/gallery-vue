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
    width: 200px;
    height: 1px;
    background: #000;
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
    width: 25rem;
    height: 25rem;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.7);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 200px;
      height: 1px;
      background: #000;
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
  }
}

</style>