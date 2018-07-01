<template>
  <div>
    <ul>
      <li v-for="name in panelsName.slice(0, 3)">
        <panel-component :panelName=name></panel-component>
      </li>
    </ul>
    <ul>
      <li v-for="name in panelsName.slice(3, 7)">
        <panel-component :panelName=name></panel-component>
      </li>
    </ul>
    <ul>
      <li v-for="name in panelsName.slice(7, 12)">
        <panel-component :panelName=name></panel-component>
      </li>
    </ul>
    <ul>
      <li v-for="name in panelsName.slice(12, 16)">
        <panel-component :panelName=name></panel-component>
      </li>
    </ul>
    <ul>
      <li v-for="name in panelsName.slice(16, 20)">
        <panel-component :panelName=name></panel-component>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Panel from './partials/panel.vue';

  Vue.component('panel-component', Panel);

  export default {
    computed: {
      panelsName() {
        return this.$store.getters.panels
      }
    },
    async created() {
      await this.$store.dispatch("fetchPanels");
      console.log(this.$store.getters.panels);
    },
  }
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

  ul:nth-child(1) {
    top: 30px;
  }
  ul:nth-child(2) {
    top: -10px;
  }
  ul:nth-child(3) {
    top: -50px;
  }
  ul:nth-child(4) {
    top: -90px;
  }
  ul:nth-child(5) {
    top: -130px;
  }

  li {
    display: inline-block;
  }
</style>
