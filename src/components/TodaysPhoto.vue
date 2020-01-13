<template>
  <div class="hello">
    <h1>{{ image.title }}</h1>
    <img v-bind:src="image.hdurl">
    <h2>{{image.date}}</h2>
    <p>{{image.explanation}}</p>
  </div>
</template>

<script>
export default {
  name: 'Testing',
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
  height: 70vh;
  width: 70vh;
  }
</style>
