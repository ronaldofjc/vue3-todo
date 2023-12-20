import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    typeAlert: "",
    description: ""
  }),
  actions: {
    notifyAlert(typeAlert, description) {
      this.typeAlert = typeAlert
      this.description = description
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    }
  }
})