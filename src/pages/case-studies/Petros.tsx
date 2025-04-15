import { CaseStudyTemplate } from './CaseStudyTemplate';

const caseStudyData = {
  title: "Redesigning Petros: From Pension Paperwork to One-Click Magic",
  description: "Transforming Brazil's €18B+ pension fund's signup process from a bureaucratic nightmare into a streamlined, user-friendly experience.",
  role: "Lead UX Designer & Product Strategist",
  timeline: "3 months",
  team: "1 Designer, 2 Developers, 1 Product Manager",
  technologies: ["Figma"],
  coverImage: "/images/petros/cover.png",
  problemStatement: "When Brazil's €18B+ pension fund Petros approached me, their signup process had more steps than a Michael Bay explosion scene—with none of the excitement. Users were drowning in redundant fields, unclear requirements, and enough paperwork to deforest the Amazon. My mission? Fix this mess in just 3 months while navigating legal landmines and legacy systems that hadn't been updated since flip phones were cool.",
  process: {
    research: [
      "Conducted in-depth interviews with internal users and key stakeholders",
      "Analyzed existing workflows and pain points with the team",
      "Mapped out existing user journey and identified 38% redundant steps",
      "Benchmarked against leading financial service providers"
    ],
    design: [
      "Created low-fidelity wireframes focusing on essential user flows",
      "Developed high-fidelity prototypes with real-time validation",
      "Designed mobile-first approach for document uploads",
      "Implemented progressive disclosure to reduce cognitive load"
    ],
    development: [
      "Built smart auto-fill system for government data",
      "Developed mobile photo-to-PDF converter for document uploads",
      "Implemented real-time form validation",
      "Created analytics dashboard for tracking key metrics"
    ]
  },
  challenges: [
    "Legacy systems that only accepted PDFs",
    "Legal requirements for data verification",
    "Complex government data integration",
    "User resistance to change"
  ],
  solutions: [
    "Built custom PDF converter for mobile uploads",
    "Pre-verified 80% of government data",
    "Reduced form fields from 20+ to 5 essential ones",
    "Implemented real-time validation and feedback"
  ],
  results: [
    {
      metric: "Conversion Rate",
      value: "↑ 55%",
      description: "Increase in successful signups"
    },
    {
      metric: "Completion Time",
      value: "↓ 62%",
      description: "Reduction in form completion time"
    },
    {
      metric: "Support Calls",
      value: "↓ 40%",
      description: "Decrease in customer support tickets"
    }
  ],
  images: {
    wireframes: [
      "/images/petros/wireframe-1.png",
      "/images/petros/wireframe-2.png",
      "/images/petros/wireframe-3.png"
    ],
    final: [
      "/images/petros/final-1.png",
      "/images/petros/final-2.png",
      "/images/petros/final-3.png",
      "/images/petros/final-4.png"
    ]
  }
};

export function PetrosCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
} 