/* ============================================
   Constants used across the application
   ============================================ */

export const CATEGORIES = [
  { id: 'all', name: 'All', slug: 'all', icon: '🌐', color: 'var(--accent-blue)' },
  { id: 'politics', name: 'Politics', slug: 'politics', icon: '🏛️', color: 'var(--accent-red)' },
  { id: 'world', name: 'World', slug: 'world', icon: '🌍', color: 'var(--accent-blue)' },
  { id: 'nepal', name: 'Nepal', slug: 'nepal', icon: '🇳🇵', color: 'var(--accent-red)' },
  { id: 'geopolitics', name: 'Geopolitics', slug: 'geopolitics', icon: '⚔️', color: 'var(--accent-amber)' },
  { id: 'sports', name: 'Sports', slug: 'sports', icon: '⚽', color: 'var(--accent-green)' },
  { id: 'technology', name: 'Technology', slug: 'technology', icon: '💻', color: 'var(--accent-cyan)' },
  { id: 'business', name: 'Business', slug: 'business', icon: '📈', color: 'var(--accent-amber)' },
  { id: 'science', name: 'Science', slug: 'science', icon: '🔬', color: 'var(--accent-purple)' },
  { id: 'health', name: 'Health', slug: 'health', icon: '🏥', color: 'var(--accent-green)' },
  { id: 'entertainment', name: 'Entertainment', slug: 'entertainment', icon: '🎬', color: 'var(--accent-purple)' },
];

export const SOURCES = {
  'bbc-news': { name: 'BBC News', logo: '🔴', country: 'uk' },
  'cnn': { name: 'CNN', logo: '🔵', country: 'us' },
  'ekantipur': { name: 'Ekantipur', logo: '📰', country: 'np' },
  'kathmandu-post': { name: 'Kathmandu Post', logo: '📰', country: 'np' },
  'al-jazeera': { name: 'Al Jazeera', logo: '🟢', country: 'qa' },
  'reuters': { name: 'Reuters', logo: '🟠', country: 'uk' },
  'the-guardian': { name: 'The Guardian', logo: '🔵', country: 'uk' },
  'espn': { name: 'ESPN', logo: '🏅', country: 'us' },
  'techcrunch': { name: 'TechCrunch', logo: '💚', country: 'us' },
  'nytimes': { name: 'NY Times', logo: '⬛', country: 'us' },
  'republic-media': { name: 'Republica', logo: '📰', country: 'np' },
};

export const ARTICLE_CATEGORIES = [
  { id: 'science', name: 'Science', slug: 'science', icon: '🔬' },
  { id: 'history', name: 'History', slug: 'history', icon: '📜' },
  { id: 'geography', name: 'Geography', slug: 'geography', icon: '🗺️' },
  { id: 'technology', name: 'Technology', slug: 'technology', icon: '🤖' },
  { id: 'politics', name: 'Politics', slug: 'politics', icon: '🏛️' },
  { id: 'philosophy', name: 'Philosophy', slug: 'philosophy', icon: '🧠' },
  { id: 'culture', name: 'Culture', slug: 'culture', icon: '🎭' },
  { id: 'nature', name: 'Nature', slug: 'nature', icon: '🌿' },
];

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
