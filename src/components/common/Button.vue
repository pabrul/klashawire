<template>
  <button
    :class="[
      'btn',
      variant === 'filled' ? 'btn-filled' : `btn-${variant}`,
      className,
    ]"
    :style="variant === 'filled' && backgroundColor ? { backgroundColor } : {}"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <Icon v-if="iconLeft" :icon="iconLeft" size="sm" class="btn-icon-left" />
    <slot />
    <Icon v-if="iconRight" :icon="iconRight" size="sm" class="btn-icon-right" />
  </button>
</template>

<script setup>
import { computed } from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "outline", "support", "hide", "filled"].includes(
        value
      ),
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  iconLeft: {
    type: [Object, null],
    default: null,
  },
  iconRight: {
    type: [Object, null],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>
