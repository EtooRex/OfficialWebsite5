<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubscribed = ref(false)
const isLoading = ref(false)

const handleSubscribe = async () => {
  if (!email.value) return
  
  isLoading.value = true
  
  // Simulate API call
  setTimeout(() => {
    isSubscribed.value = true
    isLoading.value = false
    email.value = ''
  }, 1000)
}
</script>

<template>
  <section class="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-primary/10">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-dark mb-4">
          Stay Updated with AEROS
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get the latest updates on new features, tutorials, and engineering insights delivered straight to your inbox.
        </p>
        
        <div v-if="!isSubscribed" class="max-w-md mx-auto">
          <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3">
            <div class="flex-1">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email address"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              :disabled="isLoading"
              class="bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center min-w-[120px]"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="!isLoading">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </form>
          
          <p class="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
        
        <div v-else class="max-w-md mx-auto">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Thank you for subscribing!</h3>
            <p class="text-gray-600">
              You'll receive our latest updates and insights in your inbox soon.
            </p>
          </div>
        </div>
        
      <!--  <div class="flex flex-wrap justify-center items-center gap-6 mt-12 opacity-60">
          <span class="text-sm text-gray-500">Trusted by engineers at:</span>
          <div class="flex flex-wrap justify-center items-center gap-6">
            <img src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Company logo" class="h-6 opacity-50" />
            <img src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Company logo" class="h-6 opacity-50" />
            <img src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="Company logo" class="h-6 opacity-50" />
            <img src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Company logo" class="h-6 opacity-50" />
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>