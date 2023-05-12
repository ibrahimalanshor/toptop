<script setup>
import { computed, reactive } from 'vue';
import { useTaskStore } from '@/store/modules/task.module.js'

const taskStore = useTaskStore()

const props = defineProps({
    modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: function () {
    return props.modelValue
  },
  set: function (value) {
    emit('update:modelValue', value)
  }
})
const form = reactive({
  name: null
})

function handleClose() {
  visible.value = false
}
function handleSubmit() {
  taskStore.save(form)
  
  visible.value = false
}
</script>

<template>
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center">
          <div class="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all" v-click-outside="handleClose">
            <form class="space-y-4" v-on:submit.prevent="handleSubmit">
              <input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6" placeholder="Name" required v-model="form.name">
              <button type="submit" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>