<template>
  <div id="app">
    <main-navbar />
    <one-question />
    <main-footer />
  </div>
</template>

<script>
import OneQuestion from './pages/OneQuestion.vue'
import mainNavbar from './layouts/mainNavbar.vue';
import mainFooter from './layouts/mainFooter.vue';

export default {
  name: 'App',
  components: {
    OneQuestion,
    mainNavbar,
    mainFooter
  }
}
</script>
