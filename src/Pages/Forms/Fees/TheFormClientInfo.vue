<script setup>
import feesService from "./feesService";

const model = feesService.state.feesModel;
</script>

<template>
  <div class="client-container">
    <h1>client info</h1>
    <FormInput labelText="שם פרטי" v-model="model.client.firstName" />
    <FormInput labelText="שם משפחה" v-model="model.client.lastName" />
  </div>
  <div>
    <Button />
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