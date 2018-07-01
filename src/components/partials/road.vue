<template>
  <div>
    <div :style="style"></div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'color',
      'top',
      'left',
      'rotate'
    ],
    computed: {
      style() {
        return 'width: 10px; height: 80px; position: absolute; '
          + 'background: ' + this.color + '; '
          + 'top: ' + this.top + 'px; '
          + 'left: ' + this.left + 'px; '
        + 'transform: rotate(' + this.rotate + 'deg);';
      }
    }
  }
</script>

<style scoped>
</style>
