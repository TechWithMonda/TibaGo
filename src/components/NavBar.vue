<template>
  <nav class="bg-grey  shadow-md p-4">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-xl font-bold"><span class="text-red-600">tibaGo</span>Ai</h1>

      <!-- Hamburger Icon (Only on small screens) -->
      <button @click="isOpen = !isOpen" class="md:hidden text-2xl bg-blue">
        <i class="bi bi-list bg-blue"></i> <!-- Bootstrap hamburger icon -->
      </button>

      <!-- Navbar Items (Hidden on small screens, visible on md+) -->
      <ul class="hidden md:flex space-x-6 justify-start w-full">
        <router-link to="/" class="no-underline hover:no-underline focus:no-underline focus:outline-none no-underline">
          <li class="group flex flex-col items-center cursor-pointer">
            <i class="bi bi-house text-2xl text-white-600 group-hover:text-blue-500 transition duration-300"></i>
            <span class="text-xs text-white-500 group-hover:text-blue-500">Home</span>
          </li>
        </router-link>
   
        <router-link 
  to="/Locator" 
  class="no-underline hover:no-underline focus:no-underline focus:outline-none"
>
  <li class="group flex flex-col items-center cursor-pointer">
    <i class="bi bi-geo-alt-fill text-2xl text-gray-600 group-hover:text-blue-500 transition duration-300"></i>
    <span class="text-xs text-gray-600 group-hover:text-blue-500 transition duration-300">Location</span>
  </li>
</router-link>

        <li class="group flex flex-col items-center cursor-pointer">
          <i class="bi bi-headset text-2xl  group-hover:text-blue-500 transition duration-300"></i>
          <span class="text-xs  group-hover:text-blue-500">Support</span>
        </li>
        <li class="group flex flex-col items-center cursor-pointer">
          <i class="bi bi-journal-plus text-2xl group-hover:text-blue-500 transition duration-300"></i>
          <span class="text-xs group-hover:text-blue-500">Records</span>
        </li>
        <li class="group flex flex-col items-center cursor-pointer">
          <i class="bi bi-bell text-2xl group-hover:text-blue-500 transition duration-300"></i>
          <span class="text-xs group-hover:text-blue-500">Alerts</span>
        </li>
        <li class="group flex flex-col items-center cursor-pointer">
          <i class="bi bi-person-circle text-2xl group-hover:text-blue-500 transition duration-300"></i>
          <span class="text-xs group-hover:text-blue-500">Nurse</span>
        </li>
        <div class="flex items-center bg-white text-grey rounded-full px-4 py-2 w-full max-w-md">
  <i class="bi bi-search bg-grey"></i>
  <input 
    type="text" 
    placeholder="Search for Nearby Doctors/Hospitals" 
    class="bg-w text-grey placeholder-gray-400 outline-none ml-2 w-full"
  />
</div>
  <router-link to="Profile">
    <li class="group flex flex-col items-center cursor-pointer justify-end">
            <i class="bi bi-person-circle text-2xl group-hover:text-blue-500 transition duration-300"></i>
            <span class="text-xs  group-hover:text-blue-500">Profile</span>
          </li>
  </router-link>
   
      </ul>
    </div>

    <!-- Mobile Menu (Appears when isOpen is true) -->
    <ul v-if="isOpen" class="md:hidden mt-4 space-y-4 text-center">
   
      <router-link to="/" class="no-underline hover:no-underline focus:no-underline focus:outline-none">
          <li class="group flex flex-col items-center cursor-pointer">
            <i class="bi bi-house text-2xl text-white-600 group-hover:text-blue-500 transition duration-300"></i>
            <span class="text-xs text-white-500 group-hover:text-blue-500">Home</span>
          </li>
        </router-link>
      <router-link 
  to="/Locator" 
  class="no-underline hover:no-underline focus:no-underline focus:outline-none"
>
  <li class="group flex flex-col items-center cursor-pointer">
    <i class="bi bi-geo-alt-fill text-2xl text-gray-600 group-hover:text-blue-500 transition duration-300"></i>
    <span class="text-xs text-gray-600 group-hover:text-blue-500 transition duration-300">Location</span>
  </li>
</router-link>
      <li class="group flex flex-col items-center cursor-pointer">
        <i class="bi bi-headset text-2xl text-black-600 group-hover:text-blue-500 transition duration-300"></i>
        <span class="text-xs  group-hover:text-blue-500">Support</span>
      </li>
      <li class="group flex flex-col items-center cursor-pointer">
        <i class="bi bi-journal-plus text-2xl text-black-600 group-hover:text-blue-500 transition duration-300"></i>
        <span class="text-xs  group-hover:text-blue-500">Records</span>
      </li>
      <li class="group flex flex-col items-center cursor-pointer">
        <i class="bi bi-bell text-2xl text-black-600 group-hover:text-blue-500 transition duration-300"></i>
        <span class="text-xs text-black-500 group-hover:text-blue-500">Alerts</span>
      </li>
      <li class="group flex flex-col items-center cursor-pointer">
        <i class="bi bi-person-circle text-2xl text-black-600 group-hover:text-blue-500 transition duration-300"></i>
        <span class="text-xs text-black-500 group-hover:text-blue-500">Nurse</span>
      </li>
      <li class="group flex flex-col items-center cursor-pointer justify-end">
          <i class="bi bi-person-circle text-2xl text-black-600 group-hover:text-blue-500 transition duration-300"></i>
          <span class="text-xs text-black-500 group-hover:text-blue-500">Profile</span>
        </li>
    
    </ul>
    <ul v-if="!isOpen" class="md:hidden mt-4 space-y-4 text-center group flex flex-col items-center cursor-pointer justify-end">
      <div class="flex items-center bg-white text-grey rounded-full px-4 py-2 w-full max-w-md">
  <i class="bi bi-search bg-grey"></i>
  <input 
    type="text" 
    placeholder="Search for Nearby Doctors/Hospitals" 
    class="bg-w text-grey placeholder-gray-400 outline-none ml-2 w-full"
  />
</div>
      </ul>
    
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Control the mobile menu
const isOpen = ref(false);
</script>
