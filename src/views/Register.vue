
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Create A New Account</h1>
        <p class="text-gray-500">Fill in to continue</p>
      </div>

      <!-- Registration Form -->
      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- Add this to your form -->
<div>
  <label class="block text-gray-700 mb-2 font-medium">Username</label>
  <input
    v-model="formData.username"
    type="text"
    placeholder="johndoe"
    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
    :class="{ 'border-red-500': errors.username }"
  />
  <span v-if="errors.username" class="text-red-500 text-sm mt-1 block">
    {{ errors.username }}
  </span>
</div>
        <!-- Name Section -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 mb-2 font-medium">First Name</label>
            <input
              v-model="formData.first_name"
              type="text"
              placeholder="John"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': errors.first_name }"
            />
            <span v-if="errors.first_name" class="text-red-500 text-sm mt-1 block">
              {{ errors.first_name }}
            </span>
          </div>
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Last Name</label>
            <input
              v-model="formData.last_name"
              type="text"
              placeholder="Doe"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': errors.last_name }"
            />
            <span v-if="errors.last_name" class="text-red-500 text-sm mt-1 block">
              {{ errors.last_name }}
            </span>
          </div>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Email Address</label>
          <input
            v-model="formData.email"
            type="email"
            placeholder="john.doe@example.com"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            :class="{ 'border-red-500': errors.email }"
          />
          <span v-if="errors.email" class="text-red-500 text-sm mt-1 block">
            {{ errors.email }}
          </span>
        </div>

        <!-- Phone Number -->
         <div>
          <label class="block text-gray-700 mb-2 font-medium">Phone Number</label>
          <div class="flex gap-2">
            <select
              v-model="formData.country_code"
              class="w-1/4 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (IN)</option>
            </select>
            <input
  v-model="formData.phone_number"
  type="tel"
  placeholder="555-123-4567"
  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
  :class="{ 'border-red-500': errors.phone_number }"
/>
<span v-if="errors.phone_number" class="text-red-500 text-sm mt-1 block">
  {{ errors.phone_number }}
</span>
</div>
        </div> 

        <!-- Location -->
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Location</label>
          <input
            v-model="formData.location"
            type="text"
            placeholder="New York, USA"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            :class="{ 'border-red-500': errors.location }"
          />
          <span v-if="errors.location" class="text-red-500 text-sm mt-1 block">
            {{ errors.location }}
          </span>
        </div>

        <!-- Password Section -->
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Create Password</label>
          <div class="relative">
            <input
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors pr-12"
              :class="{ 'border-red-500': errors.password }"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-3 text-gray-400 hover:text-blue-500"
            >
              <!-- Eye icon SVG (same as before) -->
            </button>
          </div>
          <span v-if="errors.password" class="text-red-500 text-sm mt-1 block">
            {{ errors.password }}
          </span>
        </div>

        <!-- Repeat Password -->
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Repeat Password</label>
          <input
            v-model="formData.password_confirmation"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            :class="{ 'border-red-500': errors.password_confirmation }"
          />
          <span v-if="errors.password_confirmation" class="text-red-500 text-sm mt-1 block">
            {{ errors.password_confirmation }}
          </span>
        </div>

        <!-- Submit Section -->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
            :disabled="loading"
          >
            <span v-if="!loading">Create Account</span>
            <span v-else class="flex items-center">
              <!-- Spinner SVG (same as before) -->
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  
  <script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

// Form data
const formData = ref({
  first_name: '',
  last_name: '',
  email: '',
  country_code: '+1', 
  phone_number: '',
  location: '',
  password: '',
  password_confirmation: '',  // Add this field to match with backend
});

// Error handling
const errors = ref({});

// Loading state
const loading = ref(false);

// Show/hide password
const showPassword = ref(false);

// Handle registration
const handleRegister = async () => {
  loading.value = true;
  errors.value = {}; // Reset errors

  try {
    const payload = {
      ...formData.value,
      phone_number: `${formData.value.country_code}${formData.value.phone_number}`, // Combine country code and phone number
    };
    const response = await axios.post('http://localhost:8000/api/register/', payload);
    console.log('Registration successful:', response.data);

    // Redirect to login or dashboard after successful registration
    router.push('/');
  } catch (error) {
    if (error.response && error.response.data) {
      errors.value = error.response.data; // Set errors from backend
    } else {
      console.error('Registration failed:', error);
    }
  } finally {
    loading.value = false;
  }
};
</script>

 
