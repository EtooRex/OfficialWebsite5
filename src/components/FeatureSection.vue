<script setup lang="ts">
const features = [
  {
    title: "Advanced Simulation",
    description: "Powerful simulation tools for complex engineering problems with various visualization",
    icon: "M19.424 4.573a1 1 0 10-1.092-1.677l-12 7.8a1 1 0 00-.02 1.695l12 8.4a1 1 0 001.137-1.647L8.002 11.8l11.422-7.227z M5.424 4.573a1 1 0 111.092-1.677l12 7.8a1 1 0 01.02 1.695l-12 8.4a1 1 0 01-1.137-1.647L16.848 11.8 5.424 4.573z"
  },
  {
    title: "Design Optimization",
    description: "Optimization that helps you find the best solutions for your reliability challenges",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  },
  {
    title: "Intuitive Interface",
    description: "User-friendly user interface for seamless workflow and collaboration",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Cloud Computing or On-Premise",
    description: "Both cloud-based and on-premise deployment options to suit your organization's needs",
    icon: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
  }
];
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-dark mb-4">Powerful Features</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          AEROS provides cutting-edge tools for engineers and designers to gain reliability insights
        </p>
      </div>
      
      <!-- Large feature card with image -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 h-48 md:h-64 lg:h-80">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Engineering simulation" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h3 class="text-xl md:text-2xl font-bold text-dark mb-4">Next-Gen Engineering Platform</h3>
            <p class="text-base text-gray-600 mb-6">
              AEROS combines advanced simulation capabilities with intuitive design tools to revolutionize how engineers approach complex problems. Our platform enables faster iterations, more accurate results, and better collaboration across teams.
            </p>
            <button class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors self-start">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <!-- Vertical feature cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
        >
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg 
                class="w-7 h-7 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-dark mb-2 text-center md:text-left">{{ feature.title }}</h3>
              <p class="text-gray-600 text-center md:text-left">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>