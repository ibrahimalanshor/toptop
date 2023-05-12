import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore(
  'task',
  () => {
    const tasks = ref([]);
    const tasksSize = computed(() => tasks.value.length);

    function save(task) {
      tasks.value.push({
        id: tasksSize.value ? tasksSize.value - 1 : 1,
        name: task.name,
        done: false,
      });
    }

    return { tasks, tasksSize, save };
  },
  { persist: true }
);
