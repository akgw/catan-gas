<template>
  <div>
    <span v-for="(landPosition, key) in landsPosition">
      <land-component v-if="$store.getters.landsById(key).land === '1'"
                      :color=playerNumberToColor[$store.getters.landsById(key).player]
                      :top=landPosition.top
                      :left=landPosition.left>
      </land-component>
      <city-component v-if="$store.getters.landsById(key).land === '2'"
                      :color=playerNumberToColor[$store.getters.landsById(key).player]
                      :top=landPosition.top
                      :left=landPosition.left>
      </city-component>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Land from './partials/land.vue';
  import City from './partials/city.vue';
  import {landsPosition, playerNumberToColor} from '../config/constants';

  Vue.component('land-component', Land);
  Vue.component('city-component', City);

  export default {
    async created() {
      await this.$store.dispatch("fetchLands");
    },
    data :() => {
      return {
        landsPosition: landsPosition,
        playerNumberToColor: playerNumberToColor
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
