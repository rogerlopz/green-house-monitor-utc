<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  CloudIcon,
  EyeDropperIcon,
  FireIcon,
  RectangleGroupIcon,
  SunIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import DropdownWithIcons from '@/components/dropdowns/DropdownWithIcons.vue'

const navigation = [
  { name: 'Dashboard', namedRoute: 'dashboard', icon: RectangleGroupIcon, current: true },
  { name: 'Luminosity', namedRoute: 'luminosity', icon: SunIcon, current: false },
  {
    name: 'Barometric Pressure',
    namedRoute: 'barometric-pressure',
    icon: ArrowTrendingUpIcon,
    current: false
  },
  { name: 'CO2 Levels', namedRoute: 'co2-levels', icon: CloudIcon, current: false },
  { name: 'Soil Temperature', namedRoute: 'soil-temperature', icon: FireIcon, current: false },
  { name: 'Soil Moisture', namedRoute: 'soil-moisture', icon: EyeDropperIcon, current: false }
]

const sidebarOpen = ref(false)
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-900 px-6 pb-2 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <p class="text-white text-center font-bold">UTC Monitor</p>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="-mx-2 flex-1 space-y-1">
                    <li v-for="(item, index) in navigation" :key="item.name">
                      <router-link
                        :to="{ name: item.namedRoute, params: { sensorId: index } }"
                        :class="[
                          item.current
                            ? 'bg-primary-500 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        ]"
                      >
                        <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                        {{ item.name }}
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div
      class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-secondary-900 lg:pb-4"
    >
      <div class="flex h-16 shrink-0 items-center justify-center">
        <p class="text-white text-center font-bold">UTC Monitor</p>
      </div>
      <nav class="mt-8">
        <ul role="list" class="flex flex-col items-center space-y-1">
          <li v-for="(item, index) in navigation" :key="item.name">
            <router-link
              :to="{ name: item.namedRoute, params: { sensorId: index } }"
              :class="[
                item.current
                  ? 'bg-primary-500 text-white'
                  : 'text-primary-400 hover:text-white hover:bg-primary-500',
                'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
              ]"
            >
              <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
              <span class="sr-only">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="lg:pl-20">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-primary-500 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <div class="flex items-center">
          <p class="mr-2">Select crop type:</p>
          <DropdownWithIcons label="Crops" />
        </div>
      </div>

      <main>
        <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
