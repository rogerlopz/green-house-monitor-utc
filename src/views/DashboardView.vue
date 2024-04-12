<script setup lang="ts">
import {
  ArrowTrendingUpIcon,
  CloudIcon,
  EyeDropperIcon,
  FireIcon,
  SunIcon
} from '@heroicons/vue/24/outline'
import SensorCard from '@/components/SensorCard.vue'
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
        <SensorCard
          :name="channel?.field1"
          :last-sensor-value="field1Feed[field1Feed.length - 1]"
          :icon="FireIcon"
          path="soil-temperature"
        />

        <SensorCard
          :name="channel?.field2"
          :last-sensor-value="field2Feed[field2Feed.length - 1]"
          :icon="EyeDropperIcon"
          path="soil-moisture"
        />

        <SensorCard
          :name="channel?.field3"
          :last-sensor-value="field3Feed[field3Feed.length - 1]"
          :icon="SunIcon"
          path="luminosity"
        />

        <SensorCard
          :name="channel?.field4"
          :last-sensor-value="field4Feed[field4Feed.length - 1]"
          :icon="ArrowTrendingUpIcon"
          path="barometric-pressure"
        />

        <SensorCard
          :name="channel?.field5"
          :last-sensor-value="field5Feed[field5Feed.length - 1]"
          :icon="CloudIcon"
          path="co2-levels"
        />
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
