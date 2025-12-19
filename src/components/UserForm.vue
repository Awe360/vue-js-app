<template>
  <form @submit.prevent="submitForm">
    <label>Name:</label>
    <input type="text" v-model="form.name" required />

    <label>Email:</label>
    <input type="email" v-model="form.email" required />

    <button type="submit">{{ isEdit ? 'Update' : 'Add' }} User</button>
  </form>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  user: Object, // optional for edit
});

const emits = defineEmits(['submit']);

const form = reactive({
  name: props.user?.name || '',
  email: props.user?.email || ''
});

const isEdit = !!props.user;

function submitForm() {
  emits('submit', { ...form });
}
</script>
