<template>
  <div>
    <v-dialog
      v-model="taskStore.showDialogDelete"
      persistent
      min-width="400"
      max-width="700"
    >      
      <v-card>
        <v-card-title class="text-h5">
          Delete Task
        </v-card-title>
        <v-card-text>
          <p>Tem certeza que deseja excluir a tarefa?</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="taskStore.toggleDelete"
          >
            Não
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="taskStore.deleteTask"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { useTaskStore } from '@/store/task'

  const taskStore = useTaskStore()

  const props = defineProps({
    dialog: Boolean,
  })

</script>