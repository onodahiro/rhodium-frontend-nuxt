<template>
  <div class="main-page">
    <div class="main-page__bg" />
    <div class="main-page__welcome">
      <CText> Welcome </CText>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Index',
}
</script>

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
      // background: linear-gradient(45deg, #00dc82, #36e4da 50%, #0047e1); // original
      background: linear-gradient(257deg, #00dc8263, #36e4da75 50%, #0047e180);
    }

    &__welcome {
      display: flex;
      justify-content: center;
    }
  }
</style>
