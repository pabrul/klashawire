<!-- src/components/features/dashboard/LineChart.vue -->
<template>
  <div class="h-24">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    default: "#EF2C5A",
  },
});

const chartData = computed(() => ({
  labels: props.data.map((_, index) => index),
  datasets: [
    {
      data: props.data.map((item) => item.value),
      borderColor: props.color,
      borderWidth: 2,
      tension: 0.4,
      fill: "start",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 100);
        const color = props.color === "#EF2C5A" ? "#EF2C5A" : "#FFB6C1";
        gradient.addColorStop(0, `${color}33`); // Mais opaco no topo
        gradient.addColorStop(1, `${color}05`); // Mais transparente embaixo
        return gradient;
      },
      pointRadius: 0,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      min: Math.min(...props.data.map((item) => item.value)) * 0.8,
      max: Math.max(...props.data.map((item) => item.value)) * 1.2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};
</script>
