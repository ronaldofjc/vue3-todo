<template>
  <v-text-field
    clearable
    label="Add Task"
    v-model="task.title"
    @keyup.enter="addTask"
  ></v-text-field>

  <ListTasks :tasks="tasks" />
</template>

<script setup>
  import ListTasks from './ListTasks.vue';
  import { ref } from 'vue'

  const tasks = ref([
    {
      title: "Estudar Vue",
      description: "Estudar vue com vuetify"
    },
    {
      title: "Estudar Golang",
      description: "Estudar Gon com Gin"
    }
  ])

  const task = ref({
    title: "",
    description: ""
  })

  const addTask = () => {
    tasks.value.push({
      title: task.value.title,
      description: task.value.description
    })
    task.value = {
      title: "",
      description: ""
    }
  }
</script>