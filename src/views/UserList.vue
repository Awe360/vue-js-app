<template>
  <h2>User List</h2>
  <div v-if="users.length === 0">No users found.</div>
  <div v-else>
    <UserCard 
      v-for="user in users" 
      :key="user.id" 
      :user="user"
      @edit="editUser"
      @delete="deleteUser"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import UserCard from '../components/UserCard.vue';

const router = useRouter();

const users = reactive([
  { id: 1, name: 'Awoke', email: 'awoke@example.com' },
  { id: 2, name: 'Gebrie', email: 'gebrie@example.com' }
]);

function editUser(id) {
  router.push({ name: 'editUser', params: { id } });
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) users.splice(index, 1);
}
</script>
