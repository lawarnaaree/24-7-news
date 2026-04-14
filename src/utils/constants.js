/* ============================================
   Constants used across the application
   (Minimalist - No Icons)
   ============================================ */

export const CATEGORIES = [
  { id: 'all', name: 'All', slug: 'all', color: 'var(--accent-blue)' },
  { id: 'politics', name: 'Politics', slug: 'politics', color: 'var(--accent-red)' },
  { id: 'world', name: 'World', slug: 'world', color: 'var(--accent-blue)' },
  { id: 'nepal', name: 'Nepal', slug: 'nepal', color: 'var(--accent-red)' },
  { id: 'geopolitics', name: 'Geopolitics', slug: 'geopolitics', color: 'var(--accent-amber)' },
  { id: 'sports', name: 'Sports', slug: 'sports', color: 'var(--accent-green)' },
  { id: 'technology', name: 'Technology', slug: 'technology', color: 'var(--accent-cyan)' },
  { id: 'business', name: 'Business', slug: 'business', color: 'var(--accent-amber)' },
  { id: 'science', name: 'Science', slug: 'science', color: 'var(--accent-purple)' },
  { id: 'health', name: 'Health', slug: 'health', color: 'var(--accent-green)' },
  { id: 'entertainment', name: 'Entertainment', slug: 'entertainment', color: 'var(--accent-purple)' },
];

export const SOURCES = {
  'bbc-news': { name: 'BBC News', logo: '', country: 'uk' },
  'cnn': { name: 'CNN', logo: '', country: 'us' },
  'ekantipur': { name: 'Ekantipur', logo: '', country: 'np' },
  'kathmandu-post': { name: 'Kathmandu Post', logo: '', country: 'np' },
  'al-jazeera': { name: 'Al Jazeera', logo: '', country: 'qa' },
  'reuters': { name: 'Reuters', logo: '', country: 'uk' },
  'the-guardian': { name: 'The Guardian', logo: '', country: 'uk' },
  'espn': { name: 'ESPN', logo: '', country: 'us' },
  'techcrunch': { name: 'TechCrunch', logo: '', country: 'us' },
  'nytimes': { name: 'NY Times', logo: '', country: 'us' },
  'republic-media': { name: 'Republica', logo: '', country: 'np' },
};

export const ARTICLE_CATEGORIES = [
  { id: 'science', name: 'Science', slug: 'science' },
  { id: 'history', name: 'History', slug: 'history' },
  { id: 'geography', name: 'Geography', slug: 'geography' },
  { id: 'technology', name: 'Technology', slug: 'technology' },
  { id: 'politics', name: 'Politics', slug: 'politics' },
  { id: 'philosophy', name: 'Philosophy', slug: 'philosophy' },
  { id: 'culture', name: 'Culture', slug: 'culture' },
  { id: 'nature', name: 'Nature', slug: 'nature' },
];

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
