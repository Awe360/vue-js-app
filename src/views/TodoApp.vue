<template>
    <h1>Todo Application</h1>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <input type="checkbox" v-model="todo.completed" @change="toggleTodo(todo.id)" />
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.task }}</span>
            <button @click="removeTodo(todo.id)">Remove</button>
        </li>
    </ul>
    <input v-model="newTask" placeholder="New task" />
    <button @click="addTodo(newTask); newTask = 'default'">Add Todo</button>
    

</template>
<script setup>
import { reactive } from 'vue';

const todos=reactive([
  { id: 1, task: 'Learn Vue.js', completed: false },
  { id: 2, task: 'Build a Todo App', completed: false },
  { id: 3, task: 'Master Vuex', completed: false }
])
const addTodo=(task)=>{
  const newId=todos.length ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ id: newId, task, completed: false });
}
const toggleTodo=(id)=>{
  const todo=todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}
const removeTodo=(id)=>{
  const index=todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}
</script>
