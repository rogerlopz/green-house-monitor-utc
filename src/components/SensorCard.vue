<script setup lang="ts">
import { CpuChipIcon, DocumentArrowDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  name: { type: String, default: '' },
  lastSensorValue: { type: String, default: '0' },
  path: { type: String, default: '/' },
  icon: { type: Function, default: () => {} }
})
</script>

<template>
  <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <h3 class="truncate text-sm font-medium text-gray-900">{{ name }}</h3>
          <span
            class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >Active</span
          >
        </div>
        <p class="mt-1 truncate text-sm text-gray-500">Last sensor value: {{ lastSensorValue }}</p>
      </div>

      <component :is="icon" class="h-10 w-10 flex-shrink-0" aria-hidden="true" />
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <button
            disabled
            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 disabled:cursor-not-allowed bg-gray-200"
          >
            <DocumentArrowDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            Export Data
          </button>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <router-link
            :to="{ name: path, params: { sensorId: 0 } }"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            View Sensor
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
