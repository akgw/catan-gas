<template>
  <div>
    <span v-for="(roadPosition, key) in roadsPosition"  @click="changeColor">
      <road-component :color=selectColor(roadsPositionStatus[key])
                      :top=roadPosition.top
                      :left=roadPosition.left
                      :rotate=roadPosition.rotate>
      </road-component>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Road from './partials/road.vue';
  import { roadsPosition, playerNumberToColor } from '../config/constants';

  Vue.component('road-component', Road);

  export default {
    created() {
      this.roadsPositionStatus[10] = 3;
    },

    methods: {
      changeColor() {
        this.color = "red";
      },
      selectColor(playerNumber: number) {
        return playerNumberToColor[playerNumber] || "";
      }
    },

    data: () => {
      return {
        color: "",
        roadsPosition: roadsPosition,
        roadsPositionStatus: new Array(73),
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
