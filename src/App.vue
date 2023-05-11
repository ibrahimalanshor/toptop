<script setup>
import { ref } from 'vue'
import UiTab from './components/ui/ui-tab.vue'

const tabs = [
  { id: 'all', name: 'All' },
  { id: 'task', name: 'Task' },
  { id: 'done', name: 'Done' }
]
const tabActive = ref(tabs[1].id)
</script>

<template>
  <div class="max-w-[24rem] min-w-[24rem] w-full">
    <div>
      <ui-tab :tabs="tabs" v-model="tabActive" />
    </div>
    <div class="space-y-5 p-5">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900">New comments</label>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="candidates" class="font-medium text-gray-900">New candidates</label>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="offers" class="font-medium text-gray-900">Offers</label>
        </div>
      </div>
    </div>
  </div>
</template>