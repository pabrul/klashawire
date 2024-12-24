<!-- src/components/layout/Sidebar.vue -->
<template>
  <aside
    class="w-[280px] bg-klasha-light border-r border-gray-200 p-6 flex flex-col"
  >
    <!-- Logo -->
    <div class="mb-8">
      <img src="@/assets/klasha__logo.png" alt="Klasha" class="w-auto" />
    </div>

    <!-- Navigation -->
    <nav class="flex-1">
      <!-- Main Pages -->
      <div class="space-y-4">
        <p class="text-sm text-gray-500">Main pages</p>
        <RouterLink
          v-for="item in mainNavItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 py-2 text-klasha-dark hover:text-klasha-primary"
          :class="{ 'text-klasha-primary': item.path === currentPath }"
        >
          <Icon :icon="item.icon" size="sm" />
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Accept Payments -->
      <div class="mt-8 space-y-4">
        <p class="text-sm text-gray-500">Accept payments</p>
        <RouterLink
          v-for="item in acceptPaymentItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 py-2 text-klasha-dark hover:text-klasha-primary"
        >
          <Icon :icon="item.icon" size="sm" />
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Send Payments -->
      <div class="mt-8 space-y-4">
        <p class="text-sm text-gray-500">Send payments</p>
        <RouterLink
          v-for="item in sendPaymentItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 py-2 text-klasha-dark hover:text-klasha-primary"
        >
          <Icon :icon="item.icon" size="sm" />
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>

    <!-- Bottom Actions -->
    <div
      class="mt-8 space-y-4 flex justify-center align-center items-center flex-col whitespace-nowrap"
    >
      <Button variant="support" class="w-44">
        <Icon :icon="QuestionMarkCircleIcon" size="md" className="mr-2" />
        Support
      </Button>

      <!-- Botão de Ocultar Painel flex ju com ícone de seta apontando para a esquerda -->
      <Button variant="hide" class="w-44">
        <Icon :icon="ArrowLeftIcon" size="md" className="mr-2" />
        Hide panel
      </Button>
    </div>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Importando ícones do Heroicons
import {
  ChartBarIcon,
  WalletIcon,
  ArrowPathIcon,
  MegaphoneIcon,
  ArrowsUpDownIcon,
  ShoppingCartIcon,
  LinkIcon,
  BanknotesIcon,
  QuestionMarkCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/outline";

import Icon from "@/components/common/Icon.vue";
import Button from "@/components/common/Button.vue";

const route = useRoute();
const currentPath = computed(() => route.path);

// Navegação principal
const mainNavItems = [
  { name: "Dashboard", path: "/dashboard", icon: ChartBarIcon },
  { name: "Balances", path: "/balances", icon: WalletIcon },
  { name: "Transactions", path: "/transactions", icon: ArrowPathIcon },
  { name: "Analytics", path: "/analytics", icon: ChartBarIcon },
  { name: "Marketing", path: "/marketing", icon: MegaphoneIcon },
  { name: "Exchange rates", path: "/exchange-rates", icon: ArrowsUpDownIcon },
];

// Aceitar pagamentos
const acceptPaymentItems = [
  { name: "Checkout", path: "/checkout", icon: ShoppingCartIcon },
  { name: "Payment Links", path: "/payment-links", icon: LinkIcon },
];

// Enviar pagamentos
const sendPaymentItems = [{ name: "Wire", path: "/wire", icon: BanknotesIcon }];
</script>
