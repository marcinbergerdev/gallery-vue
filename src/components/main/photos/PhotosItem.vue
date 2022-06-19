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
          {{ $t("addPhoto") }}
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
      this.disabledBtn(value.path);
    },
  },
  created() {
    const currentRoute = this.$route.path;
    this.disabledBtn(currentRoute);
  },
};
</script>


<style lang="scss" scoped>
.photos-button {
  width: 47%;
  @media (min-width: 370px) {
    width: 32%;
  }
}

.disabled {
  pointer-events: none;
  opacity: 0.2;
  transition: 0.1s ease-in-out;
}
</style>