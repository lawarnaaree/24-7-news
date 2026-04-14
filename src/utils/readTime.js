/**
 * Utility to calculate reading time
 * @param {string} text 
 * @param {number} wordsPerMinute 
 * @returns {string} e.g. "3 min read"
 */
export function calculateReadTime(text, wordsPerMinute = 200) {
  if (!text) return '1 min read';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
