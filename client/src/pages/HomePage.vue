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
  <section class="row mx-0">
    <div class="col-md-5">
      <div>
        <h1>Hello neighbor!</h1>
        <h3>Nampa's Way to Connect and Thrive.</h3>
      </div>
    </div>
    <div class="col-md-5"></div>
  </section>
</template>

<style scoped lang="scss"></style>
