<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
          {{destination.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '../store.js';

export default {
  data() {
    return {
      destinations: store.destinations,
    }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #c3c3c3;
  padding: 0px 20px;
  z-index: 5;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
  list-style: none;
}

.links {
  padding-right: 20px;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: #42b983;
}
</style>