<template>
  <li>
    <button href="#" class="link" @click="getPhotos(apiData)">{{ name }}</button>
  </li>
</template>

<script>

export default {
  inject: ['getPhotos'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    apiData(){
      return {id: this.id, url: this.url}
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  padding: 10px;
  font-size: 2rem;
  list-style: none;
  color: #fff;
  background-color: transparent;

  @media (orientation: landscape) {
    padding: 5px;
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    font-size: 1.7rem;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>