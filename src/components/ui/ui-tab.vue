<script setup>
import { computed } from 'vue'

const props = defineProps({
    tabs: Array,
    modelValue: null
})
const emit = defineEmits(['update:modelValue'])

const active = computed({
    get: function () {
        return props.modelValue
    },
    set: function (value) {
        emit('update:modelValue', value)
    }
})

function handleClick(tab) {
    active.value = tab.id
}
</script>

<template>
    <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
            <a v-for="tab in props.tabs" :key="tab.id" href="#" class="flex-grow border-b-2 py-4 px-1 text-center text-sm font-medium"
                :class="[active === tab.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
                v-on:click="handleClick(tab)"
            >
                {{ tab.name }}
            </a>
        </nav>
    </div>
</template>