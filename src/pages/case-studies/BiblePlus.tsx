import { CaseStudyTemplate } from './CaseStudyTemplate';

// Custom Bible+ Hero Section
function BiblePlusHero() {
  return (
    <div className="mb-24">
      {/* Back Button */}
      <a 
        href="/"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Work
      </a>

      <h1 className="text-5xl font-bold mb-6">Bible+: Designing Scripture for the TikTok Generation</h1>
      <p className="text-xl text-white/60 mb-12">
        Transforming biblical study into an engaging digital experience that resonates with modern audiences while preserving its sacred essence.
      </p>
      <div className="rounded-3xl overflow-hidden bg-neutral-900 -mx-4 sm:mx-0 relative">
        <div className="scale-110 transform">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full object-cover"
          >
            <source src="/images/bibleplus/cover.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

const caseStudyData = {
  title: "Bible+: Designing Scripture for the TikTok Generation",
  description: "Transforming biblical study into an engaging digital experience that resonates with modern audiences while preserving its sacred essence.",
  role: "Lead Product Designer",
  timeline: "3 months",
  team: "2 Designers, 3 Developers",
  technologies: ["React Native", "OpenAI", "Firebase", "TypeScript"],
  coverImage: "/images/bibleplus/card.png",
  problemStatement: "Let's face it—reading the Bible can feel like trying to assemble IKEA furniture without instructions. For modern users (especially younger ones), the 73-book tome was stuck in a paradox: universally revered but rarely finished. Our mission? Create Bible+, an app that makes scripture as engaging as a Netflix binge—without the heresy. Traditional Bible apps were either too preachy, soulless, or dry as desert sand. We needed to make scripture as engaging as social media—without compromising its essence.",
  process: {
    research: [
      "Conducted competitor analysis of Glorify, Udemy, and 12min",
      "Discovered users craved short-form audio (18min max) with historical context",
      "Identified the sweet spot: TED Talk meets Game of Thrones",
      "Analyzed user behavior patterns across different age groups"
    ],
    design: [
      "Created 'Bible 18min': Podcast-style audio dramas for verse breakdowns",
      "Developed mood-based search system for contextual verse discovery",
      "Designed wizard-style onboarding for personalized reading plans",
      "Implemented gamified tracking with shareable achievements"
    ],
    development: [
      "Built modular system: Free core text + premium 'deep dives'",
      "Integrated AI voiceovers and celebrity-narrated journeys",
      "Developed separate tracks for scholarship and spirituality",
      "Created shareable achievement system ('I survived Leviticus!')"
    ]
  },
  challenges: [
    "Making sacred text engaging without trivializing it",
    "Balancing scholarly content with spiritual experience",
    "Creating a tone that's both respectful and engaging",
    "Designing features that appeal across different user segments"
  ],
  solutions: [
    "Bible 18min: Podcast-style audio dramas breaking down verses",
    "Mood-based search: 'Show me verses about anxiety' → instant playlist",
    "Wizard onboarding: Personalized reading plans based on user goals",
    "Gamified tracking with shareable achievements and progress bars"
  ],
  results: [
    {
      metric: "Engagement",
      value: "↑ 70%",
      description: "Boost vs. traditional Bible apps"
    },
    {
      metric: "Session Duration",
      value: "2x",
      description: "Longer session times due to 'one more chapter' effect"
    },
    {
      metric: "User Diversity",
      value: "↑ 85%",
      description: "Expanded user base including atheists and writers"
    }
  ],
  images: {
    wireframes: [
      "/images/bibleplus/wireframe-1.jpg",
      "/images/bibleplus/wireframe-2.png",
      "/images/bibleplus/wireframe-3.png"
    ].sort((a, b) => {
      if (a.includes('wireframe-1')) return -1;
      if (b.includes('wireframe-1')) return 1;
      return 0;
    }),
    final: [
      "/images/bibleplus/final-1.png",
      "/images/bibleplus/final-2.png",
      "/images/bibleplus/final-3.png",
      "/images/bibleplus/final-4.png"
    ]
  },
  lessons: [
    "Sacred texts need UX too—if Duolingo can make Hebrew fun, so can we",
    "Don't fear the niche: 'Bible entrepreneurs' became our unpaid marketers",
    "Tone is everything: Serious content + playful delivery = theological TikTok"
  ]
};

export function BiblePlusCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Custom Hero with Video */}
      <BiblePlusHero />

      {/* Rest of the case study content */}
      <div className="mt-24">
        <CaseStudyTemplate {...caseStudyData} skipHero={true} hideBackButton={true} />
      </div>
    </div>
  );
} 