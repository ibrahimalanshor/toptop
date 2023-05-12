import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore(
  'task',
  () => {
    const tasks = ref([]);
    const tasksSize = computed(() => tasks.value.length);

    function save(task) {
      tasks.value.push({
        id: tasksSize.value ? tasksSize.value + 1 : 1,
        name: task.name,
        done: false,
      });
    }

    function getAll(query) {
      const filter = (task) => {
        if (query.done === null) {
          return true;
        }

        return task.done === query.done;
      };
      const data = tasks.value.filter(filter);

      return {
        count: data.length,
        data,
      };
    }

    function remove(id) {
      const index = tasks.value.findIndex((task) => task.id === id);

      tasks.value.splice(index, 1);
    }

    return { tasks, tasksSize, save, getAll, remove };
  },
  { persist: true }
);
