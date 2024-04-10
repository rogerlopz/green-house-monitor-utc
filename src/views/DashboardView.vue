<script setup lang="ts">
import {
  ArrowTrendingUpIcon,
  CloudIcon,
  EyeDropperIcon,
  FireIcon,
  SunIcon
} from '@heroicons/vue/24/outline'
import { DocumentArrowDownIcon, CpuChipIcon } from '@heroicons/vue/20/solid'
import { useChannelFeedsStore } from '@/stores/channelFeed'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const channelFeedsStore = useChannelFeedsStore()

const { channel, isLoading, isError, field1Feed, field2Feed, field3Feed, field4Feed, field5Feed } =
  storeToRefs(channelFeedsStore)

onBeforeMount(async () => {
  await channelFeedsStore.getChannelFeeds()
})
</script>

<template>
  <div>
    <div v-if="isLoading">Loading Dashboard...</div>

    <div v-if="isError">Couldn't load dashboard data, please refresh</div>

    <div v-else>
      <ul role="list" class="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{{ channel.field1 }}</h3>
                <span
                  class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span
                >
              </div>
              <p class="mt-1 truncate text-sm text-gray-500">
                Last sensor value: {{ field1Feed[field1Feed.length - 1] }}
              </p>
            </div>

            <FireIcon class="h-10 w-10 flex-shrink-0 rounded-full" />
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
                  to=""
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Sensor
                </router-link>
              </div>
            </div>
          </div>
        </li>

        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{{ channel.field2 }}</h3>
                <span
                  class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span
                >
              </div>
              <p class="mt-1 truncate text-sm text-gray-500">
                Last sensor value: {{ field2Feed[field2Feed.length - 1] }}
              </p>
            </div>

            <EyeDropperIcon class="h-8 w-8 flex-shrink-0 rounded-full" />
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="flex w-0 flex-1">
                <button
                  disabled
                  class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentArrowDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Export Data
                </button>
              </div>
              <div class="-ml-px flex w-0 flex-1">
                <button
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Sensor
                </button>
              </div>
            </div>
          </div>
        </li>

        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{{ channel.field3 }}</h3>
                <span
                  class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span
                >
              </div>
              <p class="mt-1 truncate text-sm text-gray-500">
                Last sensor value: {{ field3Feed[field3Feed.length - 1] }}
              </p>
            </div>

            <SunIcon class="h-10 w-10 flex-shrink-0 rounded-full" />
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="flex w-0 flex-1">
                <button
                  disabled
                  class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentArrowDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Export Data
                </button>
              </div>
              <div class="-ml-px flex w-0 flex-1">
                <button
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Sensor
                </button>
              </div>
            </div>
          </div>
        </li>

        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{{ channel.field4 }}</h3>
                <span
                  class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span
                >
              </div>
              <p class="mt-1 truncate text-sm text-gray-500">
                Last sensor value: {{ field4Feed[field4Feed.length - 1] }}
              </p>
            </div>
            <ArrowTrendingUpIcon class="h-10 w-10 flex-shrink-0 rounded-full" />
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="flex w-0 flex-1">
                <button
                  disabled
                  class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentArrowDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Export Data
                </button>
              </div>
              <div class="-ml-px flex w-0 flex-1">
                <button
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Sensor
                </button>
              </div>
            </div>
          </div>
        </li>

        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{{ channel.field5 }}</h3>
                <span
                  class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span
                >
              </div>
              <p class="mt-1 truncate text-sm text-gray-500">
                Last sensor value: {{ field1Feed[field1Feed.length - 1] }}
              </p>
            </div>

            <CloudIcon class="h-10 w-10 flex-shrink-0 rounded-full" />
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="flex w-0 flex-1">
                <button
                  disabled
                  class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentArrowDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Export Data
                </button>
              </div>
              <div class="-ml-px flex w-0 flex-1">
                <button
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CpuChipIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Sensor
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <GMapMap
        :center="{ lat: Number(channel?.latitude), lng: Number(channel?.longitude) }"
        :zoom="18"
        map-type-id="satellite"
        style="width: 100%; height: 40vh"
      />
    </div>
  </div>
</template>
