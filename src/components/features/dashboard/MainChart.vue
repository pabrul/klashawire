<!-- src/components/features/dashboard/MainChart.vue -->
<template>
  <div class="border border-klasha-dark rounded-lg p-6">
    <div class="h-[300px] relative">
      <!-- Y-axis labels -->
      <div
        class="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500"
      >
        <div>4,000</div>
        <div>3,000</div>
        <div>2,000</div>
        <div>1,000</div>
      </div>

      <!-- Chart -->
      <div class="ml-16 h-full">
        <Line :data="chartData" :options="chartOptions" />
      </div>

      <!-- Vertical Line for current date -->
      <div
        class="absolute right-4 sm:right-12 top-0 h-full w-px bg-gray-300"
      ></div>
    </div>

    <!-- X-axis dates -->
    <div class="flex justify-between text-sm text-gray-500 mt-4 ml-16">
      <div>20 Aug</div>
      <div>21 Aug</div>
      <div>22 Aug</div>
      <div>23 Aug</div>
      <div>24 Aug</div>
      <div>25 Aug</div>
    </div>
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

const data = [
  { date: "20 Aug", value: 2000 },
  { date: "21 Aug", value: 3500 },
  { date: "22 Aug", value: 2000 },
  { date: "23 Aug", value: 2800 },
  { date: "24 Aug", value: 2400 },
  { date: "25 Aug", value: 2600 },
];

const chartData = computed(() => ({
  labels: data.map((item) => item.date),
  datasets: [
    {
      data: data.map((item) => item.value),
      borderColor: "#EF2C5A",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(239, 44, 90, 0.1)");
        gradient.addColorStop(1, "rgba(239, 44, 90, 0)");
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
      display: false, // Escondemos pois temos nosso próprio eixo X customizado
    },
    y: {
      display: false, // Escondemos pois temos nosso próprio eixo Y customizado
      min: 0,
      max: 4000,
      ticks: {
        stepSize: 1000,
      },
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
