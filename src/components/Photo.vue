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
  background: AliceBlue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  height: 60vh;
  width: 30%;
  }
  h2 {
  background: AliceBlue;
  width: 100%;
  }
img {
  height: 35vh;
  margin: 10px 0;
  width: 70%;
  }
  button {
  display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 10px;
    text-decoration: none;
    background: #878787;
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
</style>
