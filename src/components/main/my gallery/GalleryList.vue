<template>
  <ul id="myList" class="photos-list">
    <gallery-item
      v-for="photo in myPhotos"
      :key="photo.id"
      :id="photo.id"
      :link="photo.link"
    ></gallery-item>
  </ul>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  components: {
    GalleryItem,
  },
  data() {
    return {
      myPhotos: [{ id: "1", link: "../../../assets/zdj1.jpg" }],
    };
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}

.photos-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  padding: 15rem 0;
  background-image: linear-gradient(329deg, #b9b9b9, #fff, #b9b9b9);

  @media (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
    gap: 13rem;

    width: 100%;
    height: calc(100vh - 7rem);
    padding: 12rem;
    overflow: auto;
  }
}
</style>