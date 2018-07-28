<template>
  <div>
    <div :style="style">開</div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'color',
      'top',
      'left',
    ],
    computed: {
      style() {
        return 'width: 30px; height: 30px; position: absolute; '
          + 'background: ' + this.color + '; '
          + 'top: ' + this.top + 'px; '
          + 'left: ' + this.left + 'px; '
          + 'text-align: center;'
          + 'line-height: 30px;'
          + 'border: double black;';
      }
    }
  }
</script>

<style scoped>
</style>
