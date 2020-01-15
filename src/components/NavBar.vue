<template>
  <nav class="nav-bar">
  <h1> Star Date: {{this.currentDate}} </h1>
    <div class="nav_buttons">
      <button v-on:click="changeToToday" class="nav-button today-photo">Todays Photo</button>
      <button v-on:click="changeToMonth" class="nav_button month-photos">This Month</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
  return { 
    currentDate: this.getCurrentDate()
    }
  },
  props: {
    image: Object,
    monthView: Boolean
  },
  methods: {
  getCurrentDate() {
  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let m = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  return `${m}/${day}/${year}`;
  },
  changeToMonth (event) {
  console.log(this.props)
    this.$emit('changeView', 'month')
    },
  changeToToday(event) {
    this.$emit('changeView', 'today')
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar {
  background: AliceBlue;
  border: 5px solid AliceBlue;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  }
  h1 { 
  margin-left: 10px;
  }
  h1, button {
  background: AliceBlue;
  }
  .nav_buttons { 
  background: AliceBlue;
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
