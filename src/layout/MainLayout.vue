<script setup>
</script>

<template>
  <div class="main-layout">
    <div class="side-nav-wrapper"></div>
    <div class="slot-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  .slot-wrapper {
    margin-right: 250px;
  }
}
</style>
