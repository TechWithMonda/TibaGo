<script setup>
import doctor from '../assets/doctor.png'; 
import stats from '../assets/stats.png'; // Import the image from assets
</script>

<template>
  <div class="main">
    <div class="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 bg-white">
      <div class="max-w-lg space-y-4 text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">AfyaHelp</h1>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed">
          AfyaHelp – Instant Medical Assistance at Your Fingertips! 🚑📱
          AfyaHelp is a life-saving emergency health assistance app designed to help Kenyans access medical services instantly when they need them the most.
          Whether you need an ambulance, a nearby hospital, first-aid instructions, or medication reminders, AfyaHelp is your go-to health companion.
        </p>
        <button type="button" 
          class="bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition">
          EMERGENCY
        </button>
       
      </div>
     

      <!-- Image on the right -->
      <div class="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-2/5">
        <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg" />
      </div>
    </div>
    <div class=" flex items-center justify-center my-2">
  <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mx-2">
    🌟 Key Features & How They Work
  </h1>
 
</div>

<div class="container">
  <div class="row">
    <div class="col align-self-start">
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
  <div class="flex-1">
    <h4 class="text-xl font-semibold">1. Emergency Assistance (One-Tap SOS)</h4>
    <p>🚑🔹 Problem: In emergencies, finding the right help quickly can be difficult.<br>
      ✅ Solution: One-Tap Emergency Buttons to instantly call an ambulance, police, or Red Cross.<br>
      Live Tracking of Ambulances (for faster response).<br>
      Emergency Contact Sharing – Notify family or friends with one tap.
    </p>
  </div>
  <div class="mt-6 lg:mt-0  justify-center lg:justify-end  lg:w-2/5">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg" />
  </div>
</div>
    </div>
    <div class="col align-self-center">
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
  <div class="flex-1">
    <div class="mt-6 lg:mt-0  justify-center lg:justify-end  lg:w-2/5">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg" />
  </div>
    <h4 class="text-xl font-semibold">1. Emergency Assistance (One-Tap SOS)</h4>
    <p>🚑🔹 Problem: In emergencies, finding the right help quickly can be difficult.<br>
      ✅ Solution: One-Tap Emergency Buttons to instantly call an ambulance, police, or Red Cross.<br>
      Live Tracking of Ambulances (for faster response).<br>
      Emergency Contact Sharing – Notify family or friends with one tap.
    </p>
  </div>
 
</div>
    </div>
    <div class="col align-self-end">
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
  <div class="flex-1">
    <h4 class="text-xl font-semibold">1. Emergency Assistance (One-Tap SOS)</h4>
    <p>🚑🔹 Problem: In emergencies, finding the right help quickly can be difficult.<br>
      ✅ Solution: One-Tap Emergency Buttons to instantly call an ambulance, police, or Red Cross.<br>
      Live Tracking of Ambulances (for faster response).<br>
      Emergency Contact Sharing – Notify family or friends with one tap.
    </p>
  </div>
  <div class="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-2/5">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg" />
  </div>
</div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col"><h4 class="text-xl font-semibold">1. Emergency Assistance (One-Tap SOS)</h4>
  
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque cum sequi, unde recusandae distinctio ipsum blanditiis laborum sed eum inventore facilis laudantium cupiditate ducimus rerum velit incidunt fugit sapiente?</p></div>
  <div class="col"> <div class="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-2/5">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg" />
  </div></div>
  <div class="w-100"></div>
  <div class="col"><h4 class="text-xl font-semibold">1. Emergency Assistance (One-Tap SOS)</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit culpa accusamus totam omnis ab odio temporibus quod possimus cumque, eum placeat, voluptas, alias quos maiores expedita blanditiis ut itaque!</p></div>
  <div class="col"> <div class="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-2/5">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-3/4 md:w-2/4 lg:w-full max-w-xs md:max-w-sm rounded-lg float-left" />
  </div></div>
</div>

<div class="section3 flex flex-wrap justify-center gap-4">
  <h2 class="w-full text-center">Certified Professional Doctors / Hospital Applications</h2>
  
  <div class="flex flex-col items-center w-full sm:w-3/4 md:w-2/4 lg:w-1/3">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-full max-w-xs rounded-lg" />
    <h3>loas</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni? Voluptas error dolore aspernatur dolorum doloribus assumenda nulla alias deserunt dolores ex vel asperiores in non, eum, natus praesentium voluptate.</p>
  </div>
  
  <div class="flex flex-col items-center w-full sm:w-3/4 md:w-2/4 lg:w-1/3">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-full max-w-xs rounded-lg" />
    <h3>loas</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni? Voluptas error dolore aspernatur dolorum doloribus assumenda nulla alias deserunt dolores ex vel asperiores in non, eum, natus praesentium voluptate.</p>
  </div>
  
  <div class="flex flex-col items-center w-full sm:w-3/4 md:w-2/4 lg:w-1/3">
    <img :src="doctor" alt="Doctor Image" class="h-auto w-full max-w-xs rounded-lg" />
    <h3>loas</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni? Voluptas error dolore aspernatur dolorum doloribus assumenda nulla alias deserunt dolores ex vel asperiores in non, eum, natus praesentium voluptate.</p>
  </div>
</div>
<div class="section4 flex flex-wrap items-center justify-center gap-4 py-20">
  <img :src="stats" alt="Doctor Image" class="h-auto w-full sm:w-1/2 md:w-1/3 max-w-xs rounded-lg" />
  <div class="flex flex-col w-full sm:w-1/2 md:w-2/3">
    <h2 class="text-center sm:text-left">Number Reported Incidents Nationwide</h2>
    <p class="text-justify">
      Road traffic crashes exert a huge burden on Kenya's economy and health care services. Current interventions are sporadic, uncoordinated, and ineffective. This report offers a descriptive analysis of secondary data obtained from a variety of published literature and unpublished reports. Over three thousand people are killed annually on Kenyan roads. A four-fold increase in road fatalities has been experienced over the last 30 years. More than 75% of road traffic casualties are economically productive young adults. Pedestrians and passengers are the most vulnerable; they account for 80% of the deaths. Buses and matatus are the vehicles most frequently involved in fatal crashes. Characteristics of crashes vary considerably between urban and rural settings: pedestrians are more likely to be killed in urban areas, whereas passengers are the majority killed on intercity highways that transverse rural settings. Road safety interventions have not made any measurable impact in reducing the numbers, rates, and consequences of road crashes. Despite the marked increase in road crashes in Kenya, little effort has been made to develop and implement effective interventions. Impediments to road traffic injury prevention and control include ineffective coordination, inadequate resources and qualified personnel, and limited capacity to implement and monitor interventions. There is need to improve the collection and availability of accurate data to help in recognizing traffic injury as a priority public health problem, raising awareness of policymakers on existing effective countermeasures, and mobilizing resources for implementation. Establishment of an effective lead agency and development of stakeholder coalitions to address the problem are desirable.
    </p>
  </div>
</div>

    </div>

</template>

<style scoped>

</style>
