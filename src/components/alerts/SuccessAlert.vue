<template>
  <Teleport to="body">
    <dialog open>
      <article class="modal-container">
        <h1 class="modal-container__header">{{$t("succes.header")}}</h1>
        <p class="modal-container__text">{{$t("succes.description")}}</p>
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
  width: 200px;
  padding: 20px 0;
  background-color: var(--modal-bg);
  border-radius: 25px;
  border: 0;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.7);
  animation: elementAnimation;
  animation-duration: 0.2s;
}

.modal-container {
  text-align: center;
  &__header {
    font-size: 2.8rem;
    color: var(--succes-txt);
  }

  &__text {
    margin-top: 10px;
    font-size: 1.3rem;
  }
}
</style>