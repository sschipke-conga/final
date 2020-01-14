<template>
  <div id="app">
    <NavBar v-bind:monthView="this.monthView" @click="changeMonthView"></NavBar>
    <TodaysPhoto  v-bind:image="this.currentPhoto" v-if="!this.monthView"></TodaysPhoto>
    <MonthPhotos v-if="this.monthView"></MonthPhotos>
  </div>
</template>

<script>
import TodaysPhoto from './components/TodaysPhoto.vue'
import NavBar from './components/NavBar.vue'
import MonthPhotos from './components/MonthPhotos.vue'
import {getTodaysPhoto, getMonthPhotos} from './util/apiCalls'


export default {
  name: 'app',
  components: {
    NavBar,
    TodaysPhoto,
    MonthPhotos
  },
  data() {
    return {
    currentPhoto: null,
    allPhotos: [],
    monthView: false
    }
  },
  methods: {
    changeMonthView(value) {
    this.monthView = value
  }
},
  mounted() {
  console.log('mounted!')
    getTodaysPhoto()
    .then(res => this.currentPhoto = res)
    .catch(err => console.error('Error fetching current photo:', err))
    getMonthPhotos()
    .then(res => this.allPhotos = res)
    .catch(err => console.error('Error fetching all photos:', err))

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
}
</style>
