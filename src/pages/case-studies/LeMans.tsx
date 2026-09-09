import { CaseStudyTemplate, type NarrativeCase } from './CaseStudyTemplate';

const caseStudyData: NarrativeCase = {
  kind: 'narrative',
  title: "Le Mans Club: my first product, and what I'd tell myself now",
  metaLine:
    'Product Designer, solo · 2 months · with the founder, a project manager and the development team',
  coverImage: '/images/lemans/card.png',
  coverVideo: '/images/lemans/cover.mp4',
  inShort:
    'Le Mans Club started as a "luxury Uber": a high-end lawyer in São Paulo with a collection of luxury cars wanted an app to rent them out. It was my first professional project as a product designer, and I worked on it alone. After researching the luxury rental market and how its customers actually buy, ==I proposed a wider platform covering the assets the founder already had access to: cars, boats, homes, helicopters.== He agreed, and the product grew into a members-only club with rentals, a concierge and events. The app is live today, by invitation only. Looking back with a few years of experience, I\'d make it smaller, and I\'ll say exactly how below.',
  sections: [
    {
      heading: 'Context and my role',
      paragraphs: [
        'The founder came with a clear picture: an on-demand app for luxury cars, premium in look and feel. I was the only designer, responsible for research, product definition, UX and UI, working directly with him, a project manager and the developers.',
      ],
    },
    {
      heading: 'From a luxury Uber to a platform',
      paragraphs: [
        'Before designing, I spent time on the market: Airbnb Luxe, Turo, Sail.me, LunaJets, MphClub and a few others, mapped feature by feature with what worked and what didn\'t. Two things stood out. The customer of a luxury car rental is the same person who rents a boat for the weekend or a house for the season, and ==the platforms that served them best sold a lifestyle, not a vehicle==: photography first, logistics tucked behind it.',
        'I brought that back as a proposal: instead of an app for cars, a platform for high-value assets, starting with what the founder already had. He liked it, and the scope changed. The most visible result is the home screen, where the first choice a member makes is the category, not the car.',
      ],
      images: [
        {
          src: '/images/lemans/wireframe-1.png',
          caption:
            'Competitor benchmark: five platforms mapped screen by screen, with what worked (green) and what got in the way (red)',
        },
        {
          src: '/images/lemans/final-1.png',
          bare: true,
          caption:
            'Onboarding and the category home: cars, properties, boats, aircraft, café and networking as the first choice',
        },
      ],
    },
    {
      heading: 'The concierge',
      paragraphs: [
        'The founder\'s biggest worry was operational: a car worth a few thousand a day leaves with a stranger and has to come back intact. His first ask was a check-in and check-out inspection with a digital signature and two-factor authentication.',
        'The research had shown something else: the best luxury services don\'t feel like inspections, they feel like being looked after. So I combined the two. The concierge is a chat with a real person who handles the delivery, the handover and the return, and ==the inspection lives inside that conversation as a step, signed on the phone, instead of a form that gets in the way==. The client\'s risk was covered, and the member got the part of the experience they were paying for.',
        'Later we added the club section: members\' events around the same assets, which the founder was already hosting informally.',
      ],
      images: [
        {
          src: '/images/lemans/final-2.png',
          bare: true,
          caption:
            'Asset page and booking: dates, delivery address and driver option, with the specs kept secondary to the photography',
        },
        {
          src: '/images/lemans/final-3.png',
          bare: true,
          caption:
            'Membership card and the concierge: one conversation per asset, from delivery to return',
        },
        {
          src: '/images/lemans/final-4.png',
          bare: true,
          caption:
            'Recommendations across categories, and the club section with members\' events',
        },
      ],
    },
    {
      heading: 'Constraints',
      paragraphs: [
        'A founder with a strong personal taste, including the orange primary color that I\'d have toned down. No existing users to test with, since the product was being created from scratch and the member base would come from the founder\'s network. And a two-month window to define and design the whole platform.',
      ],
    },
  ],
  outcome: {
    areProjected: false,
    intro:
      'The platform was designed end to end within the two months: onboarding, categories, asset pages, booking, concierge, membership and events, plus the admin backoffice. ==The app went live and still runs today, invite-only, for the founder\'s network.==',
    note:
      'I didn\'t stay after delivery and have no usage data. Given what I say next, I suspect some of what we shipped isn\'t used much.',
    tiles: [
      {
        metric: 'Live today, invite-only',
        description: '',
      },
      {
        metric: 'Scope expanded from cars to 4 asset classes',
        description: '',
      },
      {
        metric: 'Designed solo in 2 months',
        description: '',
      },
    ],
  },
  closing: {
    heading: "What I'd do differently",
    paragraphs: [
      'I\'d start smaller. We built a super app on day one: five asset categories, concierge, membership tiers, events, a backoffice, all with almost no real user feedback. Years later, the lesson I keep coming back to is to ==launch the smallest thing that answers the founder\'s actual question==, which here was "will people rent my cars through an app", and let the rest earn its place. I\'d bet that several of the features that went to production are barely touched.',
      'I\'d also make the interface quieter. The real asset of this product is the photography: the cars, the houses, the boats. That doesn\'t need to compete with a loud primary color and heavy UI. The client wanted the orange, and as a first-year designer I didn\'t push back the way I would now.',
      'And I\'d fix the details that give away a first project. Some of the screens in this case still carry placeholder text, and I\'ve left them as they were: this is what my work looked like then, and the point of keeping this case is the distance between then and now.',
    ],
  },
};

export function LeMansCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
