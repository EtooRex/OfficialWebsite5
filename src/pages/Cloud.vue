<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">AEROS Cloud</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Leverage the power of cloud computing to run complex simulations without the need for expensive hardware.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-dark mb-6">Unlimited Computing Power</h2>
          <p class="text-gray-600 mb-6">
            AEROS Cloud gives you access to virtually unlimited computing resources, allowing you to run complex simulations and design optimizations without investing in expensive hardware.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Scalable computing resources</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Pay-as-you-go pricing model</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Secure data storage and processing</span>
            </li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="AEROS Cloud" 
            class="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6">Cloud Pricing Plans</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-bold text-dark mb-2">Starter</h4>
            <p class="text-3xl font-bold text-primary mb-4">$99<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>4 CPU cores</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>16GB RAM</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>100GB Storage</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          
          <div class="border-2 border-primary rounded-lg p-6 shadow-lg relative">
            <div class="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h4 class="text-xl font-bold text-dark mb-2">Professional</h4>
            <p class="text-3xl font-bold text-primary mb-4">$299<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>16 CPU cores</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>64GB RAM</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>500GB Storage</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-bold text-dark mb-2">Enterprise</h4>
            <p class="text-3xl font-bold text-primary mb-4">Custom</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom CPU allocation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom RAM allocation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited storage</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support team</span>
              </li>
            </ul>
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to move to the cloud?</h2>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Get Started with AEROS Cloud
        </button>
      </div>
    </div>
  </div>
</template>