<script setup lang="ts">
</script>

<template>
  <section class="relative pt-20 md:pt-32 pb-20 md:pb-32 flex content-center items-center justify-center min-h-screen">
    <!-- Background gradient -->
    <div class="absolute top-0 w-full h-full bg-gradient-to-b from-dark to-primary"></div>
    
    <div class="container relative mx-auto px-4 z-10">
      <div class="flex flex-col items-center">
        <div class="w-full text-center mb-8">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Design Better, Simulate Better with AEROS
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto">
            Next-gen platform for asset reliability simulation and design optimization
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
            <button class="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors">
              Request Trial Access
            </button>
        <button class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg transition-colors">
              Schedule a Walkthrough 
            </button>
          </div>
        </div>
        
        <!-- Large video illustration below buttons -->
        <div class="w-full max-w-5xl mx-auto">
          <div class="rounded-lg overflow-hidden shadow-2xl">
            <video autoplay loop muted playsinline class="w-full h-auto">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>