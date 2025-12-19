<template>
    <div class="com">

    <div class="title">User Card</div>
    <div class="name">Name :{{ props.name }}</div>
    <div class="age">Age:{{ props.age }}</div>
    <div class="dep">Department:{{ props.department }}</div>

    </div>

</template>
<script setup>
const props=defineProps({
    name:String,
    age:Number,
    department:String

})

</script>
<style>
.com{
    background-color: aqua;
    border-radius: 10;
    margin: 10 20;
    width: 200px;
}
.title{
    font-size: large;
    font-weight: bold;
    text-align: center;
}

</style>