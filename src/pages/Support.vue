<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Support Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Expert assistance to help you get the most out of AEROS products.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-dark mb-6">Dedicated Support</h2>
          <p class="text-gray-600 mb-6">
            Our team of expert engineers and support specialists are here to help you solve problems, optimize your workflows, and get the most out of AEROS products.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Technical troubleshooting</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Workflow optimization</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Best practices guidance</span>
            </li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="AEROS Support" 
            class="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Support Plans</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-bold text-dark mb-2">Standard</h4>
            <p class="text-3xl font-bold text-primary mb-4">Included</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Email support</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Knowledge base access</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Community forum</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Business hours only</span>
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
            <p class="text-3xl font-bold text-primary mb-4">$199<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Everything in Standard</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Phone support</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority response</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Extended hours</span>
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
                <span>Everything in Professional</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support team</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 support</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>On-site support options</span>
              </li>
            </ul>
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Email Support</h3>
          <p class="text-gray-600 mb-4">
            Get help from our team of experts via email, with detailed responses to your questions and issues.
          </p>
          <a href="#" class="text-primary font-medium hover:underline">Contact support →</a>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Phone Support</h3>
          <p class="text-gray-600 mb-4">
            Speak directly with our support team for immediate assistance with your AEROS products.
          </p>
          <a href="#" class="text-primary font-medium hover:underline">Call support →</a>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Community Forum</h3>
          <p class="text-gray-600 mb-4">
            Connect with other AEROS users, share knowledge, and get help from the community.
          </p>
          <a href="#" class="text-primary font-medium hover:underline">Join the community →</a>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Need help with AEROS?</h2>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  </div>
</template>