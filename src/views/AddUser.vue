<template>
  <h2>Add User</h2>
  <UserForm @submit="addUser" />
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import UserForm from '../components/UserForm.vue';


const router = useRouter();

const users = reactive([
  { id: 1, name: 'Awoke', email: 'awoke@example.com' },
  { id: 2, name: 'Gebrie', email: 'gebrie@example.com' }
]);

function addUser(newUser) {
  const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
  users.push({ id, ...newUser });
  router.push({ name: 'users' });
}
</script>
