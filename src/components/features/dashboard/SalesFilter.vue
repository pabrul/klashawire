<!-- src/components/features/dashboard/SalesFilter.vue -->
<template>
  <div class="flex justify-between items-center mb-6">
    <div class="flex items-center gap-6">
      <h2 class="text-lg font-medium">Sales</h2>

      <div class="flex">
        <button
          class="px-4 py-1.5 text-sm border-b-2"
          :class="
            period === '7days'
              ? 'text-klasha-primary border-klasha-primary'
              : 'border-transparent'
          "
          @click="period = '7days'"
        >
          7 days
        </button>
        <button
          class="px-4 py-1.5 text-sm border-b-2"
          :class="
            period === '30days'
              ? 'text-klasha-primary border-klasha-primary'
              : 'border-transparent'
          "
          @click="period = '30days'"
        >
          30 days
        </button>
      </div>

      <select
        class="p-3 mx-4 border border-klasha-dark rounded-md text-sm bg-white text-center justify-center flex align-center"
      >
        <option class="">USD</option>
      </select>
    </div>

    <div class="flex items-center gap-4">
      <select
        class="p-3 border rounded-md text-sm bg-white min-w-[120px] border-gray-200"
      >
        <option>Email</option>
      </select>

      <button class="flex items-center gap-2 p-3 border rounded-md text-sm">
        <Icon :icon="ArrowDownTrayIcon" class="w-4 h-4" />
        Download report
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Button from "@/components/common/Button.vue";
import Icon from "@/components/common/Icon.vue";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

const period = ref("7days");
</script>
