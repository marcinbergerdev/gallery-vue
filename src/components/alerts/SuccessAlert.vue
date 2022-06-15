<template>
  <Teleport to="body">
    <dialog open>
      <article class="modal-container">
        <h1 class="modal-container__header">Succes!</h1>
        <p class="modal-container__text">Account successfully created</p>
        <slot></slot>
      </article>
    </dialog>
  </Teleport>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
dialog {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  padding: 10px 0;
  background-color: #d5d5d5;
  border-radius: 25px;
  border: 0;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.7);
  animation: elementAnimation;
  animation-duration: .2s;
}

.modal-container {
  text-align: center;
  &__header {
    font-size: 2.8rem;
    color: #0ca433;
  }

  &__text {
    margin-top: 10px;
    font-size: 1.3rem;
  }
}
</style>