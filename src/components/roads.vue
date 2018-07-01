<template>
  <div>
    <span v-for="(roadPosition, key) in roadsPosition">
      <road-component :color=selectColor($store.getters.roads[key])
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
    async created() {
      await this.$store.dispatch("fetchRoads");
      //
      // console.log("aaa", this.$store.getters.roads);
      // this.roadsPositionStatus = this.$store.getters.roads;
    },

    methods: {
      selectColor(playerNumber: number) {
        return playerNumberToColor[playerNumber] || "";
      }
    },

    data: () => {
      return {
        roadsPosition: roadsPosition,
        roadsPositionStatus: new Array(73),
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
