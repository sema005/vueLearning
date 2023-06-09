<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/EventCard.vue'

export default {
  inject: ['GStore']
}
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="GStore.flashMessage">
        {{ GStore.flashMessage }}
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{name: 'event-list'}">Events</RouterLink> |
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@keyframes yellowFade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowFade;
  animation-duration: 3s;
}

#layout {
  font-family: avenir, Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
