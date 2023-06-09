<script setup>
import { onMounted, ref } from "vue";
import EventService from "@/services/EventService.js";

const props = defineProps({
    id: {
        required: true,
    }
})
const event = ref(null);

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log("Error", error);
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav id="nav">
      <router-link :to="{ name: 'event-details', params: { id } }">Details</router-link> |
      <router-link :to="{ name: 'event-register', params: { id } }">Register</router-link> |
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>
