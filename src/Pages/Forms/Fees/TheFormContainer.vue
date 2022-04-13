<script setup>
import TheForm from "./TheForm";
import TheResults from "./TheResults";
</script>

<template>
  <div class="form-container">
    <div class="form-wrapper">
      <TheForm />
    </div>
    <div class="results-wrapper">
      <TheResults />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  margin-top: var(--fw-44);
  display: grid;
  grid-template-columns: 500px 500px;
  column-gap: var(--fw-56);
  justify-content: center;
}
</style>