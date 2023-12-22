import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    typeAlert: "",
    description: ""
  }),
  actions: {
    defaultAlertConfig() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    },
    notifyAlertCreated() {
      this.typeAlert = "success",
      this.description = "Tarefa cadastrada com sucesso!"
      this.defaultAlertConfig()
    },
    notifyAlertDeleted() {
      this.typeAlert = "warning",
      this.description = "Tarefa removida!"
      this.defaultAlertConfig()
    },
    notifyAlertUpdated() {
      this.typeAlert = "info",
      this.description = "Tarefa atualizada com sucesso!"
      this.defaultAlertConfig()
    }
  }
})