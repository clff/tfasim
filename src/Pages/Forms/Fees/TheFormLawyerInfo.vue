<script setup>
import feesService from "./feesService";

const model = feesService.state.feesModel;

const previousStep = () => {
  feesService.methods.previousStep();
};

const nextStep = () => {
  feesService.methods.nextStep();
};
</script>

<template>
  <div class="client-container">
    <div class="client-wrapper">
      <h1>lawyer info</h1>
      <FormInput labelText="שם פרטי" v-model="model.lawyer.firstName" />
      <FormInput labelText="שם משפחה" v-model="model.lawyer.lastName" />
    </div>
    <div>
      <Button text="המשך" @action="nextStep" />
      <Button text="הקודם" @action="previousStep" />
    </div>
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