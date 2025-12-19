<template>

    <h1>Counter Application</h1>
    <p>Current Count: {{ count }}</p>
    <p>Double Count: {{ double }}</p>
    <button @click="increment">Increment Count</button>
    <button @click="decrement">Decrement Count</button>
    <button @click="reset">Reset Count</button>
    <br/><br/>
    <input type="number" v-model.number="customValue" placeholder="Enter a number" />
    <button @click="customeIncrement(customValue)">Custom Increment</button>

</template>
<script setup>
import { computed, ref } from 'vue'

const count=ref(0)
const increment=()=>{
  count.value++
}
const double=computed(()=>{
  return count.value*2
})
const decrement=()=>{
  count.value--
}
const reset=()=>{
  count.value=0
}
const customeIncrement=(num)=>{
  count.value+=num
}
</script>