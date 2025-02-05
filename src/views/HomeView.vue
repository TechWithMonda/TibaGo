<template>
  <div class="main">
    <div class="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20 bg-white">
  <!-- Left Section: Text and Emergency Button -->
  <div class="max-w-2xl space-y-6 text-center lg:text-left mb-10 lg:mb-0 mr-8">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
      <span class="text-red-600">tibaGo</span>AsistantAi
    </h1>
    <p class="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-100">
      Instant Medical Assistance at Your Fingertips! 🚑📱<br>
      Your life-saving emergency health companion in Kenya.
    </p>
    <button type="button" 
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 animate-fade-in-up delay-200">
      🚨 EMERGENCY
    </button>
  </div>

  <!-- Right Section: Card with Image and Buttons -->
  <div class="w-full max-w-md xl:max-w-2xl bg-white rounded-2xl shadow-xl border-8 border-white overflow-hidden">
    <!-- Hero Image with Floating Animation -->
    <div class="flex justify-center animate-float">
      <img :src="doctor" alt="Doctor Image" class="w-1/2 rounded-t-2xl" />
    </div>

    <!-- Login and Sign Up Buttons -->
    <div class="p-6 flex justify-between">
      <router-link to="Login">
        <button
          type="button"
          class="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </router-link>
      <router-link to="Register">
        <button
          type="button"
          class="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Register
        </button>
      </router-link>
    </div>
  </div>
</div>


    <!-- Features Section -->
    <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-16 animate-fade-in-up delay-300">
          🌟 Key Features
        </h2>

        <!-- Feature 1 -->
        <div class="flex flex-col lg:flex-row items-center gap-12 mb-20 p-8 bg-white animate-slide-in-left">
          <div class="lg:w-1/2">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              One-Tap Emergency SOS
            </h3>
            <div class="space-y-4 text-gray-600">
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Instant connection to ambulances, police, and emergency services
              </p>
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Real-time ambulance tracking and location sharing
              </p>
              <div class="p-4 bg-red-50 rounded-lg mt-4">
                <p class="font-semibold text-red-600">🚑 Problem Solved:</p>
                <p>Quick emergency response with live tracking and automatic location sharing</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img :src="doctor" alt="Emergency SOS" 
                 class="rounded-xl shadow-md w-full h-64 object-cover animate-pop-in delay-400" />
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20 p-8 animate-slide-in-right">
          <div class="lg:w-1/2">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Hospital Locator
            </h3>
            <div class="space-y-4 text-gray-600">
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Real-time map with nearest medical facilities
              </p>
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Filter by specialty and availability
              </p>
              <div class="p-4 bg-red-50 rounded-lg mt-4">
                <p class="font-semibold text-red-600">🏥 Problem Solved:</p>
                <p>Instant access to nearby medical facilities with live availability updates</p>
                <router-link 
                to="/Locator" class="no-underline hover:no-underline focus:no-underline focus:outline-none">
  <li class="group flex flex-col items-center cursor-pointer">
    <i class="bi bi-geo-alt-fill text-2xl text-gray-600 group-hover:text-blue-500 transition duration-300"></i>
    <span class="text-xs text-gray-600 group-hover:text-blue-500 transition duration-300">Click To See Hospitals near you</span>
  </li>
</router-link>
              </div>
    
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img :src="map" alt="Hospital Locator" 
                 class="rounded-xl shadow-md w-92 h-87 object-cover animate-pop-in delay-500" />
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex flex-col lg:flex-row items-center gap-12 mb-20 p-8 bg-white animate-slide-in-left">
          <div class="lg:w-1/2">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Medical Records Access
            </h3>
            <div class="space-y-4 text-gray-600">
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Secure cloud storage for medical history
              </p>
              <p class="flex items-start">
                <span class="text-red-500 mr-2">●</span>
                Emergency access for medical personnel
              </p>
              <div class="p-4 bg-red-50 rounded-lg mt-4">
                <p class="font-semibold text-red-600">📁 Problem Solved:</p>
                <p>Instant access to critical medical information during emergencies</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img :src="doctor" alt="Medical Records" 
                 class="rounded-xl shadow-md w-full h-64 object-cover animate-pop-in delay-600" />
          </div>
        </div>
      </div>
    </div>

    <!-- Professionals Section -->
    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-up delay-700">
           AI trained Medical Professionals Model
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(card, index) in cards" :key="index" 
               class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all animate-pop-in" 
               :style="`animation-delay: ${700 + (index * 100)}ms`">
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <img :src="doctor" alt="Video Consultation" 
                   class="rounded-lg object-cover h-48 w-full" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              {{ card.title }}
            </h3>
            <p class="text-gray-600">
              {{ card.description }}
            </p>
            <button class="mt-4 text-red-600 font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="relative bg-red-600 py-20 animate-fade-in delay-1000">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <img :src="stats" alt="Statistics" 
                 class="rounded-2xl shadow-2xl border-8 border-white animate-slide-in-left delay-1100" />
          </div>
          <div class="lg:w-1/2 text-white mt-12 lg:mt-0 animate-fade-in-up delay-1200">
            <h2 class="text-4xl font-bold mb-8">
              Nationwide Emergency Statistics
            </h2>
            <div class="space-y-6 text-lg leading-relaxed">
              <p class="flex items-center">
                <span class="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3">!</span>
                Over 3,000 annual road fatalities in Kenya
              </p>
              <p class="flex items-center">
                <span class="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3">!</span>
                80% of casualties are pedestrians & passengers
              </p>
              <p class="flex items-center">
                <span class="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center mr-3">!</span>
                4x increase in road deaths over 30 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import doctor from '../assets/doctor.png';
import stats from '../assets/stats.png';
import map from '../assets/map.png';

const cards = ref([
  {
    title: 'Live Video Consultations',
    description: 'Secure virtual consultations with patients'
  },
  {
    title: 'Patient Management',
    description: 'Centralized patient records and history'
  },
  {
    title: 'Emergency Alerts',
    description: 'Real-time emergency notifications'
  }
]);
</script>

<style>
/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pop-in {
  animation: popIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Animation Delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-1000 { animation-delay: 1000ms; }
.delay-1100 { animation-delay: 1100ms; }
.delay-1200 { animation-delay: 1200ms; }

/* Smooth transitions */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-slide-in-left,
  .animate-slide-in-right,
  .animate-float,
  .animate-pop-in,
  .animate-fade-in {
    animation: none !important;
    transition: none !important;
  }
}

/* Responsive Design Tweaks */
@media (max-width: 768px) {
  .animate-float {
    animation: fadeInUp 0.8s ease-out forwards;
  }
}
</style>