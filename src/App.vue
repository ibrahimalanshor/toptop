<script setup>
import { ref, reactive, computed } from 'vue'
import { useTaskStore } from './store/modules/task.module';
import TaskItem from './components/task/task-item.vue';
import TaskEmpty from './components/task/task-empty.vue';
import TaskFilterTab from './components/task/task-filter-tab.vue'
import TaskCreateModal from './components/task/task-create-modal.vue'
import TaskCreateFloatButton from './components/task/task-create-float-button.vue';

const taskStore = useTaskStore()
const visibleCreateModal = ref(false)

const query = reactive({
  done: false,
  limit: 10
})
const tasks = computed(() => taskStore.getAll(query))

function handleCreate() {
  visibleCreateModal.value = true
}
</script>

<template>
  <div class="max-w-[24rem] min-w-[24rem] min-h-[24rem] max-h-[36rem] w-full overflow-y-auto">
    <div class="bg-white sticky top-0 left-0 z-10">
      <task-filter-tab v-model="query.done" />
    </div>
    <div class="space-y-5 p-5">
      <template v-if="tasks.count">
        <task-item v-for="task in tasks.data" :key="task.id" :task="task" />
      </template>
      <task-empty v-on:create="handleCreate" v-else />
    </div>

    <task-create-modal v-model="visibleCreateModal" />
    <task-create-float-button v-on:create="handleCreate" />
  </div>
</template>