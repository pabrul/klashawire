<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-6">Transaction history</h2>

    <!-- Search and Actions -->
    <div class="flex items-center justify-between mb-4">
      <!-- Campo de busca -->
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <span class="absolute right-3 top-2 text-gray-400">
          <Icon :icon="MagnifyingGlassIcon" size="md" />
        </span>
      </div>

      <!-- Botões de ação -->
      <div class="flex space-x-4">
        <Button variant="outline" class="flex items-center">
          <Icon :icon="BarsArrowDownIcon" size="md" className="mr-2" />
          Filter
        </Button>
        <Button variant="outline" class="flex items-center">
          <Icon :icon="ArrowDownTrayIcon" size="md" className="mr-2" />
          Export
        </Button>
      </div>
    </div>

    <!-- Tabela -->
    <table
      class="min-w-full table-auto border-collapse border border-gray-200 rounded-lg"
    >
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Transaction ID
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Source
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Customer name
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Customer email
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Amount
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Request date
          </th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-600">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in transactions"
          :key="transaction.id"
          :class="{ 'bg-gray-50': transaction.id % 2 === 0 }"
        >
          <td class="px-6 py-3 text-sm text-gray-800">{{ transaction.id }}</td>
          <td class="px-6 py-3 text-sm text-gray-800">
            {{ transaction.source }}
          </td>
          <td class="px-6 py-3 text-sm text-gray-800">
            {{ transaction.customerName }}
          </td>
          <td class="px-6 py-3 text-sm text-gray-800">
            {{ transaction.customerEmail }}
          </td>
          <td class="px-6 py-3 text-sm text-gray-800">
            {{ transaction.amount }}
          </td>
          <td class="px-6 py-3 text-sm text-gray-800">
            {{ transaction.requestDate }}
          </td>
          <td class="px-6 py-3 text-sm">
            <span
              :class="
                transaction.status === 'Pending'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              "
            >
              {{ transaction.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Paginação -->
    <div class="flex justify-between items-center mt-4">
      <button class="px-4 py-2 border rounded-lg hover:bg-gray-100">
        &lt;
      </button>
      <span class="text-sm text-gray-600"
        >Page {{ currentPage }} of {{ totalPages }}</span
      >
      <button class="px-4 py-2 border rounded-lg hover:bg-gray-100">
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  MagnifyingGlassIcon,
  BarsArrowDownIcon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";
import Icon from "@/components/common/Icon.vue";
import Button from "@/components/common/Button.vue";

const transactions = ref([
  {
    id: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
  {
    id: "CB328ABCEDF23416",
    source: "UBA",
    customerName: "Steve O'Shassy",
    customerEmail: "0982764829",
    amount: "$480.00",
    requestDate: "22.08.2021",
    status: "Successful",
  },
  // Adicione mais transações aqui
]);

const currentPage = ref(1);
const totalPages = ref(10);
</script>
