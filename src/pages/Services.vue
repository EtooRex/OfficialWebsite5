<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Our Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive services to help you succeed with reliability engineering and asset management.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Consulting Services" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Tailored Solution</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Process Industry - Reliability Consulting & Analysis</h3>
            <p class="text-gray-600 mb-4">
              Our specialized RAM Analysis services optimize asset performance across the entire asset lifecycle 
            </p>
            <router-link to="/ram" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Training Services" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Education</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Training Programs</h3>
            <p class="text-gray-600 mb-4">
              Comprehensive training programs to help your team master reliability engineering and our software tools.
            </p>
            <router-link to="/training" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Custom Development" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Tailored Solutions</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Custom Development</h3>
            <p class="text-gray-600 mb-4">
              Tailored software solutions to meet your specific reliability engineering and asset management needs.
            </p>
            <router-link to="/custom-development" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>
        

        <!--

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Enterprise Solutions" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Enterprise</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Enterprise Solutions</h3>
            <p class="text-gray-600 mb-4">
              Complete enterprise-grade solutions with advanced security, support, and customization options.
            </p>
            <router-link to="/enterprise" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Cloud Services" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Cloud Computing</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Cloud Services</h3>
            <p class="text-gray-600 mb-4">
              Leverage the power of cloud computing for your reliability analysis and asset management needs.
            </p>
            <router-link to="/cloud" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Support Services" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">24/7 Support</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Support Services</h3>
            <p class="text-gray-600 mb-4">
              Expert assistance to help you get the most out of our reliability engineering software and services.
            </p>
            <router-link to="/support" class="text-primary font-medium hover:underline">Learn more →</router-link>
          </div>
        </div>

      -->

      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Why Choose Our Services?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Expert Knowledge</h4>
            <p class="text-gray-600">Our team has decades of experience in reliability engineering and asset management across various industries.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Proven Results</h4>
            <p class="text-gray-600">We have helped organizations improve their reliability performance and reduce operational costs.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Ongoing Support</h4>
            <p class="text-gray-600">We provide continuous support and guidance to ensure your long-term success with reliability engineering.</p>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to get started?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how our services can help you achieve your reliability engineering goals.
        </p>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Contact Us Today
        </button>
      </div>
    </div>
  </div>
</template>