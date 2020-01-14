<template>
  <div class="photo">
    <h1>{{ image.title }}</h1>
    <img v-bind:src="image.hdurl" alt="astronomy">
    <h2>{{image.date}}</h2>
    <button :data-index="$attrs.data-index" v-on:click="selectCurrentPhoto">Select</button>
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
img {
  height: 20vh;
  width: 20vh;
  }
</style>
