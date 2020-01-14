<template>
  <div class="photo">
    <h1>{{ image.title }}</h1>
    <img v-bind:src="image.hdurl" alt="astronomy">
    <h2>{{image.date}}</h2>
    <button>Select</button>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    image: Object
  },
  methods: {
  tester: async e => {
  e.preventDefault()
    alert(`It worked! name: ${e.target}!`)
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
