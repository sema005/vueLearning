<script setup>

const props = defineProps({
  resource: {
    type: String,
    required: true,
    default: "siden"
  }
})



</script>


<template>
    <h1>Ooops!!</h1>
    <h3>Dette {{ resource }} eksisterer ikke</h3>
    <router-link :to="{name: 'event-list'}">Tilbake til hjemsiden</router-link>
</template>

