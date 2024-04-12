<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCropStore } from '@/stores/crop'
import { useChannelFeedsStore } from '@/stores/channelFeed'

const channelFeeds = useChannelFeedsStore()

const { cropLuminosity } = storeToRefs(useCropStore())

const lastLuminosityValue = computed(() => {
  return channelFeeds.field3Feed[channelFeeds.field3Feed.length - 1]
})

const currentLumensDescription = computed(() => {
  const current = lastLuminosityValue.value

  if (current >= cropLuminosity.value.min && current <= cropLuminosity.value.max) {
    return 'The current luminosity value is within acceptable range'
  }

  if (current < cropLuminosity.value.min) {
    return 'The current luminosity value is below acceptable range'
  }

  if (current > cropLuminosity.value.max) {
    return 'The current luminosity value is above acceptable range'
  }

  return ''
})
</script>

<template>
  <div>
    <h1 class="text-5xl mb-4">Crop Luminosity for {{ cropLuminosity.name }}</h1>

    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-col border rounded p-4 bg-amber-300 text-center">
        <h3 class="text-3xl mb-4">Minimum Lumens required</h3>
        <p class="text-2xl font-bold">{{ cropLuminosity.min }}</p>
      </div>
      <div class="flex flex-col border rounded p-4 bg-green-300 text-center">
        <h3 class="text-3xl mb-4">Current Lumens</h3>
        <p class="text-2xl font-bold">{{ lastLuminosityValue }}</p>
        <p class="italic">{{ currentLumensDescription }}</p>
      </div>
      <div class="flex flex-col border rounded p-4 bg-red-500 text-center text-white">
        <h3 class="text-3xl mb-4">Max Lumens recommended</h3>
        <p class="text-2xl font-bold">{{ cropLuminosity.max }}</p>
      </div>
    </div>

    <div class="my-8 border rounded p-2">
      <h2 class="text-3xl">{{ cropLuminosity.name }}</h2>

      <div class="flex flex-col lg:flex-row justify-evenly">
        <p>{{ cropLuminosity.description }}</p>
        <img src="" :alt="cropLuminosity.name" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
