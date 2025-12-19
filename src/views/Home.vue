<template>
  <h1>Welcome to User Management App</h1>
  <p>Current Count: {{ count }}</p>
  <p>Double Count: {{ double }}</p>
  <button @click="increment">Increment Count</button>

</template>

<script setup>
import { computed, ref } from 'vue';

const count=ref(0)
const increment=()=>{
  count.value++
}
const double=computed(()=>{
  return count.value*2
})

</script>
