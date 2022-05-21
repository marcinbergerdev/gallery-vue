<template>
  <li class="link">Natur</li>
  <li class="link">Random</li>
  <li class="link">Dogs</li>
  <li class="link">Cats</li>
  <li class="link">Fruits</li>
  <li class="link">Coctails</li>
</template>

<script>
export default {};
</script>

<style lang="scss">
.link {
  padding: 10px;
  font-size: 2rem;
  list-style: none;
  color: #fff;

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