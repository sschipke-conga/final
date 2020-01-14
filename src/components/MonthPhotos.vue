<template>
  <div class="hello">
    <h1>Now you see me!</h1>
  </div>
</template>

<script>
export default {
  name: 'Month View',
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
