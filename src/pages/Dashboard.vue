<template>
  <div class="p-8">
    <SalesOverview />

    <div class="mt-12">
      <SalesFilter />

      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,300px] gap-4 sm:gap-6 mt-6"
      >
        <MainChart />
        <KlashaWireCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import SalesOverview from "@/components/features/dashboard/SalesOverview.vue";
import SalesFilter from "@/components/features/dashboard/SalesFilter.vue";
import MainChart from "@/components/features/dashboard/MainChart.vue";
import KlashaWireCard from "@/components/features/dashboard/KlashaWireCard.vue";
</script>
