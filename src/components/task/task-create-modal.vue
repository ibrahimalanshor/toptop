<script setup>
import { computed } from 'vue';

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
</script>

<template>
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full justify-center p-4 text-center items-center">
      <div class="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
        <form class="space-y-4">
  <input type="email" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6" placeholder="Name">
          <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>

</template>