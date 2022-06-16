<template>
  <li :id="id">
    <Photos-item-card :class="disabledAfterAdded">
      <template #default>
        <v-lazy-image class="img" :src="link" alt="photo" />
      </template>

      <template #button>
        <button
          class="photos-button"
          @click="addPhotoToGallery"
          :class="disabled"
        >
          Add
        </button>
      </template>
    </Photos-item-card>
  </li>
</template>

<script>
import PhotosItemCard from "../../card/PhotosItemCard.vue";

export default {
  components: {
    PhotosItemCard,
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
      if (
        currentRoute === "/home" ||
        currentRoute === "/home/" + this.category
      ) {
        this.activity = !this.activity;
      } else if (
        currentRoute === "/home/user" ||
        currentRoute == "/home/user/" + this.category
      ) {
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
.photos-button {
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