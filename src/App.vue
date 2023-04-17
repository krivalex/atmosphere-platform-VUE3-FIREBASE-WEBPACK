<template>
  <div id="app">
    <div v-if="$route.name !== 'first-view' && $route.name !== 'result'">
      <main-navbar />
    </div>
    <router-view />
    <div v-if="$route.name !== 'first-view' && $route.name !== 'result'">
      <main-footer />
    </div>
  </div>
</template>

<script>
import mainNavbar from './layouts/mainNavbar.vue';
import mainFooter from './layouts/mainFooter.vue';

export default {
  name: 'App',
  components: {
    mainNavbar,
    mainFooter
  }
}
</script>

<style>
</style>
