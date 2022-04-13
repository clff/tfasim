<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  labelText: {
    type: String,
    default: "",
  },
  labelFor: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <FormLabel :text="labelText" :for="labelFor" />

    <input
      type="text"
      name=""
      id=""
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang='scss'>
input {
  border: lightgray 1px solid;
}
</style>