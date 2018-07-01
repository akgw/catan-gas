<template>
  <div>
    <panels-component></panels-component>
    <sea-panel-component></sea-panel-component>
    <loads-component></loads-component>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Panels from '../components/panels.vue';
  import SeaPanel from '../components/seaPanel.vue';
  import Loads from '../components/roads.vue';

  Vue.component('panels-component', Panels);
  Vue.component('sea-panel-component', SeaPanel);
  Vue.component('loads-component', Loads);
  export default {}
</script>

<style scoped>
</style>
