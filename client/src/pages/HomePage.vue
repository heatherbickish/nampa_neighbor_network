<script setup>
import { AppState } from "@/AppState.js";
import Login from "@/components/Login.vue";
import { tasksService } from "@/services/TasksService.js";
import { logger } from "@/utils/Logger.js";
import { computed, onMounted } from "vue";

const tasks = computed(() => AppState.tasks)
const account = computed(() => AppState.account)

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
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="mt-5">
          <h1 v-if="account" class="mb-3">Welcome to the neighborhood!</h1>
          <h1 v-else>Hello neighbor!</h1>
          <h3 v-if="account" class="mt-4">Help Nampa thrive, one task at a time</h3>
          <h3 v-else>Nampa's way to connect and thrive!</h3>
          <div>
            <h4 v-if="account" class="get-help">
              <br>
              Get help, give help.
              <br>
              Share tools, save money.
              <br>
              <b>Build community.</b>
            </h4>
            <p v-else>The Nampa Neighborhood Network is your local hub for practical help and shared resources. Need a
              hand
              with some housework, a minor home repair, or even borrowing a specific tool like a lawnmower or power
              drill? This app connects you directly with neighbors who have the skills or equipment you need.
              <br>
              <br>
              It's all about fostering a supportive Nampa community where reaching out for help or offering your
              unique
              talents is simple, convenient, and truly local.
            </p>
            <div class="mt-3">
              <div v-if="!account" class="text-center">
                <RouterLink :to="{ name: 'Account' }">
                  <button v-if="account" class="btn btn-success">Create Profile</button>
                  <button v-else class="btn btn-success">Sign up</button>
                </RouterLink>
              </div>
              <!-- <div class="text-center mt-2">
                <Login />
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mt-5">
          <form v-if="account">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
              <label for="url" class="form-label">Picture (optional but encouraged for trust)</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="skills" class="form-label">My skills</label>
              <textarea class="form-control" id="skills" rows="3" required></textarea>
            </div>
            <div class="text-center">
              <button class="btn btn-success">Create Profile</button>
            </div>
          </form>
          <img v-else
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

.get-help {
  line-height: 2.5rem;
}
</style>
