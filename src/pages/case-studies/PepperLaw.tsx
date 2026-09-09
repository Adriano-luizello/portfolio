import { CaseStudyTemplate, type NarrativeCase } from './CaseStudyTemplate';

const caseStudyData: NarrativeCase = {
  kind: 'narrative',
  title: 'PepperLaw: turning a legal-tech promise into a product in one month',
  metaLine:
    'Lead Product Designer · 1 month · with 1 junior designer, 5 developers and the two founders',
  coverImage: '/images/pepperlaw/cover.png',
  inShort:
    'PepperLaw was an early-stage legal-tech startup in Brazil. The founders, both lawyers with around twenty years of practice, had an MVP that law firms were already paying for, and a value proposition they had already sold: company formation, trademark registration and contracts, drafted with AI and reviewed by a real lawyer, all in one place. What they didn\'t have was the product that delivered it. I led the design of that product from the ground up: information architecture, workflows, navigation, error states, the design system, and the landing page. Along the way we cut company formation from 12 steps to 7 and trademark registration from 10 to 6.',
  sections: [
    {
      heading: 'Context and my role',
      paragraphs: [
        'The founders were the client. They had sold the vision to their first customers and were in early conversations with larger partners, so the brief was less "find the problem" and more "deliver what we promised, fast". I had one month, one junior designer reporting to me, and five developers.',
        'I owned the product design end to end: mapping and refining every workflow, defining the navigation and information architecture, designing screens and edge cases, and building the design system the developers would work from. The junior designer worked with me on components and screens.',
        'One constraint shaped everything: I had no access to the end customers. Feedback came through the founders, filtered by what they had heard and what they had promised. I treated their legal expertise as the validation layer I did have, and designed so that what we shipped could be measured and corrected later.',
      ],
      images: [
        {
          src: '/images/pepperlaw/final-2.png',
          bare: true,
          caption:
            'The dashboard: every product the founders had sold, in one place, with request status and contracts side by side',
        },
      ],
    },
    {
      heading: 'Cutting the flows',
      paragraphs: [
        'The MVP\'s flows had grown by accretion: every legal requirement, every edge case, every founder idea had become a step. I mapped each flow end to end and annotated where a step existed because the law required it, because the MVP\'s tech required it, or because nobody had asked.',
        'Company formation went from 12 steps to 7. Trademark registration went from 10 to 6. The cuts came from merging steps that asked for the same information twice, moving optional choices out of the main path, and letting the AI assistant carry part of the load: instead of asking a user to classify their trademark from a list, Pepper asks what they sell and proposes the class.',
      ],
      images: [
        {
          src: '/images/pepperlaw/flow-company-formation.png',
          caption:
            'Company formation, before and after: the same legal outcome with fewer questions, automatic validation, and AI filling what it can infer',
        },
        {
          src: '/images/pepperlaw/final-3.png',
          bare: true,
          caption:
            'Trademark registration: the user describes the business in plain words and Pepper proposes the trademark class',
        },
      ],
    },
    {
      heading: 'AI that drafts, lawyers that review',
      paragraphs: [
        'The hardest product decision was how much to trust the AI. Competitors were selling AI as a replacement for lawyers, and in Brazil that is both a legal risk and a trust problem: people don\'t sign a contract because a chatbot said it was fine.',
        'We designed the two as layers of the same flow. The AI drafts and reviews: it flags contradictions between clauses, suggests plainer wording, and explains what it changed. And at any point the user can book a lawyer\'s hour for a human review, inside the same platform, without leaving the document. The founders\' network of lawyers made this possible; the design made it feel like one product instead of a chatbot with a phone number attached.',
      ],
      images: [
        {
          src: '/images/pepperlaw/final-4.png',
          bare: true,
          caption:
            'Contract review: Pepper flags a contradiction between clauses 4 and 7, proposes a fix, and the option to talk to a lawyer stays one click away',
        },
      ],
    },
    {
      heading: 'Plain language, with a lawyer in the loop',
      paragraphs: [
        'Legal copy in the MVP read like it was written for other lawyers. We rewrote the interface language in plain Portuguese, with examples. Every rewrite went through the founding partner, a practicing lawyer, to make sure simpler didn\'t mean wrong. That review loop was the closest thing to user testing the project had, and it was the guardrail against simplifying too far.',
      ],
    },
    {
      heading: 'Constraints',
      paragraphs: [
        'One month for the whole product, from architecture to design system. No direct contact with end users. Legal accuracy as a hard limit on how far we could simplify. And a founding team that had already committed to customers on scope and timing, which meant every cut had to be argued in terms of what the customer would still get.',
      ],
    },
  ],
  outcome: {
    areProjected: false,
    intro:
      'We delivered the full platform design and design system to the development team within the month: company formation, trademark registration, contract drafting with AI review, lawyer booking, dashboard and landing page. Both core flows got shorter, measured step by step against the MVP.',
    note:
      'I left after delivery and don\'t have production data. I\'m not going to invent conversion numbers for a product I didn\'t get to measure.',
    images: [
      {
        src: '/images/pepperlaw/final-1.png',
          bare: true,
        caption:
          'Account creation: a 30-day trial and a customer quote instead of a feature list',
      },
    ],
    tiles: [
      {
        metric: 'Full platform in 1 month',
        description: '',
      },
      {
        metric: 'Design system shipped to 5 developers',
        description: '',
      },
      {
        metric: 'Up to 42% fewer steps per flow',
        description: '',
      },
    ],
  },
  closing: {
    heading: "What I'd do differently",
    paragraphs: [
      'I\'d fight harder for direct access to the paying customers, even a handful of calls. Designing from founder-relayed feedback works when the founders are domain experts, and these were, but it still leaves you designing for their picture of the user rather than the user. And I\'d push for a short window after launch to test with real users and iterate on production behavior, which is the part of the job I care most about and the part a one-month engagement never includes.',
    ],
  },
};

export function PepperLawCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
