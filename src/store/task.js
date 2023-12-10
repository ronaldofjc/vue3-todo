import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({ 
    tasks: [
      {
        title: "Estudar Vue",
        description: "Estudar vue com vuetify"
      },
      {
        title: "Estudar Golang",
        description: "Estudar Gon com Gin"
      }
    ],
    titleTaskCreating: "" 
  }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    addTask() {
      this.tasks.push({
        title: this.titleTaskCreating
      })
      this.titleTaskCreating = ""
    }
  },
})
