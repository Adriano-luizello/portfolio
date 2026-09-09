import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Users, Target, CheckCircle2, Calendar, Code, Trophy, Lightbulb } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ComparisonSlider } from '../../components/ComparisonSlider';
import { getAdjacentCaseStudies, type CaseStudyNavItem } from '../../data/caseStudies';

function getYouTubeEmbedUrl(url: string) {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&showinfo=1&modestbranding=1&playsinline=1&loop=1&playlist=${videoId}`;
}

function FigmaIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
      <path className="fill-white" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
      <path className="fill-white" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
      <path className="fill-white" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
      <path className="fill-white" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
      <path className="fill-white" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
    </svg>
  );
}

export type OutcomeTile = {
  metric: string;
  value?: string;
  description: string;
};

type ChecklistCaseFields = {
  title: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  technologies: string[];
  coverImage: string;
  coverVideo?: string;
  confidentialityNote?: string;
  problemStatement: string;
  process: {
    research: string[];
    design: string[];
    development: string[];
  };
  challenges?: string[];
  solutions: string[];
  results: OutcomeTile[];
  resultsAreProjected?: boolean;
  resultsNote?: string;
  lessons?: string[];
  images: {
    wireframes: string[];
    final: string[];
    comparisons?: {
      before: string;
      after: string;
      beforeLabel: string;
      afterLabel: string;
      description: string;
    }[];
    future?: string[];
  };
  nextSteps?: {
    overview: string;
    improvements: {
      title: string;
      description: string;
    }[];
  };
  skipHero?: boolean;
  hideBackButton?: boolean;
};

export type ChecklistCase = { kind: 'checklist' } & ChecklistCaseFields;

export type CaseImage = {
  src: string;
  caption?: string;
};

export type NarrativeSection = {
  heading: string;
  leadIn?: string;
  paragraphs: string[];
  images?: CaseImage[];
};

export type NarrativeCase = {
  kind: 'narrative';
  title: string;
  subtitle?: string;
  metaLine: string;
  coverImage: string;
  coverVideo?: string;
  confidentialityNote?: string;
  inShort: string;
  sections: NarrativeSection[];
  outcome: {
    intro?: string;
    tiles?: OutcomeTile[];
    areProjected?: boolean;
    note?: string;
    images?: CaseImage[];
  };
  closing?: NarrativeSection;
  hideBackButton?: boolean;
};

export type CaseStudyProps = ChecklistCase | NarrativeCase;

/** Unmigrated cases still spread data without `kind`; treat that as checklist. */
type CaseStudyTemplateProps = CaseStudyProps | ChecklistCaseFields;

function isNarrativeCase(props: CaseStudyTemplateProps): props is NarrativeCase {
  return 'kind' in props && props.kind === 'narrative';
}

export function CaseStudyTemplate(props: CaseStudyTemplateProps) {
  const location = useLocation();
  const adjacent = getAdjacentCaseStudies(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isNarrativeCase(props)) {
    return <NarrativeCaseStudy props={props} adjacent={adjacent} />;
  }

  return <ChecklistCaseStudy props={props} adjacent={adjacent} />;
}

function CaseStudyNavCard({
  item,
  direction,
}: {
  item: CaseStudyNavItem;
  direction: 'previous' | 'next';
}) {
  const isNext = direction === 'next';

  return (
    <Link
      to={item.path}
      className={`
        group relative overflow-hidden rounded-3xl bg-neutral-900
        hover:bg-neutral-800 transition-all duration-300
        flex flex-col sm:flex-row ${isNext ? 'sm:flex-row-reverse' : ''}
        min-h-[140px]
      `}
    >
      <div className="relative w-full sm:w-40 h-36 sm:h-auto flex-shrink-0">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300" />
      </div>
      <div className={`flex-1 p-6 flex flex-col justify-center ${isNext ? 'sm:items-end sm:text-right' : ''}`}>
        <span className="inline-flex items-center gap-2 text-sm text-white/50 mb-2">
          {!isNext && <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
          {isNext ? 'Next' : 'Previous'}
          {isNext && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </span>
        <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {item.subtitle}
        </p>
      </div>
    </Link>
  );
}

function AdjacentNav({
  adjacent,
}: {
  adjacent: { prev: CaseStudyNavItem; next: CaseStudyNavItem } | null;
}) {
  if (!adjacent) return null;

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CaseStudyNavCard item={adjacent.prev} direction="previous" />
        <CaseStudyNavCard item={adjacent.next} direction="next" />
      </div>
    </div>
  );
}

function CoverMedia({
  title,
  coverImage,
  coverVideo,
}: {
  title: string;
  coverImage: string;
  coverVideo?: string;
}) {
  if (coverVideo) {
    if (coverVideo.includes('youtube.com')) {
      return (
        <div className="relative pt-[56.25%]">
          <iframe
            src={getYouTubeEmbedUrl(coverVideo)}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${title} cover video`}
          />
        </div>
      );
    }

    return (
      <video autoPlay loop muted playsInline className="w-full">
        <source src={coverVideo} type="video/quicktime" />
        <img src={coverImage} alt={`${title} cover`} className="w-full" />
      </video>
    );
  }

  return <img src={coverImage} alt={`${title} cover`} className="w-full" />;
}

