<template>
  <h2>Edit User</h2>
  <UserForm :user="user" @submit="updateUser" />
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import UserForm from '../components/UserForm.vue';


const users = reactive([
  { id: 1, name: 'Awoke', email: 'awoke@example.com' },
  { id: 2, name: 'Gebrie', email: 'gebrie@example.com' }
]);

const route = useRoute();
const router = useRouter();

const userId = Number(route.params.id);
const user = reactive(users.find(u => u.id === userId));

function updateUser(updated) {
  Object.assign(user, updated);
  router.push({ name: 'users' });
}
</script>
