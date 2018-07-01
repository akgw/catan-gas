<template>
  <div class="background">
    <div class="trade-forest">
      <p>🌴</p>
      <p>2:1</p>
    </div>
    <div class="trade-pasture">
      <p>🐑</p>
      <p>2:1</p>
    </div>
    <div class="trade-field">
      <p>🌾</p>
      <p>2:1</p>
    </div>
    <div class="trade-mountains">
      <p>🏔</p>
      <p>2:1</p>
    </div>
    <div class="trade-hill">
      <p>🏾</p>
      <p>2:1</p>
    </div>
    <span>
      <div v-for="i in 4" class="trade-3-1">
        <p></p>
        <p>3:1</p>
      </div>
    </span>
    <span>
      <div v-for="i in 18" class="bridge"></div>
    </span>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Panel from './partials/panel.vue';

  Vue.component('panel-component', Panel);

  export default {}
</script>

<style lang="css" scoped>
  .background {
    position: absolute;
    top: 0;
    left:0;
    height: 100vmax;
    width: 100%;
    background: darkblue;
    z-index: -1;
  }

  p {
    background-color: white;
    margin: 0;
  }

  .trade-forest {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 640px;
    left: 755px;
    z-index: 1;
  }

  .trade-pasture {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 750px;
    z-index: 1;
  }

  .trade-field {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 430px;
    left: 385px;
    z-index: 1;
  }

  .trade-mountains {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 200px;
    left: 380px;
    z-index: 1;
  }


  .trade-hill {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 530px;
    left: 960px;
    z-index: 1;
  }

  .trade-3-1:nth-child(1) {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 20px;
    left: 500px;
    z-index: 1;
  }

  .trade-3-1:nth-child(2) {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 640px;
    left: 520px;
    z-index: 1;
  }

  .trade-3-1:nth-child(3) {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 330px;
    left: 1070px;
    z-index: 1;
  }

  .trade-3-1:nth-child(4) {
    width: 35px;
    text-align: center;
    position: absolute;
    top: 130px;
    left: 960px;
    z-index: 1;
  }

  .bridge:nth-child(1) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 50px;
    left: 515px;
    transform: rotate(-20deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(2) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 17px;
    left: 566px;
    transform: rotate(-62deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(3) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 43px;
    left: 779px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(3) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 43px;
    left: 779px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(4) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 18px;
    left: 734px;
    transform: rotate(57deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(5) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 160px;
    left: 979px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(6) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 132px;
    left: 934px;
    transform: rotate(63deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(7) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 297px;
    left: 1060px;
    transform: rotate(-55deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(8) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 348px;
    left: 1059px;
    transform: rotate(63deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(9) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 486px;
    left: 979px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(10) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 515px;
    left: 934px;
    transform: rotate(-50deg);
    background-color: sandybrown;
  }


  .bridge:nth-child(11) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 598px;
    left: 782px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(12) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 624px;
    left: 734px;
    transform: rotate(-55deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(13) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 600px;
    left: 524px;
    transform: rotate(0deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(14) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 625px;
    left: 577px;
    transform: rotate(57deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(15) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 469px;
    left: 440px;
    transform: rotate(-90deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(16) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 405px;
    left: 441px;
    transform: rotate(-109deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(17) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 183px;
    left: 438px;
    transform: rotate(-109deg);
    background-color: sandybrown;
  }

  .bridge:nth-child(18) {
    width: 5px;
    height: 30px;
    position: absolute;
    top: 236px;
    left: 442px;
    transform: rotate(-60deg);
    background-color: sandybrown;
  }


</style>
