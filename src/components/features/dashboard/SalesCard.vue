<!-- src/components/features/dashboard/SalesCard.vue -->
<template>
  <Card :variant="variant" :label="label" :value="value" :date="date">
    <template #chart v-if="showChart">
      <LineChart :data="chartData" :color="chartColor" />
    </template>
  </Card>
</template>

<script setup>
import { computed } from "vue";
import Card from "@/components/common/Card.vue";
import LineChart from "./LineChart.vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "dark"].includes(value),
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  chartData: {
    type: Array,
    default: () => [],
  },
});

const showChart = computed(() => props.chartData.length > 0);
const chartColor = computed(() =>
  props.variant === "dark" ? "#EF2C5A" : "#FFB6C1"
);
</script>
Z
