import { Link, useNavigate } from 'react-router-dom';
import { Reveal, DrawLine } from '../components/Reveal';

type Offer = {
  title: string;
  description: string;
  evidence: { label: string; to: string }[];
};

type Step = {
  title: string;
  description: string;
};

const offers: Offer[] = [
  {
    title: 'Product design, end to end',
    description:
      'Research, information architecture, workflows, interface, handoff. I own a product area rather than a screen, and I work directly with product owners and engineers. At Choreograph I own the design of an ads activation product used daily by global brands; at Petros I redesigned a pension enrollment that five departments had to agree on.',
    evidence: [
      { label: 'Choreograph', to: '/case-studies/choreograph' },
      { label: 'Petros', to: '/case-studies/petros' },
    ],
  },
  {
    title: 'Design that ships, front-end included',
    description:
      'I build what I design when a team needs it: React and TypeScript, with AI-assisted tooling, from prototype to production-ready front-end. This portfolio and three product MVPs are built that way. It means my prototypes are real, and my handoffs are short.',
    evidence: [{ label: 'This site', to: '/' }],
  },
  {
    title: 'Zero-to-one for founders',
    description:
      'Turning a promise that has already been sold into a product that can be built: scoping, cutting to the core, design system, first release. PepperLaw went from a sold vision to a full platform design in a month. Le Mans and Bible+ taught me what to cut, and I say so in the cases. This is the work I take on as a freelancer.',
    evidence: [
      { label: 'PepperLaw', to: '/case-studies/pepperlaw' },
      { label: 'Bible+', to: '/case-studies/bibleplus' },
    ],
  },
];

const steps: Step[] = [
  {
    title: 'Reframe the brief',
    description:
      '"More signups" became "stop losing the people who already want to sign up". The brief names a symptom; the first job is finding the lever.',
  },
  {
    title: 'Prototype to align, not to decorate',
    description:
      'When five departments disagree, a clickable prototype ends the "whether" and starts the "which". I build it early and put it in front of the people who have to say yes.',
  },
  {
    title: 'Cut to the core',
    description:
      'Every feature has a reason. Together they make a product nobody understands on first open. I negotiate placement before I negotiate removal, and I remove when I have to.',
  },
  {
    title: 'Ship, measure, and be honest about which is which',
    description:
      'I report what was measured as measured and what was projected as projected. When I did not get to measure, I say that too, and I push for the window to do it.',
  },
];

export function Services() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-24">
          <h1 className="font-display font-medium text-5xl md:text-7xl tracking-tight mb-8 leading-[1.05]">How I work</h1>
          <p className="text-2xl text-white/80 leading-relaxed">
            I design B2B and enterprise products where the hard part is the complexity underneath: regulated flows, data-heavy tools, workflows shared by teams who don't agree. <mark>Most of my work starts with a brief that asks for a feature and ends with a product decision.</mark>
          </p>
          <p className="text-xl text-white/60 leading-relaxed mt-6">
            I work embedded in product teams, and I take on a small number of freelance engagements with founders each year.
          </p>
        </Reveal>

        <section className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-10">What I do</h2>
          <div className="border-t border-white/10">
            {offers.map((offer, index) => (
              <Reveal
                key={offer.title}
                delay={index * 0.06}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10"
              >
                <p className="md:col-span-1 font-display text-2xl text-primary">0{index + 1}</p>
                <h3 className="md:col-span-4 font-display text-3xl md:text-4xl leading-tight tracking-tight">{offer.title}</h3>
                <div className="md:col-span-7">
                  <p className="text-xl text-white/75 leading-relaxed mb-6">{offer.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {offer.evidence.map((item) => (
                      <Link
                        key={item.to + item.label}
                        to={item.to}
                        className="text-primary hover:underline underline-offset-4"
                      >
                        {item.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-10">How a project goes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <p className="font-display text-2xl text-primary">0{index + 1}</p>
                <DrawLine delay={index * 0.06} />
                <h3 className="font-display text-3xl leading-tight tracking-tight mb-3 mt-4">{step.title}</h3>
                <p className="text-xl text-white/75 leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="border-t border-white/10 pt-12">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">Working on something like this?</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            Whether it's a product team that needs a designer who ships, or a founder with a promise to turn into a product, the fastest way to find out if I can help is a conversation.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            Get in touch
          </button>
        </Reveal>
      </div>
    </div>
  );
}
