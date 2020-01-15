<template>
  <div id="app">
    <NavBar v-bind:monthView="this.monthView" @changeView="this.changeView"></NavBar>
    <TodaysPhoto  v-bind:image="this.currentPhoto" v-if="!this.monthView"></TodaysPhoto>
    <MonthPhotos v-bind:allPhotos="this.allPhotos" @selectCurrentPhoto="selectCurrentPhoto" v-if="this.monthView"></MonthPhotos>
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
    changeView(value) {
    if(value === 'month') {
    this.monthView = true
    }
    else { 
    this.currentPhoto = this.allPhotos[this.allPhotos.length -1]
    this.monthView = false;
    }
  },
  selectCurrentPhoto(event) {
    this.monthView = false
    this. currentPhoto=this.allPhotos[event.target.parentNode.dataset.index]
  }
},
  mounted() {
    getMonthPhotos()
    .then(res => this.allPhotos = res)
    .then(res => this.currentPhoto=this.allPhotos.slice(-1)[0])
    .catch(err => console.error('Error fetching all photos:', err))
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin:0;
    padding:0;
    background-color: #878787;
    color: #565656;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
}
</style>
