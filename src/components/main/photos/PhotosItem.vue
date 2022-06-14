<template>
  <li :id="id">
    <article class="photos" :class="disabledAfterAdded">
      <div class="photos__img">
        <v-lazy-image class="img" :src="link" alt="photo" />
      </div>
      <button
        class="photos__button"
        @click="addPhotoToGallery"
        :class="disabled"
      >
        Add
      </button>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: [String, Number],
      required: false,
    },
  },
  data() {
    return {
      buttonDisabled: true,
      photoDisabledAfterAdded: false,
    };
  },
  methods: {
    disabledBtn(currentRoute) {
      if (currentRoute === "/home" || currentRoute === "/home/" + this.category) {
        this.activity = !this.activity;
      } else if ( currentRoute === "/home/user" || currentRoute == "/home/user/" + this.category ) {
        this.buttonDisabled = !this.buttonDisabled;
      }
    },
    addPhotoToGallery() {
      this.$emit("addPhoto", this.id);
      this.photoDisabledAfterAdded = true;
    },
  },
  computed: {
    disabled() {
      return { disabled: this.buttonDisabled };
    },
    disabledAfterAdded() {
      return { disabled: this.photoDisabledAfterAdded };
    },
  },
  watch: {
    $route(value) {
      this.disabledBtn(value.href);
    },
  },
  created() {
    const currentRoute = this.$route.href;
    this.disabledBtn(currentRoute);
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

  &__button {
    position: relative;
    margin-top: 2rem;
    padding: 0.6rem;
    width: 5rem;
    align-self: flex-end;
    background-color: #000;
    color: #fff;
    border: 0;

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}

.img {
  width: 100%;
  height: 100%;
}

.disabled {
  pointer-events: none;
  opacity: 0.2;
  transition: 0.1s ease-in-out;
}
</style>