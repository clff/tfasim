<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  forAttr: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "var(--fw-text-sm)",
  },
});
</script>

<template>
  <label :for="forAttr">{{ text }}</label>
</template>

<style lang="scss" scoped>
label {
  color: #02234966;
  font-size: v-bind(fontSize);
  margin-bottom: var(--fw-1);
  padding-right: var(--fw-1);

  &:empty {
    display: none;
  }
}
</style>
