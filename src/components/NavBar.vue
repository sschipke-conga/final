<template>
  <nav class="nav-bar">
    <div class="nav_buttons">
      <button v-on:click="changeToToday" class="nav-button today-photo">Todays Photo</button>
      <button v-on:click="changeToMonth" class="nav_button month-photos">This Month</button>
    </div>
    <div class="search-by-date">
      <input type="date">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    image: Object,
    monthView: Boolean
  },
  methods: {
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
  nav {
  display: flex;
  justify-content: space-between;
  }
</style>
