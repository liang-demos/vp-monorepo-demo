<script setup lang="ts">
import createFakePackage from '../packages/fake-package/src/index.ts'

const message = createFakePackage('root overrides website')
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <p>The website enables unicorn filename checks and allows default exports.</p>
  </main>
</template>
