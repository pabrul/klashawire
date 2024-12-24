<!-- src/components/layout/Header.vue -->
<template>
  <header
    class="h-16 border-b border-gray-200 px-8 flex items-center justify-end gap-4"
  >
    <!-- User Icon -->
    <button class="rounded-full p-2 border border-klasha-dark">
      <Icon :icon="UserIcon" size="md" />
    </button>

    <!-- Language Selector -->
    <div class="flex items-center gap-2">
      <select class="rounded px-3 py-2 outline-none">
        <option value="en">En</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import Icon from "@/components/common/Icon.vue";
import { UserIcon } from "@heroicons/vue/24/outline";
</script>
