<template>
  <div>
    <v-dialog
      v-model="taskStore.showDialogEdit"
      persistent
      min-width="400"
      max-width="700"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="taskStore.updateTask.title" label="Title"></v-text-field>
          <v-text-field v-model="taskStore.updateTask.description" label="Description"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
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
</script>