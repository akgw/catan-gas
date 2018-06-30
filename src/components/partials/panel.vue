<template>
  <div>
    <img :src=panelPath>
  </div>
</template>

<script lang="ts">
  import {ImagesPath} from '../../infrastructure/Images';

  export default {
    props: ['panelName'],

    computed: {
      panelPath() {
        console.log(this.panelName);
        return ImagesPath.panel(this.panelName)
      }
    }
  }
</script>

<style scoped>
</style>
