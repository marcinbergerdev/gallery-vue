<template>
  <ul class="photos-list">
    <!-- <page-item></page-item> -->
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj1.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj2.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj3.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj4.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj5.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj6.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj8.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
    <li>
      <article class="photos">
        <div class="photos__img">
          <img class="img" src="../../../assets/zdj9.jpg" alt="" />
        </div>
        <button class="photos__addButton">Add</button>
      </article>
    </li>
  </ul>
</template>

<script>
// import PageItem from "./PagesItem.vue";

export default {
  components: {
    // PageItem,
  },
};
</script>

<style lang="scss">
.photos-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px;

  padding-top: 100px;
  background-image: linear-gradient(329deg, #b9b9b9, #fff, #b9b9b9);

  @media (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
    gap: 130px;

    width: 100%;
    height: calc(100vh - 70px);
    padding: 150px;
    overflow: auto;
  }
}

.photos {
  &__img {
    width: 250px;
    height: 250px;
  }

  &__addButton {
  }
}

.img {
  width: 100%;
  height: 100%;
}
</style>