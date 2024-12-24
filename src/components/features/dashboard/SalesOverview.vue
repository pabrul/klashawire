<!-- src/components/features/dashboard/SalesOverview.vue -->
<template>
  <div class="">
    <h2 class="text-xl mb-8">Sales overview</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6"
    >
      <SalesCard label="Today's sales" value="₦1,652.50" />

      <SalesCard
        class="w-full"
        variant="dark"
        label="This week"
        value="₦1,652.50"
        date="24 Aug - 01 Sep 21"
        :chartData="weekData"
      />

      <SalesCard
        label="This month"
        value="₦1,652.50"
        date="24 Aug - 01 Sep 21"
        :chartData="monthData"
      />

      <SalesCard
        label="Last month"
        value="₦1,652.50"
        date="24 Aug - 01 Sep 21"
        :chartData="lastMonthData"
      />
    </div>
  </div>
</template>

<script setup>
import SalesCard from "./SalesCard.vue";

// Dados simulados para os gráficos
const weekData = [
  { value: 2400 },
  { value: 3200 },
  { value: 2900 },
  { value: 3100 },
  { value: 2800 },
  { value: 3000 },
  { value: 3500 },
];

const monthData = [
  { value: 2600 },
  { value: 2900 },
  { value: 2700 },
  { value: 3000 },
  { value: 2800 },
];

const lastMonthData = [
  { value: 2500 },
  { value: 2800 },
  { value: 2600 },
  { value: 2900 },
  { value: 2700 },
];
</script>
