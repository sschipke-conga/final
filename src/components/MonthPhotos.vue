<template>
  <div class="month-view">
    <h1>This month's photos</h1>
    <div class="month-photos">
      <Photo v-for="(photo, index) in allPhotos" :data-index="index" v-bind:image="photo" @selectPhoto="selectPhoto">
      </Photo>
    </div>
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
    selectPhoto(photo) {
    this.$emit('selectCurrentPhoto', photo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .month-photos {
  display:flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  }
</style>
