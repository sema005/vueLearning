<script setup>
import { onMounted, ref } from "vue";
import EventService from "@/services/EventService.js";
import router from "../../router";

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
      if(error.response && error.response.status == 404){ 
          router.push({
              name: '404Resource',
              params: {
                  resource: 'foredraget'
                }
            })
        }else {
            router.push({
                name: 'network-error'
            })
        }

    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav id="nav">
      <router-link :to="{ name: 'event-details' }">Details</router-link> |
      <router-link :to="{ name: 'event-register'}">Register</router-link> |
      <router-link :to="{ name: 'event-edit'}">Edit</router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>
