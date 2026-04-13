/* ============================================
   Mock News Data
   Realistic news articles across all categories
   from diverse international + Nepali sources.
   Will be replaced by live API data in Phase 2.
   ============================================ */

const now = new Date();
const hoursAgo = (h) => new Date(now - h * 3600000).toISOString();
const daysAgo = (d) => new Date(now - d * 86400000).toISOString();

const mockNews = [
  // ── BREAKING / FEATURED ──────────────────────────────
  {
    id: 1,
    title: "Nepal's Parliament Passes Historic Climate Resilience Act with Unanimous Support",
    excerpt: "The landmark legislation commits Nepal to achieving net-zero emissions by 2045 and establishes a Rs 50 billion climate adaptation fund to protect vulnerable communities in the Himalayan region.",
    thumbnail: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=500&fit=crop",
    source: "ekantipur",
    category: "nepal",
    author: "Priya Sharma",
    publishedAt: hoursAgo(1),
    isBreaking: true,
    isFeatured: true,
    originalUrl: "#",
    viewCount: 15420,
  },
  {
    id: 2,
    title: "G7 Summit Reaches Groundbreaking Agreement on AI Governance Framework",
    excerpt: "World leaders at the G7 Summit in Rome have agreed on a comprehensive regulatory framework for artificial intelligence that includes mandatory safety testing, transparency requirements, and cross-border cooperation mechanisms.",
    thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=500&fit=crop",
    source: "bbc-news",
    category: "world",
    author: "James Morrison",
    publishedAt: hoursAgo(2),
    isBreaking: true,
    isFeatured: true,
    originalUrl: "#",
    viewCount: 28350,
  },
  {
    id: 3,
    title: "SpaceX Successfully Tests Next-Gen Raptor Engine for Mars Mission",
    excerpt: "SpaceX has completed a full-duration test of the Raptor V3 engine, achieving record-breaking thrust levels that bring humanity one step closer to a crewed Mars mission planned for 2029.",
    thumbnail: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=500&fit=crop",
    source: "techcrunch",
    category: "technology",
    author: "Sarah Chen",
    publishedAt: hoursAgo(3),
    isBreaking: false,
    isFeatured: true,
    originalUrl: "#",
    viewCount: 19870,
  },
  {
    id: 4,
    title: "India-China Border Tensions Ease as Both Nations Agree to New De-escalation Protocol",
    excerpt: "Following weeks of diplomatic negotiations, India and China have signed a five-point de-escalation protocol covering the Line of Actual Control, including joint patrols and real-time communication channels.",
    thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=500&fit=crop",
    source: "reuters",
    category: "geopolitics",
    author: "Arun Mehta",
    publishedAt: hoursAgo(4),
    isBreaking: false,
    isFeatured: true,
    originalUrl: "#",
    viewCount: 22100,
  },

  // ── NEPAL ──────────────────────────────────
  {
    id: 5,
    title: "Kathmandu Metropolitan City Launches Smart Traffic Management System",
    excerpt: "KMC has deployed AI-powered traffic signals at 50 major intersections across the valley, expected to reduce congestion by up to 30% during peak hours.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    source: "kathmandu-post",
    category: "nepal",
    author: "Bikash Thapa",
    publishedAt: hoursAgo(5),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 8540,
  },
  {
    id: 6,
    title: "Nepal Tourism Board Reports Record 1.5 Million Visitors in First Quarter",
    excerpt: "The surge in tourism has been attributed to improved infrastructure, new international flight routes, and enhanced marketing campaigns targeting adventure tourists from East Asia.",
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop",
    source: "republic-media",
    category: "nepal",
    author: "Anita Rai",
    publishedAt: hoursAgo(8),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 6280,
  },
  {
    id: 7,
    title: "Pokhara International Airport Welcomes First Direct European Charter Flight",
    excerpt: "A TUI Airways Boeing 787 Dreamliner landed at Pokhara International Airport carrying 290 tourists from London, marking a milestone in Nepal's aviation history.",
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&h=500&fit=crop",
    source: "ekantipur",
    category: "nepal",
    author: "Ramesh Adhikari",
    publishedAt: hoursAgo(12),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 9120,
  },
  {
    id: 8,
    title: "Nepal Rastra Bank Introduces Digital Currency Pilot Program",
    excerpt: "The central bank has launched a pilot program for a Central Bank Digital Currency (CBDC) with three major commercial banks participating in the initial phase, covering five districts.",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    source: "kathmandu-post",
    category: "nepal",
    author: "Sagar Poudel",
    publishedAt: daysAgo(1),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 4670,
  },

  // ── POLITICS ──────────────────────────────
  {
    id: 9,
    title: "EU Parliament Approves Sweeping Digital Markets Enforcement Package",
    excerpt: "The European Parliament has voted overwhelmingly to strengthen enforcement of the Digital Markets Act, granting regulators new powers to impose real-time compliance monitoring on tech giants.",
    thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=500&fit=crop",
    source: "the-guardian",
    category: "politics",
    author: "Maria Santos",
    publishedAt: hoursAgo(6),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 11200,
  },
  {
    id: 10,
    title: "US Senate Confirms New Federal Reserve Chair in Historic Bipartisan Vote",
    excerpt: "The Senate voted 78-22 to confirm Dr. Elena Rodriguez as the first Latina chairwoman of the Federal Reserve, signaling a shift toward more aggressive climate-risk financial policies.",
    thumbnail: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
    source: "cnn",
    category: "politics",
    author: "Michael Berg",
    publishedAt: hoursAgo(9),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 14300,
  },
  {
    id: 11,
    title: "Nepal's Ruling Coalition Announces New Five-Year Economic Transformation Plan",
    excerpt: "The coalition government has unveiled a comprehensive plan focusing on digital infrastructure, renewable energy, and agricultural modernization, with a target GDP growth of 7.5% annually.",
    thumbnail: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&h=500&fit=crop",
    source: "ekantipur",
    category: "politics",
    author: "Deepak KC",
    publishedAt: hoursAgo(14),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 7890,
  },

  // ── GEOPOLITICS ──────────────────────────────
  {
    id: 12,
    title: "BRICS+ Bloc Announces Common Digital Payment System to Rival SWIFT",
    excerpt: "The expanded BRICS alliance has unveiled plans for an interoperable digital payment network that would allow member nations to settle trades in local currencies, reducing dollar dependence.",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop",
    source: "al-jazeera",
    category: "geopolitics",
    author: "Fatima Al-Rashid",
    publishedAt: hoursAgo(7),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 18700,
  },
  {
    id: 13,
    title: "NATO Expands Arctic Defense Strategy Amid Melting Ice Opens New Shipping Routes",
    excerpt: "The alliance has approved a major expansion of its Arctic operations, deploying new monitoring stations and rapid-response forces as shrinking ice creates strategic competition in the region.",
    thumbnail: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop",
    source: "bbc-news",
    category: "geopolitics",
    author: "Erik Hansen",
    publishedAt: hoursAgo(11),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 13500,
  },
  {
    id: 14,
    title: "South China Sea: Philippines and Vietnam Sign Mutual Defense Cooperation Pact",
    excerpt: "In a move that signals growing regional solidarity, the Philippines and Vietnam have signed a historic mutual defense agreement focused on maritime security in the disputed South China Sea.",
    thumbnail: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=500&fit=crop",
    source: "reuters",
    category: "geopolitics",
    author: "Thanh Nguyen",
    publishedAt: daysAgo(1),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 9800,
  },

  // ── SPORTS ──────────────────────────────
  {
    id: 15,
    title: "Nepal Cricket Team Qualifies for T20 World Cup for First Time in History",
    excerpt: "In a remarkable upset, Nepal's cricket team defeated Ireland by 15 runs in the qualifying final, securing their maiden berth in the ICC T20 World Cup to be held in Sri Lanka.",
    thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop",
    source: "espn",
    category: "sports",
    author: "Rohit Sharma",
    publishedAt: hoursAgo(3),
    isBreaking: true,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 34200,
  },
  {
    id: 16,
    title: "Champions League Semi-Final: Real Madrid Defeats Manchester City in Dramatic Penalty Shootout",
    excerpt: "Real Madrid advance to the Champions League final after a nail-biting penalty shootout following a 3-3 aggregate draw, with Vinícius Jr. scoring the decisive penalty.",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
    source: "espn",
    category: "sports",
    author: "Carlos Rivera",
    publishedAt: hoursAgo(6),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 45600,
  },
  {
    id: 17,
    title: "2028 LA Olympics: New Sports Added Including Flag Football and Squash",
    excerpt: "The IOC has confirmed five new sports for the 2028 Los Angeles Olympics, including flag football, squash, cricket, lacrosse, and baseball/softball, aiming to attract younger audiences.",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&h=500&fit=crop",
    source: "bbc-news",
    category: "sports",
    author: "David Park",
    publishedAt: daysAgo(1),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 12400,
  },

  // ── TECHNOLOGY ──────────────────────────────
  {
    id: 18,
    title: "Google DeepMind Unveils Gemini Ultra 2.0 with Breakthrough Reasoning Capabilities",
    excerpt: "The latest iteration of Google's AI model demonstrates human-level performance on complex multi-step reasoning tasks and introduces real-time collaborative coding features.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    source: "techcrunch",
    category: "technology",
    author: "Lisa Wang",
    publishedAt: hoursAgo(4),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 21350,
  },
  {
    id: 19,
    title: "Apple Announces M5 Chip Series with Integrated Neural Engine for On-Device AI",
    excerpt: "Apple's next-generation M5 chip family promises 3x faster machine learning performance, enabling complex AI models to run entirely on-device without cloud connectivity.",
    thumbnail: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=500&fit=crop",
    source: "techcrunch",
    category: "technology",
    author: "Kevin Liu",
    publishedAt: hoursAgo(10),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 18600,
  },
  {
    id: 20,
    title: "European Space Agency Launches Quantum Communication Satellite Network",
    excerpt: "ESA has launched the first three satellites of a constellation designed to provide unhackable quantum-encrypted communication channels across European Union member states.",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
    source: "reuters",
    category: "technology",
    author: "Andreas Müller",
    publishedAt: daysAgo(2),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 7900,
  },

  // ── BUSINESS ──────────────────────────────
  {
    id: 21,
    title: "Global Markets Rally as Federal Reserve Signals Earlier Rate Cuts in 2026",
    excerpt: "Stock markets worldwide surged after the Federal Reserve hinted at two rate cuts before September, boosting investor confidence and pushing the S&P 500 to new record highs.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    source: "cnn",
    category: "business",
    author: "Jennifer Moore",
    publishedAt: hoursAgo(5),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 16800,
  },
  {
    id: 22,
    title: "NVIDIA Surpasses $4 Trillion Market Cap as AI Chip Demand Continues to Surge",
    excerpt: "The chip giant's market capitalization has crossed $4 trillion, driven by insatiable demand for its H200 and B100 GPUs from cloud providers and AI startups worldwide.",
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=500&fit=crop",
    source: "nytimes",
    category: "business",
    author: "Robert Chen",
    publishedAt: hoursAgo(8),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 22100,
  },

  // ── SCIENCE ──────────────────────────────
  {
    id: 23,
    title: "Scientists Discover New Species of Deep-Sea Coral Reef in Pacific Ocean",
    excerpt: "Marine biologists have discovered a previously unknown coral ecosystem at depths exceeding 2,000 meters in the Pacific, hosting over 40 species new to science.",
    thumbnail: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=500&fit=crop",
    source: "bbc-news",
    category: "science",
    author: "Dr. Emily Foster",
    publishedAt: hoursAgo(13),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 8900,
  },
  {
    id: 24,
    title: "CERN Reports Evidence of New Subatomic Particle That Challenges Standard Model",
    excerpt: "Physicists at the Large Hadron Collider have observed anomalous collision patterns consistent with a previously theorized tetraquark state, potentially reshaping our understanding of fundamental forces.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    source: "reuters",
    category: "science",
    author: "Dr. Hans Weber",
    publishedAt: daysAgo(1),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 11200,
  },

  // ── HEALTH ──────────────────────────────
  {
    id: 25,
    title: "WHO Approves First Universal Malaria Vaccine with 85% Efficacy Rate",
    excerpt: "The World Health Organization has approved a next-generation malaria vaccine developed by Oxford University, marking a potential turning point in the fight against the disease that kills 600,000 annually.",
    thumbnail: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop",
    source: "bbc-news",
    category: "health",
    author: "Dr. Amira Patel",
    publishedAt: hoursAgo(7),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 19300,
  },
  {
    id: 26,
    title: "Nepal Achieves Major Milestone: 95% Childhood Vaccination Coverage Nationwide",
    excerpt: "Ministry of Health data shows Nepal has reached 95% vaccination coverage for children under five, one of the highest rates in South Asia, following a decade-long public health campaign.",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    source: "kathmandu-post",
    category: "health",
    author: "Dr. Binod Shrestha",
    publishedAt: daysAgo(2),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 5600,
  },

  // ── ENTERTAINMENT ──────────────────────────────
  {
    id: 27,
    title: "Nepali Film 'Palpasa Café' Wins Grand Prix at Cannes Film Festival",
    excerpt: "Director Deepak Rauniyar's adaptation of the beloved Nepali novel has won the Grand Prix at Cannes, making it the first Nepali film to win a major prize at one of the world's top film festivals.",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop",
    source: "ekantipur",
    category: "entertainment",
    author: "Sunita Gurung",
    publishedAt: hoursAgo(9),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 27800,
  },
  {
    id: 28,
    title: "Marvel Announces Phase 7 Slate with First Nepali Superhero Film",
    excerpt: "Marvel Studios has revealed its Phase 7 lineup, including a solo film centered on a new Nepali superhero character, marking a significant step in Asian representation in the MCU.",
    thumbnail: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=500&fit=crop",
    source: "cnn",
    category: "entertainment",
    author: "Alex Turner",
    publishedAt: daysAgo(1),
    isBreaking: false,
    isFeatured: false,
    originalUrl: "#",
    viewCount: 35400,
  },
];

export default mockNews;

/**
 * Helper functions to filter mock data
 */
export function getBreakingNews() {
  return mockNews.filter((n) => n.isBreaking);
}

export function getFeaturedNews() {
  return mockNews.filter((n) => n.isFeatured);
}

export function getNewsByCategory(categorySlug) {
  if (categorySlug === 'all') return mockNews;
  return mockNews.filter((n) => n.category === categorySlug);
}

export function getNewsBySource(sourceSlug) {
  return mockNews.filter((n) => n.source === sourceSlug);
}

export function getTrendingNews(limit = 5) {
  return [...mockNews].sort((a, b) => b.viewCount - a.viewCount).slice(0, limit);
}

export function searchNews(query) {
  const q = query.toLowerCase();
  return mockNews.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      n.author.toLowerCase().includes(q)
  );
}

export function getNewsById(id) {
  return mockNews.find((n) => n.id === Number(id));
}
