<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">API Reference</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive documentation for AEROS APIs and integration points.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 class="text-lg font-bold text-dark mb-4">API Categories</h3>
            <ul class="space-y-2">
              <li>
                <a href="#simulation-api" class="text-primary font-medium">Simulation API</a>
              </li>
              <li>
                <a href="#design-api" class="text-gray-600 hover:text-primary transition-colors">Design API</a>
              </li>
              <li>
                <a href="#cloud-api" class="text-gray-600 hover:text-primary transition-colors">Cloud API</a>
              </li>
              <li>
                <a href="#data-api" class="text-gray-600 hover:text-primary transition-colors">Data API</a>
              </li>
              <li>
                <a href="#auth-api" class="text-gray-600 hover:text-primary transition-colors">Authentication API</a>
              </li>
              <li>
                <a href="#admin-api" class="text-gray-600 hover:text-primary transition-colors">Admin API</a>
              </li>
            </ul>
            
            <h3 class="text-lg font-bold text-dark mt-8 mb-4">Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">Getting Started</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">Authentication</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">Error Handling</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">Rate Limiting</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">Webhooks</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">SDKs & Libraries</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Main content -->
        <div class="lg:col-span-3">
          <div id="simulation-api" class="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 class="text-2xl font-bold text-dark mb-6">Simulation API</h2>
            <p class="text-gray-600 mb-6">
              The Simulation API allows you to create, manage, and run simulations programmatically. You can integrate simulation capabilities into your own applications and workflows.
            </p>
            
            <div class="border-t border-gray-200 pt-6 mb-6">
              <h3 class="text-xl font-bold text-dark mb-4">Endpoints</h3>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">GET</span>
                  <code class="text-sm font-mono">/api/v1/simulations</code>
                </div>
                <p class="text-gray-600 mb-2">List all simulations</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">GET</span>
                  <code class="text-sm font-mono">/api/v1/simulations/{id}</code>
                </div>
                <p class="text-gray-600 mb-2">Get a specific simulation</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">POST</span>
                  <code class="text-sm font-mono">/api/v1/simulations</code>
                </div>
                <p class="text-gray-600 mb-2">Create a new simulation</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">PUT</span>
                  <code class="text-sm font-mono">/api/v1/simulations/{id}</code>
                </div>
                <p class="text-gray-600 mb-2">Update a simulation</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">DELETE</span>
                  <code class="text-sm font-mono">/api/v1/simulations/{id}</code>
                </div>
                <p class="text-gray-600 mb-2">Delete a simulation</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">POST</span>
                  <code class="text-sm font-mono">/api/v1/simulations/{id}/run</code>
                </div>
                <p class="text-gray-600 mb-2">Run a simulation</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
              
              <div>
                <div class="flex items-center mb-2">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">GET</span>
                  <code class="text-sm font-mono">/api/v1/simulations/{id}/results</code>
                </div>
                <p class="text-gray-600 mb-2">Get simulation results</p>
                <a href="#" class="text-primary text-sm font-medium hover:underline">View documentation →</a>
              </div>
            </div>
            
            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-xl font-bold text-dark mb-4">Code Examples</h3>
              
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-dark mb-2">Python</h4>
                <pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>import requests

API_KEY = "your_api_key"
BASE_URL = "https://api.aeros.com/v1"

# Create a new simulation
simulation_data = {
    "name": "My Simulation",
    "description": "A test simulation",
    "model": "model_id",
    "parameters": {
        "param1": 1.0,
        "param2": 2.0
    }
}

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(
    f"{BASE_URL}/simulations",
    json=simulation_data,
    headers=headers
)

simulation_id = response.json()["id"]

# Run the simulation
response = requests.post(
    f"{BASE_URL}/simulations/{simulation_id}/run",
    headers=headers
)

# Get simulation results
response = requests.get(
    f"{BASE_URL}/simulations/{simulation_id}/results",
    headers=headers
)

results = response.json()
print(results)</code></pre>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-dark mb-2">JavaScript</h4>
                <pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>const API_KEY = "your_api_key";
const BASE_URL = "https://api.aeros.com/v1";

// Create a new simulation
const simulationData = {
  name: "My Simulation",
  description: "A test simulation",
  model: "model_id",
  parameters: {
    param1: 1.0,
    param2: 2.0
  }
};

const headers = {
  "Authorization": `Bearer ${API_KEY}`,
  "Content-Type": "application/json"
};

fetch(`${BASE_URL}/simulations`, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(simulationData)
})
  .then(response => response.json())
  .then(data => {
    const simulationId = data.id;
    
    // Run the simulation
    return fetch(`${BASE_URL}/simulations/${simulationId}/run`, {
      method: "POST",
      headers: headers
    });
  })
  .then(response => response.json())
  .then(data => {
    // Get simulation results
    const simulationId = data.id;
    return fetch(`${BASE_URL}/simulations/${simulationId}/results`, {
      headers: headers
    });
  })
  .then(response => response.json())
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error("Error:", error);
  });</code></pre>
              </div>
            </div>
          </div>
          
          <div id="design-api" class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-dark mb-6">Design API</h2>
            <p class="text-gray-600 mb-6">
              The Design API allows you to create, manage, and optimize designs programmatically. You can integrate design optimization capabilities into your own applications and workflows.
            </p>
            
            <a href="#" class="text-primary font-medium hover:underline">View full Design API documentation →</a>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to integrate with AEROS?</h2>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Get API Keys
          </button>
          <button class="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold px-6 py-3 rounded-lg transition-colors">
            View API Documentation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>