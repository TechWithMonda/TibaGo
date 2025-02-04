<template>
  <div class="main">
    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20 bg-white">
      <div class="max-w-2xl space-y-6 text-center lg:text-left mb-10 lg:mb-0">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          <span class="text-red-600">Afya</span>Help
        </h1>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
          Instant Medical Assistance at Your Fingertips! 🚑📱<br>
          Your life-saving emergency health companion in Kenya.
        </p>
        <button type="button" 
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105">
          🚨 EMERGENCY
        </button>
      </div>

      <!-- Hero Image -->
      <div class="lg:w-1/2 flex justify-center">
        <img :src="doctor" alt="Doctor Image" 
             class="w-full max-w-md xl:max-w-2xl rounded-2xl shadow-xl border-8 border-white" />
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-16">
          🌟 Key Features
        </h2>

        <!-- Feature 1 -->
        <div class="flex flex-col lg:flex-row items-center gap-12 mb-20 p-8 bg-white rounded-3xl shadow-lg">
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
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img :src="doctor" alt="Emergency SOS" 
                 class="rounded-xl shadow-md w-full h-64 object-cover" />
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20 p-8 bg-white rounded-3xl shadow-lg">
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
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img :src="doctor" alt="Hospital Locator" 
                 class="rounded-xl shadow-md w-full h-64 object-cover" />
          </div>
        </div>

        <!-- More features following the same pattern -->

      </div>
    </div>

    <!-- Professionals Section -->
    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-12">
          For Medical Professionals
        </h2>
        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <img :src="doctor" alt="Video Consultation" 
                   class="rounded-lg object-cover h-48 w-full" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Live Video Consultations
            </h3>
            <p class="text-gray-600">
              Connect with patients through secure video calls
            </p>
            <button class="mt-4 text-red-600 font-semibold hover:underline">
              Learn More →
            </button>
          </div>

          <!-- Other cards follow same pattern -->

        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="relative bg-red-600 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <img :src="stats" alt="Statistics" 
                 class="rounded-2xl shadow-2xl border-8 border-white" />
          </div>
          <div class="lg:w-1/2 text-white mt-12 lg:mt-0">
            <h2 class="text-4xl font-bold mb-8">
              Nationwide Emergency Statistics
            </h2>
            <div class="space-y-6 text-lg leading-relaxed">
              <p>Over 3,000 annual road fatalities in Kenya</p>
              <p>80% of casualties are pedestrians & passengers</p>
              <p>4x increase in road deaths over 30 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom animations */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>


<script setup>
import doctor from '../assets/doctor.png'; 
import stats from '../assets/stats.png'; // Import the image from assets
</script>
