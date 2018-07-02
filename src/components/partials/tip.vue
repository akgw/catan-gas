<template>
  <div>
    <div :style=style>
      <p>{{ number }}</p>
      <p class="star">{{ stars }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'number',
      'stars',
      'top',
      'left'
    ],
    computed: {
      style() {
        return 'background-color: #FFFFBB;'
          + 'width: 35px;'
          + 'text-align: center;'
          + 'position: absolute;'
          + 'border-radius: 50%;'
          + 'top: ' + this.top + 'px;'
          + 'left: ' + this.left + 'px;';
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
  }

  .star {
    font-size: 0.1rem;
    word-wrap: break-word;
    margin-top: -5px;
  }
</style>
