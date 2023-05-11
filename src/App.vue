<script setup>
import { ref } from 'vue'
import { useTaskStore } from './store/modules/task.module';
import TaskItem from './components/task/task-item.vue';
import TaskEmpty from './components/task/task-empty.vue';
import TaskFilterTab from './components/task/task-filter-tab.vue'
import TaskCreateModal from './components/task/task-create-modal.vue'

const taskStore = useTaskStore()
const tabActive = ref('task')
const visibleCreateModal = ref(false)

function handleCreate() {
  visibleCreateModal.value = true
}
</script>

<template>
  <div class="max-w-[24rem] min-w-[24rem] w-full">
    <div>
      <task-filter-tab v-model="tabActive" />
    </div>
    <div class="space-y-5 p-5">
      <template v-if="taskStore.tasksSize">
        <task-item v-for="task in taskStore.tasks" :key="task.id" :task="task" />
      </template>
      <task-empty v-on:create="handleCreate" v-else />
    </div>

    <task-create-modal v-model="visibleCreateModal" />
  </div>
</template>