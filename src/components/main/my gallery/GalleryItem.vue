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
          {{$t("deletePhoto")}}
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
  width: 25%;
}

</style>