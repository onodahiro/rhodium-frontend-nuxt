<template>
  <div class="main-page">
    <div class="main-page__bg" />
    <div class="main-page__welcome">
      <CText
        text="Welcome"
        class-name="welcome-text c-text-gradient"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .main-page {
    position: relative;
    height: calc(100vh - 64px);
    overflow: hidden;

    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -40vh;
      filter: blur(30vh);
      opacity: .8;
      background: $main-bg;
    }

    &__welcome {
      display: flex;
      justify-content: center;
    }
  }
</style>
