import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore(
  'task',
  () => {
    const tasks = ref([]);
    const size = computed(() => tasks.value.length);

    return { tasks, size };
  },
  { persist: true }
);
