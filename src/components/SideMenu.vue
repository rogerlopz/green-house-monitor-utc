<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({ sideBarOpen: { type: Boolean, default: false } })
</script>

<template>
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
                  <li v-for="item in navigation" :key="item.name">
                    <a
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      ]"
                    >
                      <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                      {{ item.name }}
                    </a>
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
        <li v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            :class="[
              item.current
                ? 'bg-primary-500 text-white'
                : 'text-primary-400 hover:text-white hover:bg-primary-500',
              'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
            ]"
          >
            <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
            <span class="sr-only">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
