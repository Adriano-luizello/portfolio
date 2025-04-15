import { CaseStudyTemplate } from './CaseStudyTemplate';
import { PasswordProtection } from '../../components/PasswordProtection';
import { useEffect, useState } from 'react';

const caseStudyData = {
  title: "Redesigning Choreograph: The Omnichannel Revolution",
  description: "Transforming a legacy ad platform from a chaotic spreadsheet-based system into a unified Omnichannel workflow that streamlined creative and activation processes.",
  role: "Product Design",
  timeline: "1.5 years",
  team: "3 Designers, 15 Developers, 3 Product Owners",
  technologies: ["React", "TypeScript", "Node.js", "AWS"],
  coverImage: "/images/choreograph/cover.png",
  problemStatement: "Choreograph's legacy ad platform was stuck in the dark ages—think Frankenstein's monster of spreadsheets, fragmented workflows, and zero version control. Creative teams and activation specialists were constantly at war over who broke what, while clients got lost in a maze of unapproved changes and untraceable targeting logic.",
  process: {
    research: [
      "Analyzed pain points in existing spreadsheet-based workflow",
      "Conducted interviews with creative teams and activation specialists",
      "Studied version control systems in other industries",
      "Mapped out existing user journeys and pain points"
    ],
    design: [
      "Created low-fidelity wireframes for the unified workflow",
      "Developed high-fidelity prototypes for Ad Variants system",
      "Designed visual decision tree builder for targeting logic",
      "Built interactive preview system for activation teams"
    ],
    development: [
      "Implemented version control for ad variants",
      "Created drag-and-drop decision tree builder",
      "Built inheritance rules system",
      "Developed preview functionality"
    ]
  },
  challenges: [
    "Managing complex version control across multiple channels",
    "Creating intuitive targeting logic interface",
    "Ensuring smooth collaboration between creative and activation teams",
    "Maintaining system performance with large datasets"
  ],
  solutions: [
    "Implemented Ad Variants with full history tracking",
    "Created visual drag-and-drop decision tree builder",
    "Added smart inheritance rules for targeting",
    "Built preview system for activation teams"
  ],
  results: [
    {
      metric: "Setup Time",
      value: "↓ 60%",
      description: "Reduction in ad setup time with reusable decision trees"
    },
    {
      metric: "Team Collaboration",
      value: "↑ 85%",
      description: "Improvement in cross-team collaboration"
    },
    {
      metric: "Error Reduction",
      value: "↓ 75%",
      description: "Decrease in targeting and version control errors"
    }
  ],
  images: {
    wireframes: [
      "/images/choreograph/wireframe-1.jpg",
      "/images/choreograph/wireframe-2.jpg",
      "/images/choreograph/wireframe-3.png"
    ],
    final: [
      "/images/choreograph/final-1.png",
      "/images/choreograph/final-2.png",
      "/images/choreograph/final-3.png",
      "/images/choreograph/final-4.png"
    ],
    future: [
      "/images/choreograph/future-1.png",
      "/images/choreograph/future-2.png",
      "/images/choreograph/future-3.png"
    ]
  },
  nextSteps: {
    overview: "Based on user interviews and feedback, we identified several key areas for future improvement to make the platform even more powerful and user-friendly.",
    improvements: [
      {
        title: "AI-Powered Decision Trees",
        description: "Implement AI agents to assist users in setting up decision trees, making the process more intuitive and reducing setup time."
      },
      {
        title: "Enhanced Node Connections",
        description: "Allow users to connect multiple nodes to the same destination node, significantly simplifying complex campaign setups and reducing redundancy."
      },
      {
        title: "Campaign Changelog",
        description: "Introduce a comprehensive changelog feature to help users track and analyze campaign modifications over time, improving transparency and debugging capabilities."
      }
    ]
  }
};

export function ChoreographCaseStudy() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem('choreograph-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={handleAuthSuccess} />;
  }

  return <CaseStudyTemplate {...caseStudyData} />;
} 