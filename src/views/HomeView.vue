<template>
  <Alert v-if="alertStore.showAlert" />
  <ToDoList></ToDoList>
</template>

<script setup>
  import ToDoList from '@/components/ToDoList.vue';
  import Alert from '@/components/Alert.vue'

  import { useAlertStore } from '@/store/alert'
  const alertStore = useAlertStore()
</script>
