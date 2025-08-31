<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { extractTableOfContents, convertMarkdownToHtml, loadMarkdownFile, type TocItem } from '../utils/markdown'

const route = useRoute()
const content = ref('')
const html = ref('')
const toc = ref<TocItem[]>([])
const isLoading = ref(true)
const error = ref('')
const activeHeading = ref('')

const docPath = computed(() => {
  const path = route.params.path as string
  return path || 'getting-started'
})

const updateActiveHeading = () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let currentActive = ''
  
  for (const heading of headings) {
    const rect = heading.getBoundingClientRect()
    if (rect.top <= 100) {
      currentActive = heading.id
    }
  }
  
  activeHeading.value = currentActive
}

const loadContent = async () => {
  isLoading.value = true
  error.value = ''
  
  try {
    const markdownContent = await loadMarkdownFile(docPath.value)
    content.value = markdownContent
    
    if (markdownContent.includes('# Error')) {
      error.value = 'Documentation file not found'
      return
    }
    
    // Extract ToC and convert to HTML
    toc.value = extractTableOfContents(markdownContent)
    html.value = convertMarkdownToHtml(markdownContent)
    
    // Update active heading after content loads
    setTimeout(updateActiveHeading, 100)
    
  } catch (err) {
    error.value = `Failed to load documentation: ${err}`
    console.error('Markdown loading error:', err)
  } finally {
    isLoading.value = false
  }
}

const scrollToHeading = (id: string) => {
  const cleanId = id.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  const element = document.getElementById(cleanId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  loadContent()
  window.addEventListener('scroll', updateActiveHeading)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveHeading)
})

watch(() => route.params.path, loadContent)
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
    <!-- Table of Contents Sidebar -->
    <div class="lg:w-1/4">
      <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
        <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
        
        <div v-if="isLoading" class="space-y-2">
          <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
        
        <nav v-else-if="toc.length > 0" class="space-y-1">
          <button
            v-for="item in toc"
            :key="item.id"
            @click="scrollToHeading(item.text)"
            :class="[
              'block w-full text-left py-2 px-3 text-sm rounded-md transition-colors duration-200 hover:bg-pink-50',
              // Active state styling
              activeHeading === item.id ? 'bg-pink-100 text-pink-700 font-semibold' : 'hover:bg-pink-50',
              // Level-based styling
              item.level === 1 ? 'font-semibold text-gray-900 hover:text-pink-600' : '',
              item.level === 2 ? 'ml-4 text-gray-700 hover:text-pink-600' : '',
              item.level === 3 ? 'ml-8 text-gray-600 hover:text-pink-600' : '',
              item.level >= 4 ? 'ml-12 text-gray-500 hover:text-pink-600' : ''
            ]"
          >
            {{ item.text }}
          </button>
        </nav>
        
        <div v-else class="text-gray-500 text-sm">
          No headings found in this document.
        </div>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <div class="lg:w-3/4">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div v-if="isLoading" class="space-y-4">
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
        
        <div v-else-if="error" class="text-center py-12">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732 3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ error }}</h3>
          <p class="text-gray-600">Please check the documentation path and try again.</p>
        </div>
        
        <div 
          v-else 
          v-html="html"
          class="markdown-content"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
  scroll-margin-top: 2rem;
}
</style>