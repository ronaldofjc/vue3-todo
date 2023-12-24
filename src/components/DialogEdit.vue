<template>
  <div>
    <v-dialog
      v-model="taskStore.showDialogEdit"
      persistent
      width="700"
      max-width="95%"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="taskStore.updateTask.title" label="Title" :rules="rules"></v-text-field>
          <v-text-field v-model="taskStore.updateTask.description" label="Description"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary-darken-1"
            variant="outlined"
            @click="taskStore.toggleEdit()"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary-darken-1"
            variant="elevated"
            @click="taskStore.editTask()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/store/task'

  const taskStore = useTaskStore()

  const rules = [
    value => {
      if (!value || value.length >= 5) return true
      return "Informe um título com mais de 5 caracteres para a tarefa!"
    }
  ]
</script>