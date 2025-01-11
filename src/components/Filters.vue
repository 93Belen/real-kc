<script setup>
import FilterChip from './FilterChip.vue'
</script>

<template>
    <div class="flex gap-6 min-w-full overflow-x-scroll">
        <FilterChip name="Coffee"/>
        <FilterChip name="Groceries"/>
        <FilterChip name="Home"/>
        <FilterChip name="Arts"/>
        <FilterChip name="Coffee"/>
        <FilterChip name="Groceries"/>
        <FilterChip name="Home"/>
        <FilterChip name="Arts"/>
        <FilterChip name="Coffee"/>
        <FilterChip name="Groceries"/>
        <FilterChip name="Home"/>
        <FilterChip name="Arts"/>
        <FilterChip name="Coffee"/>
        <FilterChip name="Groceries"/>
        <FilterChip name="Home"/>
        <FilterChip name="Arts"/>
    </div>
</template>

<style scoped>
/* Hide page scrollbar */
* {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

*::-webkit-scrollbar,
*::-webkit-scrollbar-button {
  display: none; /* Chrome */
}
/* End hide page scrollbar */
</style>