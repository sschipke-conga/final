<template>
  <div id="app">
    <div class="div-loading-img" v-if="this.isLoading">
      <img class="loading-img" src="./assets/giphy.gif" alt="rolling space clouds" />
    </div>
    <NavBar v-if="!this.isLoading" v-bind:monthView="this.monthView" @changeView="this.changeView"></NavBar>
    
    <TodaysPhoto  v-bind:image="this.currentPhoto" v-if="!this.isLoading && !this.monthView"></TodaysPhoto>
    <MonthPhotos v-bind:allPhotos="this.allPhotos" @selectCurrentPhoto="selectCurrentPhoto" v-if="!this.isLoading && this.monthView"></MonthPhotos>
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
    monthView: false,
    isLoading: true
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
    .then(res => {this.allPhotos = res
      this.currentPhoto=this.allPhotos.slice(-1)[0]
      this.isLoading = false;
      })
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
.div-loading-img {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  }
  .loading-img {
  margin-top: 10%;
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
