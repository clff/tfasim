<script setup>
import feesService from "./feesService";

const model = feesService.state.feesModel;
</script>

<template>
  <div class="client-container">
    <h1>client info</h1>
    <FormInput labelText="שם פרטי" v-model="model.lawyer.firstName" />
    <FormInput labelText="שם משפחה" v-model="model.lawyer.lastName" />
  </div>
</template>

<style scoped lang='scss'>
.client-container {
  height: auto;
  width: 100%;
  border: 1px solid var(--fw-black);
  border-radius: 10px;
}
</style>