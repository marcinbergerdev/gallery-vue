<template>
  <li>
    <article class="photos">
      <div class="photos__img">
        <img class="img" :src="link" alt="photo" />
      </div>
      <button class="photos__addButton">Add</button>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

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
  display: flex;
  flex-direction: column;
  animation: showPhoto;
  animation-duration: 2s;

  &__img {
    position: relative;
    width: 25rem;
    height: 25rem;

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

  &__addButton {
    position: relative;
    margin-top: 2rem;
    padding: 0.6rem;
    width: 5rem;
    align-self: flex-end;
    background-color: #000;
    color: #fff;
    border: 0;

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
      top: 160%;
      left: -205%;
    }

    &::after {
      top: -140%;
      left: -45%;
      transform: rotate(90deg);
    }

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}

.img {
  width: 100%;
  height: 100%;
}
</style>