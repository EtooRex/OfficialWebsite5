export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(content: string): TocItem[] {
  const toc: TocItem[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      toc.push({ id, text, level });
    }
  }
  
  return toc;
}

export function convertMarkdownToHtml(content: string): string {
  // Simple markdown to HTML converter
  let html = content;
  
  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6" id="$1">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2" id="$1">$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-0 border-b border-gray-200 pb-4" id="$1">$1</h1>');
  
  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>');
  
  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>');
  
  // Lists
  html = html.replace(/^\* (.*$)/gm, '<li class="text-gray-600">$1</li>');
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-600">$1</ul>');
  
  // Paragraphs
  html = html.replace(/^(?!<[h|u|l|p|d]).+$/gm, '<p class="text-gray-600 mb-4 leading-relaxed">$&</p>');
  
  // Clean up IDs for headers
  html = html.replace(/id="([^"]*)">/g, (match, id) => {
    const cleanId = id.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `id="${cleanId}">`;
  });
  
  return html;
}

export async function loadMarkdownFile(path: string): Promise<string> {
  try {
    const response = await fetch(`/docs/${path}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}.md`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return `# Error\n\nCould not load documentation file: ${path}.md`;
  }
}