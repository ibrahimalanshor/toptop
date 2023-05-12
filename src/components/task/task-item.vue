<script setup>
const props = defineProps({
    task: Object
})
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input :id="`task-${props.task.id}`" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-600" v-model="props.task.done" />
    </div>
    <div class="ml-3 text-sm leading-6">
      <label :for="`task-${props.task.id}`" class="font-medium text-gray-900" :class="{ 'line-through': props.task.done }">{{ props.task.name }}</label>
    </div>
  </div>
</template>