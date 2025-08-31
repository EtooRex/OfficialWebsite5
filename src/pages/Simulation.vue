<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">AEROS Simulation</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Advanced simulation tools for complex engineering problems with real-time feedback and visualization.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-dark mb-6">Powerful Simulation Engine</h2>
          <p class="text-gray-600 mb-6">
            AEROS Simulation provides industry-leading accuracy and performance for your most complex engineering challenges. Our advanced algorithms and optimized solvers deliver results faster than traditional approaches.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Multi-physics simulation capabilities</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time visualization and feedback</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>High-performance computing integration</span>
            </li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9d2b11a0c565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="AEROS Simulation" 
            class="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Fast Performance</h3>
          <p class="text-gray-600">
            Our optimized algorithms deliver results up to 10x faster than traditional simulation tools, allowing you to iterate more quickly.
          </p>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Accurate Results</h3>
          <p class="text-gray-600">
            Industry-leading accuracy with validated models and solvers that have been tested against real-world data.
          </p>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Modular Design</h3>
          <p class="text-gray-600">
            Customize your simulation environment with modular components that can be combined to solve your specific engineering challenges.
          </p>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to transform your simulation workflow?</h2>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Get Started with AEROS Simulation
        </button>
      </div>
    </div>
  </div>
</template>