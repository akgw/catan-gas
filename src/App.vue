<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    created() {
      this.$router.push('/');
    }
  }
</script>

<style scoped>

</style>