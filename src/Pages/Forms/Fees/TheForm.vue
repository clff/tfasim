<script setup>
import { computed } from "vue";
import feesService from "./feesService";
import TheFormClientInfo from "./TheFormClientInfo";
import TheFormLawyerInfo from "./TheFormLawyerInfo";

let currentStep = feesService.methods.currentStep;

const currentComponent = computed(() => {
  switch (currentStep.value) {
    case "clientInfo":
      return TheFormClientInfo;
    case "lawyerInfo":
      return TheFormLawyerInfo;
    default:
      return TheFormClientInfo;
  }
});
</script>

<template>
  <div class="">
    <component :is="currentComponent" />
  </div>
</template>

<style scoped lang='scss'>
</style>