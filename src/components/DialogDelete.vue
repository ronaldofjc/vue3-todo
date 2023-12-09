<template>
  <div>
    <v-dialog
      v-model="props.dialog"
      persistent
      min-width="400"
      max-width="700"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
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
            @click="$emit('toggleDelete')"
          >
            Não
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('deleteTask')"
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

  const props = defineProps({
    dialog: Boolean,
  })

</script>