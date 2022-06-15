<template>
  <Teleport to="body">
    <dialog open>
      <article class="modal-container">
        <h1 class="modal-container__header">Warning!</h1>
        <p class="modal-container__text">Are you sure you wont to leave?</p>
        <p class="modal-container__text">your data will be deleted!</p>

        <div class="modal-container__buttons">
          <slot></slot>
        </div>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 75%;
  padding: 20px;
  background-color: #d5d5d5;
  border: 0;

  @media (min-width: 768px) {
    max-width: 400px;
  }
}

.modal-container {
  &__header {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  &__text {
    font-size: 1.4rem;
    line-height: 1.5;
  }

  &__buttons {
    margin-top: 10px;
    text-align: end;
  }
}
</style>