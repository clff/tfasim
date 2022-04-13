<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["action"]);

const action = () => {
  emit("action");
};
</script>

<template>
  <button @click="action">{{ text }}</button>
</template>

<style scoped lang='scss'>
button {
  cursor: pointer;
  padding: var(--fw-2) var(--fw-5);
  border: 1px solid var(--fw-gray-700);
  border-radius: 10px;
}
</style>