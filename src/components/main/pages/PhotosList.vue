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

.photos {
  display: flex;
  flex-direction: column;

  &__img {
    position: relative;
    width: 25rem;
    height: 25rem;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 200px;
      height: 1px;
      background: #000;
    }

    &::before {
      top: -9%;
      left: -17%;
    }

    &::after {
      top: 21%;
      left: -49%;
      transform: rotate(90deg);
    }
  }

  &__addButton {
    position: relative;
    margin-top: 2rem;
    padding: 0.6rem;
    width: 5rem;
    align-self: flex-end;
    background-color: #000;
    color: #fff;
    border: 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 200px;
      height: 1px;
      background: #000;
    }

    &::before {
      top: 160%;
    left: -205%;
    }

    &::after {
      top: -140%;
    left: -45%;
      transform: rotate(90deg);
    }

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}

.img {
  width: 100%;
  height: 100%;
}
</style>