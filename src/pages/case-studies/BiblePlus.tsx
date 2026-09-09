import { CaseStudyTemplate, type NarrativeCase } from './CaseStudyTemplate';

const caseStudyData: NarrativeCase = {
  kind: 'narrative',
  title: 'Bible+: designing an app around content that was never tested',
  metaLine:
    'Lead Product Designer · 3 months · with 1 junior designer and the founders',
  coverImage: '/images/bibleplus/card.png',
  coverVideo: '/images/bibleplus/cover.mp4',
  inShort:
    'A VP at Rede Record, one of Brazil\'s largest TV networks, invited me to design a Bible study app that wouldn\'t feel dogmatic. The idea at its center was "18 minutos": audio-drama episodes about books of the Bible, produced by a creative partner with professional actors and screenwriters. I led the design with a junior designer: research, information architecture, the design system and the interface. We took a brief that wanted everything and narrowed it to the features that carried the actual value. The app was fully designed and never launched: the founders were waiting for an investor to fund episode production, and he didn\'t come. That outcome taught me more about product than most launches have.',
  sections: [
    {
      heading: 'Context and my role',
      paragraphs: [
        'The founders came from television. They knew how to produce, and their bet was that Scripture would reach a new audience if it sounded like a well-made drama rather than a sermon. My role was to turn that bet into a product: lead the design, run the market and competitor research with the junior designer, define the architecture, build the design system and design the screens.',
      ],
      images: [
        {
          src: '/images/bibleplus/final-1.png',
          bare: true,
          caption:
            'Home and sign-in: the verse of the day, then the episodes. The app opens on content, not on a menu',
        },
        {
          src: '/images/bibleplus/wireframe-2.png',
          caption:
            'Benchmark notes from the research phase: what audio-plus-text readers did well, and what we should borrow',
        },
      ],
    },
    {
      heading: 'Narrowing the scope',
      paragraphs: [
        'The first brief listed everything at once: the 18-minute episodes, learning tracks, Bible reading with highlighting and synced audio, notes and journal, reminders, sharing. Every feature had a reason, and together they made an app nobody would understand on first open.',
        'With the junior designer I mapped the competitors (Glorify, YouVersion-style readers, audio-learning apps like 12min) and ran conversations with religious users about how they actually read and listen. The pattern was clear: people wanted short audio with context, and a place to keep what they\'d read. That gave us a hierarchy. The episodes were the core. Reading with notes was the companion. Everything else waited. The learning tracks were designed but never reached development, and that was the right call for the budget.',
      ],
      images: [
        {
          src: '/images/bibleplus/wireframe-1.jpg',
          caption:
            'The full flow map after the cut: episodes at the center, reading and notes alongside, everything else out of the main path',
        },
        {
          src: '/images/bibleplus/final-2.png',
          bare: true,
          caption:
            'The 18-minute episodes and the player: the product\'s core, one screen away from launch',
        },
      ],
    },
    {
      heading: 'Tone without dogma',
      paragraphs: [
        'The hard design problem was tone. The client wanted the app to feel modern and open, not preachy, but this is sacred text for the audience, and "engaging" is one bad decision away from "trivializing". The direction we settled on was restraint: a calm, mostly monochrome interface, photography instead of iconography, no gamification of Scripture itself. Progress and reminders exist, but they\'re about the habit of reading, not about scoring the Bible.',
      ],
      images: [
        {
          src: '/images/bibleplus/final-3.png',
          bare: true,
          caption:
            'Reading with highlights and notes: the text stays the focus, the tools stay quiet',
        },
        {
          src: '/images/bibleplus/final-4.png',
          bare: true,
          caption:
            'Journal and reminders: a habit, not a score',
        },
      ],
    },
    {
      heading: 'Constraints',
      paragraphs: [
        'Content cost. Each episode was a full audio production with actors and writers, and the founders wouldn\'t lower the quality bar. That made the content expensive, which made the app dependent on outside money, which is what eventually stopped it. Three months for the whole product. And a client with strong opinions about features, which required patience more than argument.',
      ],
    },
  ],
  outcome: {
    areProjected: false,
    intro:
      'The full app was designed: onboarding, home with the verse of the day, the 18-minute episodes and player, Bible reading with highlights and notes, journal, reminders and sharing, on a design system ready for handoff. The app never reached the stores: the founders chose to wait for investment to fund episode production, and as far as I followed the project, it didn\'t arrive.',
    note: 'There are no metrics to report and I won\'t invent any.',
    tiles: [
      {
        metric: 'Fully designed in 3 months',
        description: '',
      },
      {
        metric: 'Scope cut to the core',
        description: '',
      },
      {
        metric: 'Never launched, and I know why',
        description: '',
      },
    ],
  },
  closing: {
    heading: "What I'd do differently",
    paragraphs: [
      'I\'d test the content before building the app. Everything in Bible+ was built around the 18-minute episodes, and those episodes were never validated beyond the founders\' conviction. Today I\'d put the first episodes on YouTube and Spotify, where distribution is free and the audience is already there, and let the numbers decide whether an app was worth building at all.',
      'The app was only ever an additional way to distribute that content, and we built the distribution before we had proof of the thing being distributed. That\'s the lesson I carry from this project, and it\'s the same one I apply to my own products now.',
    ],
  },
};

export function BiblePlusCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
