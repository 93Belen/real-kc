<script setup>
import { RouterView } from 'vue-router'
import { useDbStore } from './pinia/dbStore'

const dbStore = useDbStore()
dbStore.getDB()
dbStore.getDataByFilter()

</script>

<template>
  <div class="bg-base w-screen text-white overflow-hidden">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
