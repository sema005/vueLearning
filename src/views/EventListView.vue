<script setup>
import EventCard from '../components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    category: 'Vue',
    title: 'Vue for noobs',
    description: 'Vue for nybegynner som ønsker å bli mestere',
    location: 'Torp',
    date: '09 Juni 2023',
    time: '09:00',
    petsAllowed: false,
    organizer: 'Seebrite AS'
  },
  {
    id: 2,
    category: 'Admin',
    title: 'Admin for noobs',
    description: 'Admin for nybegynner som ønsker å bli mestere',
    location: 'Torp',
    date: '09 Juni 2023',
    time: '09:00',
    petsAllowed: false,
    organizer: 'Seebrite AS'
  },
  {
    id: 3,
    category: 'Seebrite',
    title: 'Seebrite for noobs',
    description: 'Seebrite for nybegynner som ønsker å bli mestere',
    location: 'Torp',
    date: '09 Juni 2023',
    time: '09:00',
    petsAllowed: false,
    organizer: 'Seebrite AS'
  }
])
</script>

<template>
  <h1>Events for noobs</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
