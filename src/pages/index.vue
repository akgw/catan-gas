<template>
  <div>
    <panels-component></panels-component>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Panels from '../components/panels.vue';

  Vue.component('panels-component', Panels);
  export default {}
</script>

<style scoped>
</style>
