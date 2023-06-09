<script>
export default {
    props: ['event'],
    inject: ['GStore'],
    methods: {
        register() {

            this.GStore.flashMessage = 'DU har registrert deg for ' + this.event.title

            setTimeout( () => {
                this.GStore.flashMessage = ''
            }, 3000)
            this.$router.push({
                name: 'event-details'
            })
        }
    }
}
</script>

<template>
    <p>Registrering til foredraget</p>
    <button @click="register">Registrer</button>
</template>
