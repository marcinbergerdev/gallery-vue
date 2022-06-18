<template>
  <Teleport to="body">
    <dialog open>
      <article class="modal-container">
        <h1 class="modal-container__header">{{$t("error.header")}}</h1>
        <p class="modal-container__text">{{$t("error.descriptionOne")}}</p>
        <p class="modal-container__text">{{$t("error.descriptionTwo")}}</p>

        <div class="modal-container__buttons">
          <slot></slot>
        </div>
      </article>
    </dialog>
  </Teleport>
</template>

<style lang="scss" scoped>
dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 75%;
  padding: 20px;
  background-color: var(--modal-bg);
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