<template>
  <div class="container mx-auto">
    <Card class="my-8">
      <template #title>Gaming Data</template>
      <template #content>
        <p class="m-0">Built with Primevue.org and vue-chartjs.</p>
      </template>
    </Card>

    <div class="app-content">
      <!-- DATA TABLE -->
      <PrimeAppData />

      <!-- PRINT DATA -->
      <!-- <PrimePrintData /> -->
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";
</script>

<style lang="scss">
.app-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
}
</style>
