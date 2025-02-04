<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
<NavBar/>

<router-view></router-view>
<Footer/>
</template>

<style scoped>

</style>
