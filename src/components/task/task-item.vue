<script setup>
import { useTaskStore } from '@/store/modules/task.module.js'

const props = defineProps({
    task: Object
})

const taskStore = useTaskStore()

function handleDelete() {
  taskStore.remove(props.task.id)
}
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input :id="`task-${props.task.id}`" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-600" v-model="props.task.done" />
    </div>
    <div class="ml-3 text-sm leading-6 flex items-center gap-x-2 group">
      <label :for="`task-${props.task.id}`" class="font-medium text-gray-900" :class="{ 'line-through': props.task.done }">{{ props.task.name }}</label>
      <button class="hidden group-hover:block" v-on:click="handleDelete">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
    </div>
  </div>
</template>