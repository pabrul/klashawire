<template>
  <Header />
  <div class="flex min-h-screen bg-klasha-light">
    <Sidebar />
    <div class="flex-1 bg-white">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/layout/Sidebar.vue";
import Header from "@/components/layout/Header.vue";
</script>
