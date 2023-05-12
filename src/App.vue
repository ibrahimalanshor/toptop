<script setup>
import { ref, reactive, computed } from 'vue'
import { useTaskStore } from './store/modules/task.module';
import UiButton from './components/ui/ui-button.vue';
import TaskItem from './components/task/task-item.vue';
import TaskEmpty from './components/task/task-empty.vue';
import TaskFilterTab from './components/task/task-filter-tab.vue'
import TaskCreateModal from './components/task/task-create-modal.vue'
import TaskCreateFloatButton from './components/task/task-create-float-button.vue';

const taskStore = useTaskStore()
const visibleCreateModal = ref(false)

const query = reactive({
  done: false,
  limit: 15
})
const tasks = computed(() => taskStore.getAll(query))
const wrapper = ref()

function handleCreate() {
  visibleCreateModal.value = true
}
function handleLoadMore() {
  query.limit += 10
}
function handleChangeTab() {
  query.limit = 15

  wrapper.value.scrollTop = 0
}
</script>

<template>
  <div ref="wrapper" class="max-w-[24rem] min-w-[24rem] min-h-[24rem] max-h-[36rem] w-full overflow-y-auto">
    <div class="bg-white sticky top-0 left-0 z-10">
      <task-filter-tab v-model="query.done" v-on:change="handleChangeTab" />
    </div>
    <div class="space-y-5 p-5">
      <template v-if="tasks.count">
        <task-item v-for="task in tasks.data" :key="task.id" :task="task" />        
        <ui-button v-if="query.limit < tasks.count" v-on:click="handleLoadMore">Load More</ui-button>
      </template>
      <task-empty v-on:create="handleCreate" v-else />
    </div>

    <task-create-modal v-model="visibleCreateModal" />
    <task-create-float-button v-on:create="handleCreate" />
  </div>
</template>