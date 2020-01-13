<template>
  <div id="app">
    <TodaysPhoto v-bind:image="this.currentPhoto"></TodaysPhoto>
  </div>
</template>

<script>
import TodaysPhoto from './components/TodaysPhoto.vue'
import {getTodaysPhoto} from './util/apiCalls'

export default {
  name: 'app',
  components: {
    TodaysPhoto
  },
  data() {
    return {
    currentPhoto: null
    }
  },
  mounted() {
  console.log('mounted!')
    getTodaysPhoto()
    .then(res => this.currentPhoto = res)
    .catch(err => console.error('Error fetching current photo:', err))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
