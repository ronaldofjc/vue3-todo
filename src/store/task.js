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
    titleTaskCreating: "",
    showDialogDelete: false,
    indexTaskSelected: 0,
    showDialogTaskFields: false
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
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete
      if (index != null) this.indexTaskSelected = index
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1)
      this.toggleDelete()
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields
      if (index != null) this.indexTaskSelected = index
    }
  },
})
