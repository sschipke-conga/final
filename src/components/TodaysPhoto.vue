<template>
  <div class="current-photo">
    <div class="div-description">
    <h1>{{ image.title }}</h1>
      <p>{{image.explanation}}</p>
    <h2>{{image.date}}</h2>
    </div>
      <img v-bind:src="image.hdurl" alt="astronomy">
  </div>
</template>

<script>
export default {
  name: 'Current Photo',
  props: {
    image: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current-photo {
  display: flex;
  height: 100%;
  width: 100vw;
  }
.div-description {
  background: AliceBlue;
  border: 5px solid AliceBlue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 80vh;
  width: 50vw;
  }
img {
  height: 80vh;
  width: 50vw;
  }
  p, h1, h2 {
  background: AliceBlue;
  }
  p {
  padding: 10px;
  }
</style>
