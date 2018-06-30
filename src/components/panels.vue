<template>
  <div>
    <ul>
      <li><panel-component panelName="forest"></panel-component></li>
      <li><panel-component panelName="hill"></panel-component></li>
      <li><panel-component panelName="desert"></panel-component></li>
    </ul>
    <ul>
      <li><panel-component panelName="forest"></panel-component></li>
      <li><panel-component panelName="hill"></panel-component></li>
      <li><panel-component panelName="desert"></panel-component></li>
      <li><panel-component panelName="mountains"></panel-component></li>
    </ul>
    <ul>
      <li><panel-component panelName="forest"></panel-component></li>
      <li><panel-component panelName="hill"></panel-component></li>
      <li><panel-component panelName="desert"></panel-component></li>
      <li><panel-component panelName="mountains"></panel-component></li>
      <li><panel-component panelName="field"></panel-component></li>
    </ul>
    <ul>
      <li><panel-component panelName="forest"></panel-component></li>
      <li><panel-component panelName="hill"></panel-component></li>
      <li><panel-component panelName="desert"></panel-component></li>
      <li><panel-component panelName="mountains"></panel-component></li>
    </ul>
    <ul>
      <li><panel-component panelName="forest"></panel-component></li>
      <li><panel-component panelName="hill"></panel-component></li>
      <li><panel-component panelName="desert"></panel-component></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Panel from './partials/panel.vue';

  Vue.component('panel-component', Panel);

  export default {}
</script>

<style lang="css" scoped>
  div {
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    position: relative;
  }

  ul:nth-child(2) {
    top: -40px;
  }
  ul:nth-child(3) {
    top: -80px;
  }
  ul:nth-child(4) {
    top: -120px;
  }
  ul:nth-child(5) {
    top: -160px;
  }

  li {
    display: inline-block;
  }
</style>
