<script setup lang="ts">
defineProps<{
  command: string
}>()
</script>

<template>
  <text>Running {{ command }}</text>
</template>
