<script setup>
import EventService from "@/services/EventService.js";
import EventCard from "@/components/EventCard.vue";
import { onMounted, ref, watchEffect, defineProps } from "vue";

const events = ref(null);
const totalEvents = ref(0);

const props = defineProps({
  page: {
    required: true,
  }
})

const hasNextPage = () => {
  var totalPages = Math.ceil(totalEvents.value / 2);
  return props.page < totalPages;
};

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, props.page)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      })
      .catch((error) => {
        console.log("Error", error);
      });
  });
});
</script>

<template>
  <h1>Events for noobs</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <router-link
      :to="{name: 'event-list', query: { page: page -1 }}"
      rel="prev"
      v-if="page != 1"
    >
      Forrige
    </router-link>
    <router-link
      :to="{name: 'event-list', query: { page: page + 1 }}"
      rel="prev"
      v-if="hasNextPage()"
    >
      Neste
    </router-link>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>



