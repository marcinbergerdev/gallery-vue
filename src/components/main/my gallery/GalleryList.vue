<template>
  <section>
    <p v-if="emptyList" class="empty-list">your photos list is empty...</p>
    <ul id="myList" class="photos-list">
      <gallery-item
        v-for="photo in myPhotos"
        :key="photo.id"
        :id="photo.id"
        :link="photo.url"
        @deleteSelectedPhoto="photoDelete"
      ></gallery-item>
    </ul>
  </section>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  components: {
    GalleryItem,
  },
  inject: ['myPhotos'],
  methods: {
    photoDelete(id){
      const photoIndex = this.myPhotos.findIndex(photo => photo.id === id);
      this.myPhotos.splice(photoIndex, 1);
    }
  },
  computed: {
    emptyList() {
      return this.myPhotos.length === 0;
    },
  },
  watch: {
    category(newRoute) {
      const scrollToElement = this.$refs["list"];
      const top = scrollToElement.offsetTop;

      window.scrollTo(0, top);
      this.getPhotos(newRoute);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  text-align: center;
}

ul li {
  list-style: none;
}

.empty-list {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
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