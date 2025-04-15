import { CaseStudyTemplate } from './CaseStudyTemplate';

// Custom Le Mans Hero Section
function LeMansHero() {
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

      <h1 className="text-5xl font-bold mb-6">Le Mans: Luxury Rentals, Simplified</h1>
      <p className="text-xl text-white/60 mb-12">
        A premium platform for renting high-value assets — from Porsches to penthouses, yachts to private jets — designed to deliver a seamless, sophisticated experience for a discerning audience.
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
            <source src="/images/lemans/cover.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

const caseStudyData = {
  title: "Le Mans: Luxury Rentals, Simplified",
  description: "A premium platform for renting high-value assets — from Porsches to penthouses, yachts to private jets — designed to deliver a seamless, sophisticated experience for a discerning audience.",
  role: "Lead Product Designer",
  timeline: "2 months",
  team: "Product Designer, Stakeholders, Developers, Project Manager",
  technologies: ["React", "Mobile-first Design", "GPS Integration", "2FA"],
  coverImage: "/images/lemans/card.png",
  problemStatement: "Luxury customers don't want complexity — they want confidence. Booking a €5,000/day car needs to feel as effortless as ordering a coffee, but with the gravitas of a concierge. The challenge was to create a platform that could handle complex logistics while maintaining an effortlessly premium user experience.",
  process: {
    research: [
      "Analyzed competitors: Airbnb Luxe, Turo, Sail.me, LunaJets, MphClub",
      "Mapped pain points and standout features across platforms",
      "Identified key success factors: lifestyle photography, flexible booking, curated filters",
      "Studied competitor strengths: Turo's fast booking, Airbnb Luxe's storytelling, LunaJets' progressive disclosure"
    ],
    design: [
      "Created mobile-first UX inspired by Airbnb",
      "Developed rich visual system highlighting lifestyle aspects",
      "Designed instant booking with flexible calendar",
      "Built digital signature system with 2FA for inspections"
    ],
    development: [
      "Implemented GPS-powered location tracking for mobile assets",
      "Built push notification system for reservations and updates",
      "Created modular structure for future asset categories",
      "Developed comprehensive admin backoffice system"
    ]
  },
  challenges: [
    "Mirroring product quality in design",
    "Handling complex logistics: availability, check-in/out, inspections",
    "Balancing style with operational robustness",
    "Creating a scalable system for different asset types"
  ],
  solutions: [
    "Dual-platform system: Member mobile app and Admin backoffice",
    "Rich visuals with lifestyle-focused content",
    "Instant booking with flexible timeline management",
    "Role-based access with structured interface"
  ],
  results: [
    {
      metric: "User Experience",
      value: "✓",
      description: "Delivered polished booking experience for high-end users"
    },
    {
      metric: "Operational Control",
      value: "✓",
      description: "Comprehensive admin tools for business management"
    },
    {
      metric: "Scalability",
      value: "✓",
      description: "System ready for new asset classes"
    }
  ],
  images: {
    wireframes: [
      "/images/lemans/wireframe-1.png"
    ].sort(() => -1),
    final: [
      "/images/lemans/final-1.png",
      "/images/lemans/final-2.png",
      "/images/lemans/final-3.png",
      "/images/lemans/final-4.png"
    ]
  }
};

export function LeMansCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Custom Hero with Video */}
      <LeMansHero />

      {/* Rest of the case study content */}
      <div className="mt-24">
        <CaseStudyTemplate {...caseStudyData} skipHero={true} hideBackButton={true} />
      </div>
    </div>
  );
} 