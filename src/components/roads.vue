<template>
  <div>
    <span v-for="(roadPosition, key) in roadsPosition" @click="updateRoad(key)">
      <road-component :color=playerNumberToColor[roadsPositionStatus[key]]
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
    computed: {
      roadsPositionStatus() {
        return this.$store.getters.roads
      }
    },
    async created() {
      await this.$store.dispatch("fetchRoads");
    },

    methods: {
      async updateRoad(key: string) {
        const playerNumber = 1;
        await this.$store.dispatch("updateRoad", {
          position: Number(key),
          playerNumber: playerNumber
        });

        // 算出プロパティが実行されないため、spliceを実行
        this.$store.getters.roads.splice(Number(key), 1, playerNumber);
      },
    },

    data: () => {
      return {
        roadsPosition: roadsPosition,
        playerNumberToColor: playerNumberToColor
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
