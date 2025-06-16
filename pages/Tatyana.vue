<template>
  <div class="go-page">
    <img
      class="cat"
      src="assets/images/cat3.gif"
      alt="My Image"
    >
    <img
      class="cat2"
      src="assets/images/cat-no-bg-preview.png"
      alt="My Image"
    >
    <div class="section-first">
      <CText
        text="Понедельник это не надолго &#128512;"
        class="go-page--text__1"
      />
      <CText
        text="$$ Хорошего дня $#"
        class="go-page--text__2"
      />
    </div>
    <div class="section-second">
      <CText
        text="Татьяна, пойдем гулять))"
        class="go-page--text__3"
      />
    </div>
    <div class="section-third">
      <CText
        text="&#128165; Ты со всем справишься :) &#128165;"
        class="go-page--text__4"
      />
      <CText
        text="Выйти на улицу сложно, но возможно !"
        class="go-page--text__5"
      />
    </div>
    <CText
      text="Лучшая &#10024;"
      class="go-page--text__6"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tatyana',
}
</script>

1
<style lang="scss">
.go-page {
  background: linear-gradient(300deg, rgba(255, 255, 255, 0.388), rgba(255, 255, 255, 0.459) 50%, rgba(43, 155, 127, 0.623));
  height: calc(100vh - 64px);
  opacity: .8;
}

.cat {
  z-index: 2;
  position: absolute;
  bottom: -50px;
  right: 0;
}

.cat2 {
  z-index: -1;
  position: absolute;
  transform: translate(44%, 39%) rotate(-18deg);
}

.section-first {
  height: 20%;
  display: flex;
  justify-content: space-between;
}

.go-page--text__1 {
  font-size: 20px;
  color: cornflowerblue;
  transform: translate(15%, 30%);
}

.go-page--text__2 {
  font-size: 20px;
  color: purple;
  transform: translate(-200%, 100%);
}
.section-second {
  display: flex;
  justify-content: center;
}

.go-page--text__3 {
  padding: 70px 0;
  font-size: 60px;
  color: #df1717;
}

.section-third {
  height: 20%;
  display: flex;
  justify-content: space-between;
}

.go-page--text__4 {
  font-size: 20px;
  color: #cb32cb;
  transform: translate(45%, 0%);
}

.go-page--text__5 {
  font-size: 20px;
  color: green;
  transform: translate(-200%, 100%);
}

.go-page--text__6 {
  font-size: 20px;
  color: #006d80;
  display: block;
  margin-left: 30%;
  margin-top: 4%;
}
</style>
