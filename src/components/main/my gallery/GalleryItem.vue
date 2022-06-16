<template>
  <li :id="id">
    <Photos-item-card>
      <template #default>
        <v-lazy-image class="img" :src="link" alt="photo" />
      </template>

      <template #button>
        <button
          class="photos-button"
          @click="$emit('deleteSelectedPhoto', id)"
        >
          Delete
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
</style>