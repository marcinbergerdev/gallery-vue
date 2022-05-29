<template>
  <ul class="photos-list">
    <photos-item
      v-for="photo in newPhotos"
      :key="photo.id"
      :id="photo.id"
      :link="photo.url"
    ></photos-item>
  </ul>
</template>

<script>
import PhotosItem from "./PhotosItem.vue";
import axios from "axios";

export default {
  components: {
    PhotosItem,
  },
  props: ["category"],
  inject: ["menuLinks"],
  data() {
    return {
      numberOfPhotos: 10,
      newPhotos: [],
    };
  },
  methods: {
    getPhotos() {
      const defaultPhotosList = {
        id: "m1",
        url: "https://picsum.photos/200/300",
      };

      this.getPhotosList(defaultPhotosList);
    },

    getPhotosList({ id, url }) {
      this.newPhotos = [];

      //GET API
      for (let i = 0; i < this.numberOfPhotos; i++) {
        if (this.newPhotos.length === 0) {
          axios.get(url).then((res) => {
            this.convertPhotos(id, res);
          });
        }
      }
    },

    convertPhotos(id, res) {
      let photos = {};
      photos = {
        id: "",
        url: "",
      };

      if (id === "m1") {
        photos.id = res.headers["picsum-id"];
        photos.url = res.request.responseURL;
      } else if (id === "m2") {
        photos.id = id;
        photos.url = res.data.message;
      } else if (id === "m3") {
        photos.id = res.data[0].id;
        photos.url = res.data[0].url;
      } else if (id === "m4") {
        photos.id = id;
        photos.url = res.data.image;
      } else if (id === "m5") {
        photos.id = id;
        photos.url = res.data.image;
      }
      this.newPhotos.push(photos);
    },
  },
  watch: {
    category(value) {
      if (this.newPhotos.length !== this.numberOfPhotos) {
        return;
      } else {
        const selectedOption = this.menuLinks.find(
          (option) => option.linkName === value
        );
        const photos = {
          id: selectedOption.id,
          url: selectedOption.url,
        };
        this.getPhotosList(photos);
      }
    },

    $route(value) {
      if (value.href === "/home" || value.href === '/home/user') {
        this.getPhotos();
      }
    },
  },

  created() {
    this.getPhotos();
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