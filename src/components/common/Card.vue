<!-- src/components/common/Card.vue -->
<template>
  <div :class="['card', `card-${variant}`, className]">
    <div class="card-header">
      <span class="card-date">{{ date }}</span>
    </div>

    <div class="card-content">
      <span class="card-label">{{ label }}</span>
      <span class="card-value">{{ value }}</span>

      <!-- Chart slot -->
      <div v-if="$slots.chart" class="card-chart">
        <slot name="chart" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "dark"].includes(value),
  },
  date: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});
</script>
