/* ============================================
   Mock Articles Data (Wikipedia-style knowledge)
   Covers diverse topics: Science, History,
   Geography, Technology, Politics, etc.
   Will be replaced by live Wikipedia API in Phase 2.
   ============================================ */

const mockArticles = [
  {
    id: 1,
    title: "Nepal",
    summary: "Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain.",
    content: `Nepal is a landlocked country located in South Asia, bordered by China (Tibet Autonomous Region) to the north and India to the south, east, and west. With a territory of 147,516 square kilometers and a population of approximately 30 million, Nepal is the world's 93rd largest country by area and the 48th most populous country.

Kathmandu is the nation's capital and largest city. The country is divided into seven federal provinces. Nepal is home to eight of the world's ten tallest mountains, including Mount Everest (Sagarmatha), the highest point on Earth at 8,848.86 meters.

## History

Nepal has a rich history spanning thousands of years. The earliest known civilization in Nepal is the Kirat dynasty, which ruled the region around the 7th or 8th century BCE. The Licchavi dynasty ruled from around the 4th to 9th centuries CE, followed by the Malla dynasty from the 12th to 18th centuries.

The modern nation of Nepal was unified in the 18th century by King Prithvi Narayan Shah. Nepal was never colonized by European powers, making it one of the few Asian countries to maintain its sovereignty throughout the colonial era.

## Geography

Nepal's geography ranges from the flat Terai plains in the south (60-300m elevation) to the Hill Region in the middle (300-3,000m) to the Mountain Region in the north (>3,000m). This dramatic variation in altitude creates diverse ecosystems and climates within a relatively small area.

## Economy

Nepal's economy is largely dependent on agriculture, remittances, and tourism. The country has significant hydropower potential, with an estimated capacity of 83,000 MW, of which less than 3% has been developed. Tourism contributes approximately 8% of GDP, with trekking, mountaineering, and cultural tourism being major draws.

## Culture

Nepal's culture is deeply influenced by Hinduism and Buddhism. The country is home to Lumbini, the birthplace of Lord Buddha, and Pashupatinath Temple, one of the holiest Hindu shrines. Nepali festivals include Dashain, Tihar, Holi, and Teej.`,
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
    category: "geography",
    readTime: "12 min read",
    lastUpdated: "2026-04-10T10:00:00Z",
    relatedTopics: ["Mount Everest", "Kathmandu", "Himalayas", "Buddhism"],
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    summary: "Artificial intelligence (AI) is the simulation of human intelligence processes by computer systems. These processes include learning, reasoning, and self-correction.",
    content: `Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.

## History

The field of AI research was founded at a workshop held on the campus of Dartmouth College during the summer of 1956. The attendees became the leaders of AI research for decades. Many of them predicted that machines would be as intelligent as humans within a generation, but challenges proved far harder than expected.

## Modern AI

Modern AI systems are based primarily on deep learning, a subset of machine learning that uses artificial neural networks with multiple layers. Key breakthroughs include:

- **Large Language Models (LLMs)**: GPT, Gemini, and Claude series
- **Computer Vision**: Object detection, image generation (DALL-E, Midjourney)
- **Reinforcement Learning**: AlphaGo, robotics
- **Generative AI**: Text, image, video, and code generation

## Applications

AI is now used across virtually every industry, including healthcare (diagnosis, drug discovery), finance (trading, fraud detection), transportation (autonomous vehicles), education (personalized learning), and creative industries (art, music, writing).

## Ethical Considerations

Key ethical concerns include bias in AI systems, job displacement, privacy, autonomous weapons, and the potential risks of artificial general intelligence (AGI). Various governments and organizations have proposed regulatory frameworks to address these concerns.`,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "technology",
    readTime: "10 min read",
    lastUpdated: "2026-04-08T14:30:00Z",
    relatedTopics: ["Machine Learning", "Deep Learning", "Neural Networks", "GPT"],
  },
  {
    id: 3,
    title: "Mount Everest",
    summary: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.",
    content: `Mount Everest (Nepali: सगरमाथा, Sagarmāthā; Tibetan: ཇོ་མོ་གླང་མ, Chomolungma) is Earth's highest mountain above sea level. Its elevation of 8,848.86 meters was most recently established in 2020 by the Chinese and Nepalese authorities.

## Geography

Everest is located in the Mahalangur Himal sub-range of the Himalayas. The international border between Nepal and China runs across its summit point. Its massif includes neighboring peaks Lhotse (8,516 m), Nuptse (7,861 m), and Changtse (7,580 m).

## Climbing History

The first confirmed ascent of Everest was by Sir Edmund Hillary (New Zealand) and Tenzing Norgay (Nepali-Indian Sherpa) on May 29, 1953. Since then, over 6,000 people have reached the summit. The mountain claimed over 300 lives as of 2023.

## Climate & Environment

The summit temperature never rises above freezing and can drop to -60°C in winter. Wind speeds can exceed 280 km/h. Climate change is causing glaciers to retreat and is exposing previously frozen waste left by decades of expeditions.`,
    thumbnail: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&h=400&fit=crop",
    category: "geography",
    readTime: "8 min read",
    lastUpdated: "2026-03-15T08:00:00Z",
    relatedTopics: ["Nepal", "Himalayas", "Mountaineering", "Tenzing Norgay"],
  },
  {
    id: 4,
    title: "Climate Change",
    summary: "Climate change refers to long-term shifts in temperatures and weather patterns. Human activities have been the main driver of climate change since the 1800s, primarily due to burning fossil fuels.",
    content: `Climate change refers to long-term shifts in global or regional climate patterns. Since the mid-20th century, humans have been the primary driver of observed changes, largely through the burning of fossil fuels such as coal, oil, and gas.

## Causes

The primary cause of current climate change is the increase in greenhouse gas concentrations in the atmosphere. Carbon dioxide (CO₂) levels have risen from approximately 280 ppm in pre-industrial times to over 420 ppm in 2024. Other significant greenhouse gases include methane (CH₄), nitrous oxide (N₂O), and fluorinated gases.

## Effects

- Global average temperature has risen approximately 1.1°C since the pre-industrial era
- Sea levels have risen 20 cm since 1900
- Arctic sea ice has declined by 13% per decade since 1979
- Extreme weather events have become more frequent and intense
- Biodiversity loss and ecosystem disruption

## Mitigation

The Paris Agreement (2015) established a global framework to limit warming to well below 2°C, preferably 1.5°C. Key strategies include transitioning to renewable energy, improving energy efficiency, protecting forests, and developing carbon capture technologies.`,
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop",
    category: "science",
    readTime: "11 min read",
    lastUpdated: "2026-04-01T12:00:00Z",
    relatedTopics: ["Global Warming", "Paris Agreement", "Renewable Energy", "Carbon Emissions"],
  },
  {
    id: 5,
    title: "United Nations",
    summary: "The United Nations (UN) is an intergovernmental organization whose stated purposes are to maintain international peace and security, develop friendly relations among nations, and achieve international cooperation.",
    content: `The United Nations (UN) is an intergovernmental organization established on October 24, 1945, to promote international cooperation and to create and maintain international order. It is the world's largest and most familiar international organization.

## Structure

The UN has six main organs:
1. **General Assembly** — The main deliberative body, all 193 member states represented
2. **Security Council** — 15 members (5 permanent with veto power), responsible for peace and security
3. **Economic and Social Council** — 54 members, coordinates economic and social work
4. **Secretariat** — Administrative body headed by the Secretary-General
5. **International Court of Justice** — The primary judicial organ
6. **Trusteeship Council** — (suspended operations in 1994)

## Sustainable Development Goals

In 2015, the UN adopted 17 Sustainable Development Goals (SDGs) as a universal call to action to end poverty, protect the planet, and ensure prosperity for all by 2030.

## Nepal and the UN

Nepal has been a member of the UN since December 14, 1955. Nepal is one of the largest contributors of troops to UN peacekeeping operations worldwide.`,
    thumbnail: "https://images.unsplash.com/photo-1509128841709-95d4170b6065?w=600&h=400&fit=crop",
    category: "politics",
    readTime: "9 min read",
    lastUpdated: "2026-02-28T16:00:00Z",
    relatedTopics: ["International Relations", "Peacekeeping", "Human Rights", "UNESCO"],
  },
  {
    id: 6,
    title: "Quantum Computing",
    summary: "Quantum computing is a type of computation that exploits quantum mechanical phenomena such as superposition and entanglement to process information in fundamentally different ways than classical computers.",
    content: `Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. Unlike classical bits which are either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously through superposition.

## Key Concepts

- **Superposition**: A qubit can represent 0, 1, or both simultaneously
- **Entanglement**: Qubits can be correlated so the state of one instantly influences another
- **Quantum Gates**: Operations that manipulate qubits, analogous to classical logic gates
- **Quantum Supremacy**: The point at which a quantum computer can perform a task faster than any classical computer

## Current State

As of 2026, major players in quantum computing include Google (Sycamore), IBM (Eagle/Condor), Microsoft (topological qubits), and various startups. Google's 70-qubit Sycamore processor demonstrated quantum supremacy in 2019 by performing a calculation in 200 seconds that would take a classical supercomputer 10,000 years.

## Applications

Potential applications include cryptography, drug discovery, financial modeling, materials science, optimization problems, and artificial intelligence enhancement.`,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    category: "technology",
    readTime: "10 min read",
    lastUpdated: "2026-03-20T09:00:00Z",
    relatedTopics: ["Physics", "Computer Science", "Cryptography", "IBM"],
  },
  {
    id: 7,
    title: "FIFA World Cup",
    summary: "The FIFA World Cup is an international association football competition contested by the men's national teams of FIFA's member associations. It is the most prestigious tournament in the sport.",
    content: `The FIFA World Cup is the premier international football (soccer) competition, held every four years. First held in 1930 in Uruguay, the tournament has grown to become the world's most-watched sporting event, with an estimated 5 billion viewers for the 2022 edition.

## History

The inaugural World Cup was held in Uruguay in 1930 with 13 participating teams. The host nation won the first tournament. The event was not held in 1942 and 1946 due to World War II.

## Notable Records

- **Most Titles**: Brazil (5: 1958, 1962, 1970, 1994, 2002)
- **Most Consecutive Titles**: Italy (1934, 1938) and Brazil (1958, 1962)
- **Most Goals Scored**: Miroslav Klose (Germany) — 16 goals
- **Highest Attendance**: USA 1994 — Average 68,991 per match

## 2026 World Cup

The 2026 FIFA World Cup will be the first to feature 48 teams (expanded from 32) and will be jointly hosted by the United States, Canada, and Mexico.`,
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    category: "culture",
    readTime: "7 min read",
    lastUpdated: "2026-01-15T11:00:00Z",
    relatedTopics: ["Football", "FIFA", "Olympics", "Sports"],
  },
  {
    id: 8,
    title: "Renewable Energy",
    summary: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind are the most common examples.",
    content: `Renewable energy comes from sources that naturally replenish themselves, including solar, wind, hydroelectric, geothermal, and biomass. As of 2025, renewable energy accounts for approximately 30% of global electricity generation, with solar and wind being the fastest-growing sources.

## Types of Renewable Energy

### Solar Energy
Solar photovoltaic (PV) technology converts sunlight directly into electricity. Global solar capacity exceeded 1.5 TW in 2024, with costs declining over 90% since 2010.

### Wind Energy  
Wind turbines convert kinetic energy from wind into electrical power. Both onshore and offshore wind farms have seen massive growth, with global capacity exceeding 900 GW.

### Hydropower
The largest source of renewable electricity globally, hydropower generates about 16% of the world's electricity. Nepal has an estimated hydropower potential of 83,000 MW.

### Geothermal
Heat from the Earth's interior is used for electricity generation and direct heating applications. Iceland generates 100% of its electricity from renewable sources, primarily geothermal and hydro.

## Future Outlook

The International Energy Agency projects that renewable energy will account for over 50% of global electricity generation by 2030, driven by declining costs, government policies, and growing climate concerns.`,
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    category: "science",
    readTime: "9 min read",
    lastUpdated: "2026-03-28T14:00:00Z",
    relatedTopics: ["Solar Energy", "Wind Power", "Climate Change", "Sustainability"],
  },
  {
    id: 9,
    title: "Space Exploration",
    summary: "Space exploration is the use of astronomy and space technology to explore outer space. Physical exploration of space is conducted both by human spaceflights and by robotic spacecraft.",
    content: `Space exploration is the investigation of celestial structures in outer space by means of evolving and developing space technology. The physical exploration of space began with the launch of Sputnik 1 by the Soviet Union on October 4, 1957.

## Key Milestones

- **1957**: Sputnik 1, first artificial satellite
- **1961**: Yuri Gagarin, first human in space
- **1969**: Apollo 11, first humans on the Moon
- **1990**: Hubble Space Telescope launched
- **1998**: International Space Station construction begins
- **2020**: SpaceX Crew Dragon, first commercial crew mission
- **2024**: Artemis program returns humans to the Moon

## Current Programs

### Artemis Program (NASA)
Aims to establish a sustainable human presence on the Moon by the late 2020s, as a stepping stone toward eventual Mars missions.

### Mars Exploration
Multiple missions to Mars are ongoing, including NASA's Perseverance rover, China's Zhurong rover, and SpaceX's Starship development for crewed Mars missions planned for 2029.

### James Webb Space Telescope
Launched in December 2021, JWST has revolutionized our understanding of the early universe, exoplanet atmospheres, and star formation.`,
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop",
    category: "science",
    readTime: "10 min read",
    lastUpdated: "2026-04-05T10:00:00Z",
    relatedTopics: ["NASA", "SpaceX", "Mars", "Moon"],
  },
  {
    id: 10,
    title: "Gautama Buddha",
    summary: "Siddhartha Gautama, known as the Buddha, was an ascetic and spiritual teacher of South Asia who lived during the latter half of the first millennium BCE. He was born in Lumbini, Nepal.",
    content: `Siddhartha Gautama (c. 563–483 BCE), commonly known as the Buddha ("the awakened one"), was a śramaṇa who lived in ancient India. He is the founder of Buddhism and is revered as a supreme Buddha by Buddhists worldwide.

## Birth & Early Life

Siddhartha was born in Lumbini, in present-day Nepal, to King Suddhodana and Queen Maya of the Shakya clan. Lumbini is now a UNESCO World Heritage Site and one of the most important pilgrimage destinations in the world.

## The Four Sights

According to tradition, Siddhartha was sheltered from the reality of human suffering until he encountered four sights outside the palace: an old man, a sick man, a corpse, and an ascetic. These encounters profoundly affected him and led to his decision to renounce his privileged life.

## Enlightenment

After six years of ascetic practices and meditation, Siddhartha achieved enlightenment (Bodhi) while meditating under a Bodhi tree in Bodh Gaya, India. He was 35 years old.

## Teachings

The Buddha's core teachings include:
- **Four Noble Truths**: Life involves suffering, suffering arises from craving, suffering can cease, and the path to cessation is the Noble Eightfold Path
- **Noble Eightfold Path**: Right view, intention, speech, action, livelihood, effort, mindfulness, and concentration
- **Middle Way**: A path of moderation between extreme asceticism and sensual indulgence

## Legacy

Buddhism has grown to become one of the world's major religions, with approximately 500 million adherents worldwide. Nepal takes great pride in being the birthplace of the Buddha.`,
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
    category: "history",
    readTime: "11 min read",
    lastUpdated: "2026-02-10T08:00:00Z",
    relatedTopics: ["Buddhism", "Lumbini", "Nepal", "Philosophy"],
  },
];

export default mockArticles;

/**
 * Helper functions
 */
export function getArticlesByCategory(category) {
  if (!category || category === 'all') return mockArticles;
  return mockArticles.filter((a) => a.category === category);
}

export function searchArticles(query) {
  const q = query.toLowerCase();
  return mockArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.relatedTopics.some((t) => t.toLowerCase().includes(q))
  );
}

export function getArticleById(id) {
  return mockArticles.find((a) => a.id === Number(id));
}

export function getRelatedArticles(articleId, limit = 3) {
  const article = getArticleById(articleId);
  if (!article) return [];
  return mockArticles
    .filter((a) => a.id !== articleId && a.category === article.category)
    .slice(0, limit);
}
