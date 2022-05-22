<template>
  <ul class="photos-list">
    <photos-item v-for="photo in photos" :key="photo.id" :id="photo.id" :link="photo.link"></photos-item>
  </ul>
</template>

<script>
import PhotosItem from "./PhotosItem.vue";


export default {
  components: {
    PhotosItem,
  },
  data() {
    return {
      photos: [
        { id: "1", link: "../../../assets/zdj1.jpg" },
        { id: "2", link: "../../../assets/zdj2.jpg" },
        { id: "3", link: "../../../assets/zdj3.jpg" },
        { id: "4", link: "../../../assets/zdj4.jpg" },
        { id: "5", link: "../../../assets/zdj5.jpg" },
        { id: "6", link: "../../../assets/zdj6.jpg" },
        { id: "7", link: "../../../assets/zdj7.jpg" },
        { id: "8", link: "../../../assets/zdj8.jpg" },
      ],
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