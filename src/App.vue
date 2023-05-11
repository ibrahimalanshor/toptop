<script setup>
import { ref } from 'vue'
import UiTab from './components/ui/ui-tab.vue'
import { useTaskStore } from './store/modules/task.module';
import TaskItem from './components/task/task-item.vue';

const taskStore = useTaskStore()

const tabs = [
  { id: 'all', name: 'All' },
  { id: 'task', name: 'Task' },
  { id: 'done', name: 'Done' }
]
const tabActive = ref(tabs[1].id)
</script>

<template>
  <div class="max-w-[24rem] min-w-[24rem] w-full">
    <div>
      <ui-tab :tabs="tabs" v-model="tabActive" />
    </div>
    <div class="space-y-5 p-5">
      <task-item v-for="task in taskStore.tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>