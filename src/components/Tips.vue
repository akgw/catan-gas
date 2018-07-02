<template>
  <div>
    <span v-for="(positionId, number) in tipsPosition">
      <tip-component :number=number
                     :stars=tipsStars[number]
                     :top=tipsPositionIdToPosition[positionId].top
                     :left=tipsPositionIdToPosition[positionId].left>
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
    created() {
      // todo データをvuexから取得してくる
      this.tipsPosition = {
        2: 1,
        3: 10
      }
    },

    data :() => {
      return {
        tipsPosition: [],
        tipsPositionIdToPosition: tipsPositionIdToPosition,
        tipsStars: tipStars
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
