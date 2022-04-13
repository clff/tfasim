<script setup>
import feesService from "./feesService";

const model = feesService.state.feesModel;
</script>

<template>
  <div class="results-container">
    <h2>הסכם שכר טירחה</h2>
    <div><span>שנערך ונחתם ביום:</span></div>
    <div>
      <span>בין:</span>
      <span>{{ model.client.firstName }} {{ model.client.lastName }}</span>
      <span>(להלן: ביחד ולחוד ״הלקוח״)</span>
      <span>מצד אחד</span>
    </div>
    <div>
      <span>לבין:</span>
      <span>{{ model.lawyer.firstName }} {{ model.lawyer.lastName }}</span>
      <span>(להלן: ״עוה״ד״)</span>
      <span>מצד שני</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.results-container {
  height: 500px;
  width: 500px;
  border: 1px solid var(--fw-black);
  border-radius: 10px;
}
</style>