import { defineStore } from 'pinia'
import { useAlertStore } from '@/store/alert'
const alertStore = useAlertStore()

export const useTaskStore = defineStore('task', {
  state: () => ({ 
    tasks: [ ],
    titleTaskCreating: "",
    showDialogDelete: false,
    indexTaskSelected: 0,
    showDialogEdit: false,
    updateTask: {
      title: "",
      done: false
    }
  }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    addTask() {
      if (this.titleTaskCreating.length < 5) return
      this.tasks.push({
        title: this.titleTaskCreating,
        done: false
      })
      this.titleTaskCreating = ""
      alertStore.notifyAlertCreated()
      this.saveLocalData()
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete
      if (index != null) this.indexTaskSelected = index
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1)
      this.toggleDelete()
      alertStore.notifyAlertDeleted()
      this.saveLocalData()
    },
    toggleEdit(index) {
      this.showDialogEdit = !this.showDialogEdit
      if (index != null) this.indexTaskSelected = index
      let task = this.tasks[this.indexTaskSelected]
      this.updateTask = {
        title: task.title,
        description: task.description
      }
    },
    editTask() {
      if (this.updateTask.title.length < 5) return
      this.showDialogEdit = !this.showDialogEdit
      this.tasks[this.indexTaskSelected].title = this.updateTask.title
      this.tasks[this.indexTaskSelected].description = this.updateTask.description
      alertStore.notifyAlertUpdated()
      this.saveLocalData()
    },
    saveLocalData() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTasks() {
      let items = localStorage.getItem('tasks')
      if (items) this.tasks = JSON.parse(items)
    },
    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done
      this.saveLocalData()
    }
  },
})
