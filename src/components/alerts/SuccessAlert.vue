<template>
  <Teleport to="body">
    <dialog open>
      <article class="modal-container">
        <h1 class="modal-container__header">{{$t("success.header")}}</h1>
        <p class="modal-container__text">{{$t("success.description")}}</p>
        <slot></slot>
      </article>
    </dialog>
  </Teleport>
</template>

<style lang="scss" scoped>
dialog {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  padding: 2rem 0;
  background-color: var(--modal-bg);
  border-radius: 2.5rem;
  border: 0;
  box-shadow: 0 0 10rem rgba(0, 0, 0, 0.7);
  animation: elementAnimation;
  animation-duration: 0.2s;
}

.modal-container {
  text-align: center;
  &__header {
    font-size: 2.8rem;
    color: var(--success-txt);
  }

  &__text {
    margin-top: 1rem;
    font-size: 1.3rem;
  }
}
</style>