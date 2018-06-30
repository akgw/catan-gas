<template>
  <div>
    <img :src=panelPath>
    <span v-if="panelNameList.length > 0">
      <button v-on:click="changePanelImage">次</button>
    </span>
  </div>
</template>

<script lang="ts">
  import {ImagesPath} from '../infrastructure/Images';

  export default {
    methods: {
      changePanelImage(){
        if (this.panelNameList.length <= 0) {
          return;
        }
        this.panelPath = ImagesPath.panel(this.panelNameList.pop());
      }
    },
    data: () => {
      return {
        panelPath: "",
        panelNameList: ["forest","desert", "field", "hill", "mountains", "pasture"],
      }
    }
  }
</script>

<style scoped>
</style>
