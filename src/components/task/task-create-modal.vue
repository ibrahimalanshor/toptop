<script setup>
import { computed, reactive } from 'vue';
import { useTaskStore } from '@/store/modules/task.module.js'
import UiModal from '@/components/ui/ui-modal.vue';
import UiButton from '@/components/ui/ui-button.vue';
import UiInput from '@/components/ui/ui-input.vue';

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

function resetForm() {
  form.name = null
}

function handleSubmit() {
  taskStore.save(form)
  
  visible.value = false

  resetForm()
}
</script>

<template>
  <ui-modal v-model="visible">
    <form class="space-y-4" v-on:submit.prevent="handleSubmit">
      <ui-input v-model="form.name" />
      <ui-button>Save</ui-button>
    </form>
  </ui-modal>
  </template>