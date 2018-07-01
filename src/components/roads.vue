<template>
  <div>
    <span v-for="roadPosition in roadsPosition"  @click="changeColor">
      <road-component :color=color
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
  import { roadsPosition } from '../config/constants';

  Vue.component('road-component', Road);

  export default {
    methods: {
      changeColor() {
        this.color = "red";
      }
    },
    data: () => {
      return {
        color: "yellow",
//        colorList: new Array(71),
        roadsPosition: roadsPosition
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
