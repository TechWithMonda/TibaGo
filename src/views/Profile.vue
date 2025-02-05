<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <!-- Profile Header -->
        <div class="flex flex-col md:flex-row items-center gap-6 mb-8 border-b pb-8">
          <div class="relative group">
            <img 
              :src="user.avatar" 
              alt="Profile picture"
              class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            >
            <button 
              @click="triggerAvatarUpload"
              class="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-sm hover:bg-blue-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </button>
          </div>
          
          <div class="text-center md:text-left">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ user.name }}</h1>
            <p class="text-gray-600">{{ user.email }}</p>
            <p class="text-gray-600">{{ user.phone }}</p>
          </div>
        </div>
  
        <!-- Profile Form -->
        <form @submit.prevent="handleSave" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- First Name -->
            <div>
              <label class="block text-gray-700 mb-2 font-medium">First Name</label>
              <input
                v-model="formData.firstName"
                type="text"
                :readonly="!isEditing"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'bg-gray-50': !isEditing, 'border-red-500': errors.firstName }"
              >
              <span v-if="errors.firstName" class="text-red-500 text-sm mt-1 block">{{ errors.firstName }}</span>
            </div>
  
            <!-- Last Name -->
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Last Name</label>
              <input
                v-model="formData.lastName"
                type="text"
                :readonly="!isEditing"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'bg-gray-50': !isEditing, 'border-red-500': errors.lastName }"
              >
              <span v-if="errors.lastName" class="text-red-500 text-sm mt-1 block">{{ errors.lastName }}</span>
            </div>
  
            <!-- Email -->
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                v-model="formData.email"
                type="email"
                :readonly="!isEditing"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'bg-gray-50': !isEditing, 'border-red-500': errors.email }"
              >
              <span v-if="errors.email" class="text-red-500 text-sm mt-1 block">{{ errors.email }}</span>
            </div>
  
            <!-- Phone -->
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Phone Number</label>
              <input
                v-model="formData.phone"
                type="tel"
                :readonly="!isEditing"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'bg-gray-50': !isEditing, 'border-red-500': errors.phone }"
              >
              <span v-if="errors.phone" class="text-red-500 text-sm mt-1 block">{{ errors.phone }}</span>
            </div>
  
            <!-- Location -->
            <div class="md:col-span-2">
              <label class="block text-gray-700 mb-2 font-medium">Location</label>
              <input
                v-model="formData.location"
                type="text"
                :readonly="!isEditing"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                :class="{ 'bg-gray-50': !isEditing, 'border-red-500': errors.location }"
              >
              <span v-if="errors.location" class="text-red-500 text-sm mt-1 block">{{ errors.location }}</span>
            </div>
          </div>
  
          <!-- Social Connections -->
          <div class="border-t pt-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Social Connections</h3>
            <div class="flex gap-4">
              <button
                type="button"
                @click="handleSocialConnect('google')"
                class="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                :class="{ 'bg-green-50 border-green-200': user.connectedGoogle }"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <!-- Google SVG icon -->
                </svg>
                {{ user.connectedGoogle ? 'Connected' : 'Connect Google' }}
              </button>
              
              <button
                type="button"
                @click="handleSocialConnect('facebook')"
                class="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                :class="{ 'bg-blue-50 border-blue-200': user.connectedFacebook }"
              >
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <!-- Facebook SVG icon -->
                </svg>
                {{ user.connectedFacebook ? 'Connected' : 'Connect Facebook' }}
              </button>
            </div>
          </div>
  
          <!-- Form Actions -->
          <div class="flex justify-end gap-4 mt-8">
            <button
              v-if="isEditing"
              type="button"
              @click="cancelEdit"
              class="px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              :disabled="loading"
            >
              <span v-if="!loading">{{ isEditing ? 'Save Changes' : 'Edit Profile' }}</span>
              <svg v-else class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <!-- Spinner SVG -->
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const isEditing = ref(false);
  const loading = ref(false);
  const user = reactive({
    name: 'samuel',
    email: '',
    phone: '',
    location: 'nairobi,kenya',
    avatar: 'https://via.placeholder.com/150',
    connectedGoogle: true,
    connectedFacebook: false
  });
  
  const formData = reactive({ ...user });
  const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: ''
  });
  
  const validateForm = () => {
    let isValid = true;
    errors.firstName = !formData.firstName ? 'First name is required' : '';
    errors.lastName = !formData.lastName ? 'Last name is required' : '';
    errors.email = !/^\S+@\S+\.\S+$/.test(formData.email) ? 'Invalid email address' : '';
    errors.phone = !/^\+?[1-9]\d{1,14}$/.test(formData.phone) ? 'Invalid phone number' : '';
    errors.location = !formData.location ? 'Location is required' : '';
  
    Object.values(errors).forEach(error => {
      if (error) isValid = false;
    });
  
    return isValid;
  };
  
  const handleSave = async () => {
    if (!isEditing.value) {
      isEditing.value = true;
      return;
    }
  
    if (!validateForm()) return;
  
    loading.value = true;
    // Simulate API call
    setTimeout(() => {
      Object.assign(user, formData);
      isEditing.value = false;
      loading.value = false;
    }, 1500);
  };
  
  const cancelEdit = () => {
    Object.assign(formData, user);
    isEditing.value = false;
    Object.keys(errors).forEach(key => errors[key] = '');
  };
  
  const triggerAvatarUpload = () => {
    // Implement avatar upload logic
  };
  
  const handleSocialConnect = (provider) => {
    // Implement social connection logic
  };
  </script>
  
  <style>
  input:read-only {
    cursor: default;
  }
  
  input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  </style>