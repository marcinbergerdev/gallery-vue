<template>
  <li :id="id">
    <article class="photos">
      <div class="photos__img">
        <v-lazy-image class="img" :src="link" alt="photo" />
      </div>
      <button
        class="photos__button"
        :class="disabled"
        @click="$emit('addPhoto', id)"
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
      required: true
    }
  },
  data() {
    return {
      activity: true,
    };
  },
  methods: {
    disabledBtn(currentRoute){
      if(currentRoute === '/home' || currentRoute === '/home/' + this.category){
        this.activity = true;
      }else if(currentRoute === '/home/user' || currentRoute == '/home/user/' + this.category){
        this.activity = false
      }
    }
  },
  computed: {
    disabled() {
      return { disabled: this.activity };
    },
  },
  watch: {
    $route(value){
      this.disabledBtn(value.href);
    }
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

  &__button {
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

.disabled {
  pointer-events: none;
  opacity: 0.2;
}
</style>