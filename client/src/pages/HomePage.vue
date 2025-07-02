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
  <section class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="mt-5">
          <h1>Hello neighbor!</h1>
          <h3>Nampa's way to connect and thrive!</h3>
          <div class="mt-3">
            <p>The Nampa Neighborhood Network is your local hub for practical help and shared resources. Need a hand
              with some housework, a minor home repair, or even borrowing a specific tool like a lawnmower or power
              drill? This app connects you directly with neighbors who have the skills or equipment you need.
              <br>
              <br>
              It's all about fostering a supportive Nampa community where reaching out for help or offering your unique
              talents is simple, convenient, and truly local.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="mt-5">
          <img
            src="https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" class="hero">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 20rem;
  width: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 5px;
}
</style>
