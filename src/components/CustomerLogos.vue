<script setup lang="ts">
const customers = [
  { name: "NXP", logo: "/src/assets/nxp.png" },
  { name: "Petronas", logo: "/src/assets/petronas.svg" },
  { name: "PLN", logo: "/src/assets/pln.png" },
  { name: "PJB", logo: "/src/assets/pjb.png" },
  { name: "Razer", logo: "/src/assets/razer.png" },
  { name: "HKPC", logo: "/src/assets/hkpc.png" }
];
</script>

<template>
  <section class="py-10 md:py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-gray-500 text-base md:text-lg font-medium mb-6 md:mb-8">Trusted by industry leaders worldwide</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
        <div 
          v-for="(customer, index) in customers" 
          :key="index"
          class="flex justify-center"
        >
          <img 
            :src="customer.logo" 
            :alt="`${customer.name} logo`" 
            class="h-6 sm:h-8 md:h-10 object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>