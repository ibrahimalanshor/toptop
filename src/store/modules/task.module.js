import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore(
  'task',
  () => {
    const tasks = ref([]);
    const tasksSize = computed(() => tasks.value.length);

    return { tasks, tasksSize };
  },
  { persist: true }
);