function ImageFigure({
  image,
  matchSize = false,
}: {
  image: CaseImage;
  matchSize?: boolean;
}) {
  // Product shots: fixed 1152/700 box, contain. Sketch trios: fixed 3/2 box, cover so cells match.
  const frameClass = matchSize
    ? 'relative aspect-[3/2] w-full overflow-hidden rounded-2xl'
    : 'relative aspect-[1152/700] w-full';
  const imageClass = matchSize
    ? 'absolute inset-0 h-full w-full object-cover'
    : 'absolute inset-0 m-auto max-h-full max-w-full object-contain rounded-2xl';

  return (
    <figure className="w-full flex flex-col">
      <div className={frameClass}>
        <img
          src={image.src}
          alt={image.caption ?? ''}
          className={imageClass}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-sm text-white/50 leading-relaxed">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionImages({ images }: { images: CaseImage[] }) {
  if (images.length === 0) return null;

  // Sketches / process sets of exactly 3 stay in a row; everything else stacks full width.
  if (images.length === 3) {
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {images.map((image) => (
          <ImageFigure key={image.src} image={image} matchSize />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      {images.map((image) => (
        <ImageFigure key={image.src} image={image} />
      ))}
    </div>
  );
}

function NarrativeSectionBlock({ section }: { section: NarrativeSection }) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-6 max-w-[70ch]">{section.heading}</h2>
      {section.leadIn && (
        <p className="italic text-lg text-white/70 mb-6 max-w-[70ch] leading-relaxed">
          {section.leadIn}
        </p>
      )}
      <div className="space-y-6 max-w-[70ch]">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={`${section.heading}-${index}`}
            className={
              isInlineLeadIn(paragraph)
                ? 'italic text-lg text-white/70 leading-relaxed'
                : 'text-lg text-white/80 leading-relaxed'
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
      {section.images && <SectionImages images={section.images} />}
    </section>
  );
}

function NarrativeCaseStudy({
  props,
  adjacent,
}: {
  props: NarrativeCase;
  adjacent: { prev: CaseStudyNavItem; next: CaseStudyNavItem } | null;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {!props.hideBackButton && (
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      )}

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-[70ch] leading-tight">
          {props.title}
        </h1>
        {props.subtitle && (
          <p className="text-xl text-white/60 mb-6 max-w-[70ch] leading-relaxed">
            {props.subtitle}
          </p>
        )}
        <p className="text-lg text-white/80 mb-12 max-w-[70ch] leading-relaxed">
          {props.metaLine}
        </p>
        <div className="rounded-3xl overflow-hidden bg-neutral-900">
          <CoverMedia
            title={props.title}
            coverImage={props.coverImage}
            coverVideo={props.coverVideo}
          />
        </div>
      </div>

      {props.confidentialityNote && (
        <p className="text-sm text-white/40 mb-12 max-w-[70ch] leading-relaxed">
          {props.confidentialityNote}
        </p>
      )}

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">In short</h2>
        <p className="text-xl leading-loose text-white/80 max-w-[70ch]">
          {props.inShort}
        </p>
      </section>

      {props.sections.map((section) => (
        <NarrativeSectionBlock key={section.heading} section={section} />
      ))}

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">
          {props.outcome.areProjected ? 'Projected results' : 'Outcome'}
        </h2>
        {props.outcome.intro && (
          <div className="space-y-6 max-w-[70ch]">
            {props.outcome.intro.split(/\n\n+/).map((paragraph, index) => (
              <p key={index} className="text-lg text-white/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {props.outcome.images && <SectionImages images={props.outcome.images} />}
        {props.outcome.tiles && props.outcome.tiles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {props.outcome.tiles.map((result) => (
              <div
                key={result.metric}
                className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
                    {result.value ? (
                      <Trophy className="w-6 h-6 text-white/80" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6 text-white/60" />
                    )}
                  </div>
                  {result.value ? (
                    <div className="text-4xl font-bold mb-4 text-center">{result.value}</div>
                  ) : null}
                  <h3 className="text-xl font-bold mb-3 text-center">{result.metric}</h3>
                  {result.description && (
                    <p className="text-white/60 text-center">{result.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {props.outcome.note && (
          <p className="text-lg text-white/80 mt-6 max-w-[70ch] leading-relaxed">
            {props.outcome.note}
          </p>
        )}
      </section>

      {props.closing && <NarrativeSectionBlock section={props.closing} />}

      <AdjacentNav adjacent={adjacent} />
    </div>
  );
}

/** Second (and later) italic questions stored as their own paragraph. */
function isInlineLeadIn(paragraph: string) {
  const trimmed = paragraph.trim();
  return trimmed.endsWith('?') && trimmed.length < 140 && !trimmed.includes('. ');
}

function ChecklistCaseStudy({
  props,
  adjacent,
}: {
  props: ChecklistCaseFields;
  adjacent: { prev: CaseStudyNavItem; next: CaseStudyNavItem } | null;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {!props.hideBackButton && (
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      )}

      {!props.skipHero && (
        <div className="mb-24">
          <h1 className="text-5xl font-bold mb-6">{props.title}</h1>
          <p className="text-xl text-white/60 mb-12">
            {props.description}
          </p>
          <div className="rounded-3xl overflow-hidden bg-neutral-900">
            <CoverMedia
              title={props.title}
              coverImage={props.coverImage}
              coverVideo={props.coverVideo}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
        <div>
          <h3 className="text-lg font-medium text-white/60 mb-3">Timeline</h3>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white/60" />
            </div>
            <div>
              <p className="text-xl font-medium">{props.timeline}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white/60 mb-3">Role</h3>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white/60" />
            </div>
            <div>
              <p className="text-xl font-medium leading-tight">{props.role}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white/60 mb-3">Team</h3>
          <div className="flex flex-col gap-2">
            {props.team.split(', ').map((member, index) => {
              const icon = member.includes('Designer') ? (
                <Users className="w-5 h-5 text-white/60" />
              ) : member.includes('Developer') ? (
                <Code className="w-5 h-5 text-white/60" />
              ) : (
                <Target className="w-5 h-5 text-white/60" />
              );

              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xl font-medium">{member}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white/60 mb-3">Design Tool</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-sm">
              <FigmaIcon />
              Figma
            </span>
          </div>
        </div>
      </div>

      {props.confidentialityNote && (
        <p className="text-sm text-white/40 mb-8 max-w-3xl leading-relaxed">
          {props.confidentialityNote}
        </p>
      )}

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
        <div className="bg-neutral-900 rounded-3xl p-8">
          <p className="text-xl leading-relaxed">
            {props.problemStatement}
          </p>
        </div>
      </div>

      {props.challenges && props.challenges.length > 0 && (
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Constraints</h2>
          <div className="bg-neutral-900 rounded-3xl p-8">
            <ul className="space-y-4">
              {props.challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-white/60" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12">Process</h2>
        <div className="space-y-12">
          <div className="bg-neutral-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Research</h3>
            <ul className="space-y-4">
              {props.process.research.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-white/60" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Design</h3>
            <ul className="space-y-4">
              {props.process.design.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-white/60" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Development</h3>
            <ul className="space-y-4">
              {props.process.development.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-white/60" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {props.images.comparisons && props.images.comparisons.length > 0 && (
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Workflow Comparisons</h2>
          <div className="space-y-16">
            {props.images.comparisons.map((comparison, index) => (
              <div key={index} className="space-y-6">
                <ComparisonSlider
                  beforeImage={comparison.before}
                  afterImage={comparison.after}
                  beforeLabel={comparison.beforeLabel}
                  afterLabel={comparison.afterLabel}
                  className="aspect-[2/1] group"
                />
                <p className="text-lg text-white/60 text-center">
                  {comparison.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {props.images.wireframes && props.images.wireframes.length > 0 && (
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Design Process</h2>
          <div className={`${props.title.includes('Bible+') || props.title.includes('Le Mans') ? 'space-y-8' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}`}>
            {props.images.wireframes.map((image, index) => (
              <div key={index} className={props.title.includes('Bible+') || props.title.includes('Le Mans') && index === 0 ? 'col-span-2' : ''}>
                <img
                  src={image}
                  alt={`Wireframe ${index + 1}`}
                  className={`rounded-3xl mb-4 ${props.title.includes('Bible+') || props.title.includes('Le Mans') && index === 0 ? 'w-full' : ''}`}
                />
                <p className="text-white/60">Wireframe Iteration {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12">Final Design</h2>
        <div className="grid grid-cols-1 gap-12">
          {props.images.final.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Final design ${index + 1}`}
                className="w-full rounded-2xl bg-neutral-900"
              />
            </div>
          ))}
        </div>
      </div>

      {props.nextSteps && (
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
          <div className="bg-neutral-900 rounded-3xl p-8 mb-12">
            <p className="text-xl leading-relaxed mb-8">
              {props.nextSteps.overview}
            </p>
            <div className="space-y-6">
              {props.nextSteps.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 mt-1 text-white/60" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">{improvement.title}</h3>
                    <p className="text-white/60">{improvement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {props.images.future && (
            <div className="grid grid-cols-1 gap-12">
              {props.images.future.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`Future concept ${index + 1}`}
                    className="w-full rounded-2xl bg-neutral-900"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mb-24">
        <h2 className={`text-3xl font-bold ${props.resultsAreProjected || props.resultsNote ? 'mb-6' : 'mb-12'}`}>
          {props.resultsAreProjected ? 'Projected Results' : 'Results'}
        </h2>
        {props.resultsAreProjected && (
          <div className="bg-neutral-900 rounded-3xl px-8 py-4 mb-12">
            <p className="text-white/70">
              These figures are projections, not measured outcomes from a live launch.
            </p>
          </div>
        )}
        {props.resultsNote && (
          <p className="text-sm text-white/50 mb-12 max-w-3xl leading-relaxed">
            {props.resultsNote}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.results.map((result, index) => (
            <div key={index} className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
                  {result.value ? (
                    <Trophy className="w-6 h-6 text-white/80" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-white/60" />
                  )}
                </div>
                {result.value ? (
                  <div className="text-4xl font-bold mb-4">{result.value}</div>
                ) : (
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                    Qualitative outcome
                  </p>
                )}
                <h3 className="text-xl font-bold mb-3">{result.metric}</h3>
                <p className="text-white/60 text-center">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {props.lessons && props.lessons.length > 0 && (
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6">What I learned</h2>
          <div className="bg-neutral-900 rounded-3xl p-8">
            <ul className="space-y-4">
              {props.lessons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-white/60" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <AdjacentNav adjacent={adjacent} />
    </div>
  );
}
