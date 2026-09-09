import { CaseStudyTemplate, type NarrativeCase } from './CaseStudyTemplate';

const caseStudyData: NarrativeCase = {
  kind: 'narrative',
  title:
    'Petros: turning a pension signup nobody finished into a flow people could complete in one sitting',
  metaLine:
    'Lead Product Designer, embedded at Petros via IK Solution · 4 months · with 2 developers and 1 product manager',
  coverImage: '/images/petros/cover.png',
  inShort:
    'Petros, one of Brazil\'s largest pension funds, wanted more members. What they had was a signup process so long and document-heavy that most people who started it never finished. I led the redesign of the entire enrollment workflow: I reframed the brief from "more signups" to "fewer people giving up", proposed document scanning with auto-fill to remove most of the manual data entry, and used a working prototype to get legal, marketing, sales and the business team to agree on which steps and documents could go. The result was a flow that could be completed in a single session, approved by all five areas and handed to development within the four-month engagement.',
  sections: [
    {
      heading: 'Context and my role',
      paragraphs: [
        'I was placed inside Petros through IK Solution for four months. The brief from the business side was an outcome, not a feature: increase the number of enrolled members. Nobody had asked for a redesign of the signup.',
        'My role covered strategy and design end to end. Day to day, roughly half my time went to aligning expectations across the business team, the VP, legal, marketing and sales, and the other half to working with the two developers and the PM on what could actually be built.',
      ],
    },
    {
      heading: 'Reframing the problem',
      paragraphs: [
        'Before touching any screen, we mapped the existing enrollment journey. It was long, complex and slow: many steps, many documents (birth certificate among them), and a lot of information users had to type by hand that Petros or the government already held. People weren\'t rejecting the product; they were abandoning the paperwork.',
        'That changed the conversation. "How do we get more signups" became "how do we stop losing the people who already want to sign up". The lever was the funnel itself.',
      ],
    },
    {
      heading: 'Two questions that shaped the solution',
      leadIn: 'Which of these documents are actually required?',
      paragraphs: [
        'Working with legal, we went through each requirement and asked whether it came from regulation or from internal process. A significant share turned out to be internal rules that had never been updated, requiring documents that duplicated information already collected elsewhere. Those were redundant, not mandatory, and they came out.',
        'Why is the user typing data that\'s already on the document they\'re uploading?',
        'This was my proposal: scan the document, extract the fields with a third-party OCR service, and pre-fill the form. The user\'s job shifts from data entry to review. Where the scan couldn\'t read a field, the user corrects it in place. That fallback mattered as much as the happy path, because for a pension fund a wrong digit is not a small error. Data the sponsor company already held, like the admission date and employee number, came in locked: nothing to type, nothing to get wrong.',
      ],
      images: [
        {
          src: '/images/petros/final-form-filled.png',
          caption:
            'After the scan: fields pre-filled from the uploaded ID, employer data locked, and a clear fallback when the CPF could not be read',
        },
        {
          src: '/images/petros/final-3.png',
          caption:
            'Review step: the user checks pre-filled data instead of typing it, and edits anything the scan missed',
        },
      ],
    },
    {
      heading: 'Getting five areas to agree',
      paragraphs: [
        'I didn\'t try to negotiate the new flow in meetings. I built a prototype of how the workflow would feel and presented that instead. Once people could click through it, the discussion moved from whether to change the process to which steps and fields stayed. From there it was refinement: which documents, which information, in which order.',
        'There was friction, because each area had a legitimate interest. Marketing wanted to keep the ability to contact new members, which pulled toward more data capture at signup. We settled on a model where users choose how they want to be contacted through a simple preferences panel: marketing keeps the channel, the user keeps control, and the signup doesn\'t gain any friction.',
      ],
      images: [
        { src: '/images/petros/wireframe-1.png', caption: 'Workflow sketch 1' },
        { src: '/images/petros/wireframe-2.png', caption: 'Workflow sketch 2' },
        { src: '/images/petros/wireframe-3.png', caption: 'Workflow sketch 3' },
      ],
    },
    {
      heading: 'Making a financial decision visible',
      paragraphs: [
        'The hardest screen wasn\'t the document upload. It was the contribution step, where users choose their basic contribution and an optional voluntary one. The concept is opaque to most people, and the difference between the two directly affects their future pension.',
        'I worked with the business team to understand the actual calculation, then designed a simulator that recalculates in real time as the user moves the contribution slider, showing the breakdown and the projected impact on their future pension. Instead of explaining the rule, the interface lets people see it.',
      ],
      images: [
        {
          src: '/images/petros/final-1.png',
          caption:
            'Contribution simulator: the projection updates in real time as the slider moves',
        },
      ],
    },
    {
      heading: 'Constraints',
      paragraphs: [
        'Legacy systems only accepted PDFs, so uploads from phones had to be converted server-side. Government data integration had limits on what could be pulled automatically. And there was ongoing resistance to changing a process that had been in place for years, which the prototype helped more than any argument.',
      ],
    },
  ],
  outcome: {
    areProjected: true,
    intro:
      'The redesigned flow was approved by legal, marketing, sales and the business team and delivered to development within the engagement. In usability testing of the final version, participants completed the enrollment in a fraction of the time the original process took, and raised far fewer questions along the way.',
    note:
      'We weren\'t retained after delivery, so I don\'t have production data. Based on the usability sessions, we projected a 55% higher completion rate, 62% less time to complete, and around 40% fewer support calls. I present these as projections, not measured results.',
    images: [
      {
        src: '/images/petros/final-4.png',
        caption:
          'Confirmation: enrollment number, PDF receipt and app download in one screen',
      },
    ],
    tiles: [
      {
        metric: 'Approved by 5 areas',
        description: '',
      },
      {
        metric: 'Single-session enrollment',
        description: '',
      },
      {
        metric: 'Delivered in 4 months',
        description: '',
      },
    ],
  },
  closing: {
    heading: "What I'd do differently",
    paragraphs: [
      'The one thing missing from this project is real data. I would have negotiated a follow-up window after delivery to track completion rates and support volume in production, and used that to iterate on the flow, especially the contribution step. That wasn\'t how the engagement model worked: once the product was handed over, the team moved to the next client. Today I\'d push for that window as part of the initial scope, not as an afterthought.',
    ],
  },
};

export function PetrosCaseStudy() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
