<template>
  <div class="month-view">
    <Photo v-for="photo in allPhotos" v-bind:image="photo">
    </Photo>
  </div>
</template>

<script>
import Photo from './Photo.vue'
export default {
  name: 'Month',
  props: {
    allPhotos: Array
  },
  components: {
    Photo
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
  .month-view {
  display:flex;
  }
</style>
