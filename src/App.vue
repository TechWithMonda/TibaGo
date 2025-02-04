<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar v-if="route.meta.showHeaderFooter !== false" />
  <router-view />
  <Footer v-if="route.meta.showHeaderFooter !== false" />
</template>

<style scoped>
/* Add global styles if needed */
</style>