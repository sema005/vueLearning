<script setup>
import router from '../../router/index.js'
const props = defineProps({
    event: {
        required: true,
    }
})

const register = () => {
    router.push({
        name: 'event-details',
    })
}
</script>

<template>
    <p>Registrering til foredraget</p>
    <button @click="register()">Registrer</button>
</template>
