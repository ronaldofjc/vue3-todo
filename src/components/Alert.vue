<template>
  <v-container class="alert-notification">
    <v-alert
      :type="alertStore.typeAlert"
      :text="alertStore.description"
      class="animate__animated animate__bounceInUp"
      closable
    ></v-alert>
  </v-container>
</template>

<script setup>
  import 'animate.css';
  import { useAlertStore } from '@/store/alert'

  const alertStore = useAlertStore()
</script>

<style scoped>
  .alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
  }
</style>