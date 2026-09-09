import { CaseStudyTemplate, type NarrativeCase } from './CaseStudyTemplate';

const caseStudyData: NarrativeCase = {
  kind: 'narrative',
  title: 'Choreograph: turning ad targeting from a rulebook into a map',
  metaLine:
    'Product Designer, owner of Create Optimization · 1.5 years on this project · with 3 product owners and a team of around 15 developers',
  coverImage: '/images/choreograph/cover.png',
  coverVideo: 'https://www.youtube.com/watch?v=yOF-SwgrgL8',
  confidentialityNote:
    'Screens shown are product interfaces from my work at Choreograph. Client data, campaign details and identifying information have been omitted.',
  inShort:
    'At Choreograph, WPP\'s data and technology company, I own the design of Create Optimization, the product activation teams use to decide which ad goes to whom, where and when. The most significant thing I designed there is the Decision Tree: a visual way to build targeting strategies that replaced a rule-based workflow where nobody could see the whole strategy or which rule beat which. It\'s in production, used daily by global brands and their agencies, and ==the product\'s VP called it the most relevant launch of the last four years==. The work that mattered most wasn\'t the tree itself; it was keeping it simple while an entire ad-tech organization wanted to add one more thing to it.',
  sections: [
    {
      heading: 'Context and my role',
      paragraphs: [
        'Choreograph\'s design team works one designer per product, as peers. Mine is Create Optimization, the activation side of the platform: campaign setup, targeting, ad variants, trafficking. Product owners hold the client relationships and bring the feedback; I turn it into product decisions with them and with the engineering team. I also support Creative Analytics when needed, but activation is my remit.',
      ],
      images: [
        {
          src: '/images/choreograph/final-1.png',
          bare: true,
          caption:
            'A strategy starts from one node. The side panel lists what can come next; the canvas stays empty until the user decides',
        },
      ],
    },
    {
      heading: 'The problem: strategy you couldn\'t see',
      paragraphs: [
        'Before the Decision Tree, targeting was set up with rules: a list of conditions and outcomes that behaved like a spreadsheet. It worked for small campaigns. At scale it had two failures that clients kept reporting. You couldn\'t see the strategy as a whole, only rows. And ==you couldn\'t tell which rule took precedence when two of them overlapped==, which meant the wrong variant could reach the wrong audience and nobody would know until the report.',
        'The request from clients was "make it clearer". The design question was: clearer how?',
      ],
      images: [
        {
          src: '/images/choreograph/final-4.png',
          bare: true,
          caption:
            'The same strategy as a table: one row per variant with live status. Good for auditing, useless for seeing the shape of the strategy',
        },
      ],
    },
    {
      heading: 'Why a tree',
      paragraphs: [
        'A targeting strategy is a sequence of decisions: by location, then by audience, then by time or weather, ending in an ad variant. Drawn as a tree, ==precedence stops being a hidden property of the rules and becomes the shape of the diagram==: whatever is upstream decides first. Overlaps become visible as branches. The whole strategy fits on one canvas, and the side panel shows the detail of whichever node you\'re on.',
        'We validated the direction in research with internal stakeholders, external clients and agencies in markets as different as Colombia and the Nordics. The tree read the same way everywhere, which is what a visual grammar for strategy needs to do.',
      ],
      images: [
        {
          src: '/images/choreograph/wireframe-2.jpg',
          caption:
            'The logic mapped before the canvas: every action a user can take on a node, and what the system does in response',
        },
        {
          src: '/images/choreograph/cover.png',
          bare: true,
          caption:
            'The Decision Tree: location first, then audience, each branch ending in an ad variant. Precedence is the shape of the diagram',
        },
      ],
    },
    {
      heading: 'Keeping it out of the cockpit',
      paragraphs: [
        'Ad tech has a lot of knobs, and every one of them has an owner who wants it visible. The biggest fight of this project was against the interface becoming an airplane cockpit. One example: tracker generation and tagging. The pressure was to put it in the top bar, always on. Trackers matter, but only at a specific moment in the flow, so I kept them inside the side panel, surfaced by context: they appear when you\'re on a node where they make sense, and stay out of the way otherwise. Same for inheritance: trackers set at the root flow down to the leaves automatically, so users set them once instead of on every variant.',
        '==None of the features were removed. They were placed where the task needed them==, which is a different negotiation from "cut it".',
      ],
      images: [
        {
          src: '/images/choreograph/final-2.png',
          bare: true,
          caption:
            'Node configuration lives in the side panel: conditions, outcomes and the ad variants attached to this branch, nothing from other branches',
        },
      ],
    },
    {
      heading: 'Scaling past drag and drop',
      paragraphs: [
        'The first versions had weak bulk actions, and it showed with real campaigns: a tree with dozens of cities and time slots meant dragging dozens of nodes. The fix came from how activation teams actually work. They already organize campaigns in spreadsheets, so we built a CSV import where ==the user maps their columns to the tree\'s dimensions and the tree builds itself==: nodes created, targeting configured, ads assigned. The drag-and-drop stays for adjustments; the heavy lifting moved to a format the teams already had.',
      ],
      images: [
        {
          src: '/images/choreograph/final-3.png',
          bare: true,
          caption:
            'Ad variants generated in bulk from templates and feeds, ready to be attached to the tree',
        },
      ],
    },
    {
      heading: 'Constraints',
      paragraphs: [
        'A mature platform with existing clients, so nothing could break the rule-based flows people still ran. Many stakeholders with legitimate feature requests. And performance with large trees, which shaped how much the canvas could show at once.',
      ],
    },
    {
      heading: 'What\'s next',
      paragraphs: [
        'The roadmap\'s first priority is an AI-assisted workflow: describing a strategy in plain language and getting a first tree to refine. After that, connecting several nodes to the same destination to reduce redundancy in large campaigns, and a campaign changelog. The concepts below are explorations, not shipped work.',
      ],
      images: [
        {
          src: '/images/choreograph/future-1.png',
          bare: true,
          caption:
            'Concept: describe the strategy in plain language and get a first tree to refine',
        },
        {
          src: '/images/choreograph/future-3.png',
          bare: true,
          caption:
            'Concept: a campaign changelog alongside the targeting table, so every change has an author and a time',
        },
      ],
    },
  ],
  outcome: {
    areProjected: false,
    intro:
      'The Decision Tree is in production and used daily by activation teams at global brands and agencies. The product\'s VP described it as the most relevant launch in the last four years.',
    note: 'Screens in this case are the product\'s interfaces with client data removed, and I\'m not sharing performance metrics here.',
    tiles: [
      {
        metric: 'In production, used daily',
        description: '',
      },
      {
        metric: '"Most relevant launch in 4 years"',
        description: 'Product VP',
      },
      {
        metric: 'Validated across 3 continents',
        description: '',
      },
    ],
  },
  closing: {
    heading: "What I'd do differently",
    paragraphs: [
      '==I\'d have pushed the CSV import into the first release.== We learned about the bulk problem from real campaigns, which is a good way to learn but a slow one, and the signal was already there in research: every team we talked to had a spreadsheet. I\'d also have set a rule earlier for what goes in the top bar, before the first request arrived, instead of negotiating each one.',
    ],
  },
};

export function ChoreographCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
