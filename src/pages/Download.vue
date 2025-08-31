<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Download AEROS</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Get started with AEROS today. Choose the right version for your needs and start transforming your engineering workflow.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3 text-center">AEROS Desktop</h3>
          <p class="text-gray-600 mb-6 text-center">
            Full-featured desktop application for Windows, macOS, and Linux.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Complete simulation suite</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Offline capabilities</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced visualization</span>
            </li>
          </ul>
          <div class="space-y-2">
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Download for Windows
            </button>
            <button class="w-full bg-gray-100 hover:bg-gray-200 text-dark font-bold py-2 rounded-lg transition-colors">
              Download for macOS
            </button>
            <button class="w-full bg-gray-100 hover:bg-gray-200 text-dark font-bold py-2 rounded-lg transition-colors">
              Download for Linux
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-2 border-primary relative">
          <div class="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
            Recommended
          </div>
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3 text-center">AEROS Web</h3>
          <p class="text-gray-600 mb-6 text-center">
            Browser-based application accessible from anywhere with an internet connection.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>No installation required</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time collaboration</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Automatic updates</span>
            </li>
          </ul>
          <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
            Launch Web App
          </button>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3 text-center">AEROS Mobile</h3>
          <p class="text-gray-600 mb-6 text-center">
            Mobile companion app for iOS and Android to monitor and manage your simulations on the go.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Monitor simulations</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Push notifications</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Quick result viewing</span>
            </li>
          </ul>
          <div class="space-y-2">
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors">
              Download for iOS
            </button>
            <button class="w-full bg-gray-100 hover:bg-gray-200 text-dark font-bold py-2 rounded-lg transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">System Requirements</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-dark mb-4">Windows</h4>
            <ul class="space-y-2 text-gray-600">
              <li>Windows 10 or later (64-bit)</li>
              <li>8 GB RAM minimum, 16 GB recommended</li>
              <li>4 GB available disk space</li>
              <li>DirectX 11 compatible graphics card</li>
              <li>Internet connection for activation</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-dark mb-4">macOS</h4>
            <ul class="space-y-2 text-gray-600">
              <li>macOS 10.15 or later</li>
              <li>8 GB RAM minimum, 16 GB recommended</li>
              <li>4 GB available disk space</li>
              <li>Metal-compatible graphics card</li>
              <li>Internet connection for activation</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-dark mb-4">Linux</h4>
            <ul class="space-y-2 text-gray-600">
              <li>Ubuntu 18.04 LTS or equivalent</li>
              <li>8 GB RAM minimum, 16 GB recommended</li>
              <li>4 GB available disk space</li>
              <li>OpenGL 3.3 compatible graphics card</li>
              <li>Internet connection for activation</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Need help choosing?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Not sure which version is right for you? Our team can help you choose the best AEROS solution for your specific needs.
        </p>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</template>