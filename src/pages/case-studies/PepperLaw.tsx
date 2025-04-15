import { CaseStudyTemplate } from './CaseStudyTemplate';

const caseStudyData = {
  title: "Redesigning PepperLaw: Where Legal Tech Meets Human-Centric Magic",
  description: "A complete overhaul of PepperLaw's legal document management system, transforming complex legal processes into intuitive digital workflows.",
  role: "Lead Product Designer",
  timeline: "1 month",
  team: "2 Designers, 5 Developers",
  technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  coverImage: "/images/pepperlaw/cover.png",
  problemStatement: "PepperLaw had a problem: their digital experience felt like doing taxes in a hurricane. Users struggled with clunky workflows for company formation, trademark registration, and contract creation—while competitors like LegalZoom and RocketLawyer set sleek, AI-powered standards. Our mission? Redesign their entire platform to be Brazil's simplest legal tech solution while crafting a marketing strategy that converts skeptics into fans.",
  process: {
    research: [
      "Analyzed over 10 direct and indirect competitors in the legal tech space for best practices",
      "Mapped existing user journeys and pain points",
      "Audited current platform's language and complexity"
    ],
    design: [
      "Created AI-guided journeys for key legal processes",
      "Simplified complex legal terminology into plain Portuguese",
      "Designed an intuitive contract review interface",
      "Developed conversion-focused landing pages"
    ],
    development: [
      "Integrated OpenAI for smart contract reviews",
      "Built automated document generation system",
      "Implemented intelligent chatbot for common legal queries",
      "Created retargeting system with educational content"
    ]
  },
  challenges: [
    "Complex legal terminology needed simplification without losing meaning",
    "Integration of AI while maintaining legal accuracy",
    "High abandonment rates in multi-step processes",
    "Building trust in an automated legal solution"
  ],
  solutions: [
    "Rewritten all legal content in plain language with examples",
    "Developed AI review system with lawyer oversight",
    "Created one-click workflows with progress saving",
    "Added social proof and educational content throughout"
  ],
  results: [
    {
      metric: "Abandoned Forms",
      value: "↓ 45%",
      description: "Because nobody actually enjoys filling out forms"
    },
    {
      metric: "Support Tickets",
      value: "↓ 60%",
      description: "Thanks to our overachieving AI assistant"
    },
    {
      metric: "Social Engagement",
      value: "↑ 80%",
      description: "When's the last time someone shared a legal doc for fun?"
    }
  ],
  images: {
    wireframes: [],
    final: [
      "/images/pepperlaw/final-1.png",
      "/images/pepperlaw/final-2.png",
      "/images/pepperlaw/final-3.png",
      "/images/pepperlaw/final-4.png"
    ],
    comparisons: [
      {
        before: "/images/pepperlaw/old-dashboard.jpg",
        after: "/images/pepperlaw/new-dashboard.jpg",
        beforeLabel: "Old Flow",
        afterLabel: "New Flow",
        description: "Streamlined the Statutory Agreement workflow, reducing complexity and improving user understanding by 60%."
      },
      {
        before: "/images/pepperlaw/old-document.jpg",
        after: "/images/pepperlaw/new-document.jpg",
        beforeLabel: "Old Flow",
        afterLabel: "New Flow",
        description: "Redesigned the Trademark registration workflow with intuitive guidance and real-time application tracking."
      },
      {
        before: "/images/pepperlaw/old-workflow.jpg",
        after: "/images/pepperlaw/new-workflow.jpg",
        beforeLabel: "Old Flow",
        afterLabel: "New Flow",
        description: "Simplified the company formation workflow, making business registration effortless and intuitive."
      }
    ]
  }
};

export function PepperLawCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
