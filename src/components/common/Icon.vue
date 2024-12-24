<template>
  <component
    :is="icon"
    :class="[`icon-${size}`, className, color ? `text-${color}` : '']"
    v-bind="$attrs"
  />
</template>

<script setup>
const props = defineProps({
  icon: {
    type: [Object, Function],
    required: true,
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  color: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>
