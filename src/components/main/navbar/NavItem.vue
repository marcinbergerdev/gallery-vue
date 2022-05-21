<template>
  <a class='link' href="#"> {{ name }}</a>
</template>

<script>
export default {
props: {
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}
};
</script>

<style lang="scss" scoped>
.link {
  display: block;
  padding: 10px;
  font-size: 2rem;
  list-style: none;
  color: #fff;
  text-decoration: none;

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