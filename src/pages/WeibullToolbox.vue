<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Weibull Toolbox®</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Advanced statistical analysis suite designed to evaluate and model the failure characteristics of products and systems.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-6">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Weibull Statistical Analysis" 
            class="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold text-dark mb-6">Statistical Analysis</h2>
          <p class="text-gray-600 mb-6">
            Weibull Toolbox® provides comprehensive statistical analysis capabilities for reliability engineering, quality control, and failure analysis. Our advanced algorithms ensure accurate parameter estimation and confidence intervals.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Various distribution supported (Weibull, lognormal, normal, etc)</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Accelerated Life Testing Analysis included</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Confidence interval calculations</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Distribution Fitting</h4>
            <p class="text-gray-600">Fit Weibull and other distributions to your failure data with various parameter estimation</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Probability Plotting</h4>
            <p class="text-gray-600">Create professional probability plots with confidence bounds and goodness-of-fit tests.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Life Data Analysis</h4>
            <p class="text-gray-600">Analyze complete, censored, and interval data with advanced statistical methods.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Reliability Prediction</h4>
            <p class="text-gray-600">Predict reliability metrics including MTTF, failure rates, and warranty analysis.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Test Planning</h4>
            <p class="text-gray-600">Design optimal test plans for reliability demonstration and life testing.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Data Comparison</h4>
            <p class="text-gray-600">Compare multiple datasets and perform statistical hypothesis testing.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Supported Distributions</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 class="font-semibold text-dark">Weibull</h4>
            <p class="text-sm text-gray-600">1, 2 & 3 Parameters</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 class="font-semibold text-dark">Exponential</h4>
            <p class="text-sm text-gray-600">1 Parameter</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 class="font-semibold text-dark">Normal</h4>
            <p class="text-sm text-gray-600">2 Parameters</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 class="font-semibold text-dark">Lognormal</h4>
            <p class="text-sm text-gray-600">2 Parameters</p>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to analyze your reliability data?</h2>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Request Trial License
        </button>
      </div>
    </div>
  </div>
</template>