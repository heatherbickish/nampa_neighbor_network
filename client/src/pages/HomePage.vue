<script setup>
import { AppState } from "@/AppState.js";
import { tasksService } from "@/services/TasksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted } from "vue";

const tasks = computed(() => AppState.tasks)

onMounted(() => {
  getAllTasks()
})

async function getAllTasks() {
  try {
    await tasksService.getAllTasks()
  } catch (error) {
    logger.error(error)
  }
}

</script>

<template>
  <h1>Home Page!</h1>
  <div>{{ tasks }}</div>
</template>

<style scoped lang="scss"></style>
