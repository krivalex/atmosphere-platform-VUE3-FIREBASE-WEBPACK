<template>
  <div id="app">
    <div v-if="$route.name !== 'first-view'">
      <main-navbar />
    </div>
    <transition name="grotest" mode="out-in">
      <router-view />
    </transition>
    <div v-if="$route.name !== 'first-view'">
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
