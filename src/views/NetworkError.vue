<script setup>

import router from '../router';



</script>


<template>
    <h1>Uh-Oh!!</h1>
    <h3>Det ser ut som det er noe nettverksfeil, ta deg en 2 minutter og <a href="#" @click="router.go(-1)">trykk her</a> for å prøve igjen</h3>
</template>

