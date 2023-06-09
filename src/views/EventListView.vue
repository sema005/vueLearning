<script setup>
import EventService from "@/services/EventService.js";
import EventCard from "@/components/EventCard.vue";
import { onMounted, ref, watchEffect, defineProps } from "vue";
import router from "../router";

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
      .catch(() => {
        router.push({
                name: 'network-error'
            })
      });
  });
});
</script>

<template>
  <h1>Events for noobs</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">

      <router-link
      id="page-prev"
      :to="{name: 'event-list', query: { page: page -1 }}"
      rel="prev"
      v-if="page != 1"
      >&#60
      Forrige
    </router-link>
    <p id="page-number"> {{ page }} </p>
    <router-link
    id="page-next"
    :to="{name: 'event-list', query: { page: page + 1 }}"
    rel="prev"
    v-if="hasNextPage()"
    >
    Neste &#62
  </router-link>
</div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: grid;
  width: 290px;
  grid-template-columns: auto auto auto;
  align-items: center;
}

.pagination a {
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

#page-number {
  justify-self: center;
  border: 2px solid black;
  border-radius: 100%;
  padding: .5rem;
  width: fit-content;
}
</style>



