<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
    modelValue: Boolean
})
const emit = defineEmits(['update:modelValue', 'open'])

const visible = computed({
  get: function () {
    return props.modelValue
  },
  set: function (value) {
    emit('update:modelValue', value)
  }
})

function handleClose() {
  visible.value = false
}

watch(visible, () => {
  if (visible.value) {
    emit('open')
  }
})
</script>

<template>
  <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full justify-center p-4 text-center items-center">
        <div class="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all" v-click-outside="handleClose">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>