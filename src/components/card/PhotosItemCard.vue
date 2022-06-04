<template>
  <li :id="id">
    <article class="photos">
      <div class="photos__img">
        <v-lazy-image class="img" :src="link" alt="photo" />
      </div>
      <slot></slot>
    </article>
  </li>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  props: {
    id: {
      type: [String, Number],
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

.img {
  width: 100%;
  height: 100%;
}
</style>