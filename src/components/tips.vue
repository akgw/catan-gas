<template>
  <div>
    <span v-for="(number, positionId) in tipsPosition">
      <tip-component v-if="tipsPositionIdToPosition[positionId+1] !== undefined"
                     :number=number
                     :stars=tipsStars[number]
                     :top=tipsPositionIdToPosition[positionId+1].top
                     :left=tipsPositionIdToPosition[positionId+1].left>
      </tip-component>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tip from './partials/tip.vue';
  import {tipsPositionIdToPosition, tipStars} from '../config/constants';

  Vue.component('tip-component', Tip);

  export default {
    computed: {
      tipsPosition() {
        return this.$store.getters.tips;
      }
    },
    data :() => {
      return {
        tipsPositionIdToPosition: tipsPositionIdToPosition,
        tipsStars: tipStars
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
