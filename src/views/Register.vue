<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Create A New Account</h1>
          <p class="text-gray-500">fill in to continue</p>
        </div>
  
        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name Section -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 mb-2 font-medium">First Name</label>
              <input
                v-model="firstName"
                type="text"
                placeholder="John"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'border-red-500': errors.firstName }"
              />
              <span v-if="errors.firstName" class="text-red-500 text-sm mt-1 block">{{ errors.firstName }}</span>
            </div>
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Last Name</label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Doe"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'border-red-500': errors.lastName }"
              />
              <span v-if="errors.lastName" class="text-red-500 text-sm mt-1 block">{{ errors.lastName }}</span>
            </div>
          </div>
  
          <!-- Contact Info -->
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Email Address</label>
            <input
              v-model="email"
              type="email"
              placeholder="john.doe@example.com"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-red-500 text-sm mt-1 block">{{ errors.email }}</span>
          </div>
  
          <!-- Phone Number -->
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Phone Number</label>
            <div class="flex gap-2">
              <select
                v-model="countryCode"
                class="w-1/4 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
              </select>
              <input
                v-model="phone"
                type="tel"
                placeholder="555-123-4567"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'border-red-500': errors.phone }"
              />
            </div>
            <span v-if="errors.phone" class="text-red-500 text-sm mt-1 block">{{ errors.phone }}</span>
          </div>
  
          <!-- Location -->
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Location</label>
            <input
              v-model="location"
              type="text"
              placeholder="New York, USA"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': errors.location }"
            />
            <span v-if="errors.location" class="text-red-500 text-sm mt-1 block">{{ errors.location }}</span>
          </div>
  
          <!-- Password Section -->
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Create Password</label>
            <div class="relative">
              <input
                v-model="password"
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
            <span v-if="errors.password" class="text-red-500 text-sm mt-1 block">{{ errors.password }}</span>
          </div>
  
          <!-- Repeat Password -->
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Repeat Password</label>
            <input
              v-model="passwordConfirm"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': errors.passwordConfirm }"
            />
            <span v-if="errors.passwordConfirm" class="text-red-500 text-sm mt-1 block">{{ errors.passwordConfirm }}</span>
          </div>
  
          <!-- Submit Section -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                v-model="rememberMe"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span class="ml-2 text-gray-600">Remember me</span>
            </label>
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
  
        <!-- Social Login Section (same as before) -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Form Fields
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const phone = ref('');
  const location = ref('');
  const countryCode = ref('+1');
  const password = ref('');
  const passwordConfirm = ref('');
  const rememberMe = ref(false);
  const showPassword = ref(false);
  const loading = ref(false);
  
  // Error Handling
  const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    passwordConfirm: ''
  });
  
  // Validation Functions
  const validateName = (name) => name.length >= 2;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10,15}$/.test(phone);
  const validateLocation = (location) => location.length >= 3;
  const validatePassword = (pw) => pw.length >= 6;
  
  const handleRegister = async () => {
    // Reset errors
    errors.value = { 
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      password: '',
      passwordConfirm: ''
    };
  
    let isValid = true;
  
    // Validation checks for all fields
    if (!validateName(firstName.value)) {
      errors.value.firstName = 'First name must be at least 2 characters';
      isValid = false;
    }
  
    if (!validateName(lastName.value)) {
      errors.value.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    }
  
    if (!validateEmail(email.value)) {
      errors.value.email = 'Valid email is required';
      isValid = false;
    }
  
    if (!validatePhone(phone.value)) {
      errors.value.phone = 'Valid phone number required';
      isValid = false;
    }
  
    if (!validateLocation(location.value)) {
      errors.value.location = 'Valid location required';
      isValid = false;
    }
  
    if (!validatePassword(password.value)) {
      errors.value.password = 'Password must be at least 6 characters';
      isValid = false;
    }
  
    if (password.value !== passwordConfirm.value) {
      errors.value.passwordConfirm = 'Passwords do not match';
      isValid = false;
    }
  
    if (!isValid) return;
  
    loading.value = true;
    // Simulate API call
    setTimeout(() => {
      loading.value = false;
      alert('Registration successful!');
    }, 1500);
  };
  </script>