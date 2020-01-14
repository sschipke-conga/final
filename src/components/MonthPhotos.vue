<template>
  <div class="month-view">
    <Photo v-for="(photo, index) in allPhotos" :data-index="index" v-bind:image="photo" @selectPhoto="selectPhoto">
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
    selectPhoto(photo) {
    this.$emit('selectCurrentPhoto', photo)
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
