<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>Email: {{ user.email }}</p>
    <button @click="$emit('edit', user.id)">Edit</button>
    <button @click="$emit('delete', user.id)">Delete</button>
  </div>
</template>

<script setup>
defineProps({
  user: Object
});
</script>
