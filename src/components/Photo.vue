<template>
  <div class="photo">
    <h2>{{ image.title }}</h2>
    <img v-bind:src="image.hdurl" alt="astronomy">
    <h2>{{image.date}}</h2>
    <button v-on:click="selectCurrentPhoto">Select</button>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    image: Object
  },
  methods: {
  selectCurrentPhoto(event) {
    this.$emit('selectPhoto', event)
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 35px;
  height: 60vh;
  width: 20%;
  }
  h2 {
  height: 70px;
  width: 100%;
  }
img {
  height: 20vh;
  width: 20vh;
  }
</style>
