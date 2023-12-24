<template>
  <div>
    <v-dialog
      v-model="taskStore.showDialogDelete"
      persistent
      width="700"
      max-width="95%"
    >      
      <v-card>
        <v-card-title class="text-h5">
          Apagar tarefa
        </v-card-title>
        <v-card-text>
          <p>Tem certeza que deseja excluir esta tarefa?</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            variant="elevated"
            @click="taskStore.toggleDelete"
          >
            Não
          </v-btn>
          <v-btn
            color="red darken-1"
            variant="outlined"
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