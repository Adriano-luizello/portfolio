import { ArrowLeft, Users, Target, CheckCircle2, Calendar, Code, Trophy, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ComparisonSlider } from '../../components/ComparisonSlider';

// Figma icon component
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

interface CaseStudyProps {
  title: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  technologies: string[];
  coverImage: string;
  problemStatement: string;
  process: {
    research: string[];
    design: string[];
    development: string[];
  };
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
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
}

export function CaseStudyTemplate(props: CaseStudyProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back Button */}
      {!props.hideBackButton && (
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      )}

      {/* Hero Section */}
      {!props.skipHero && (
        <div className="mb-24">
          <h1 className="text-5xl font-bold mb-6">{props.title}</h1>
          <p className="text-xl text-white/60 mb-12">
            {props.description}
          </p>
          <div className="rounded-3xl overflow-hidden bg-neutral-900">
            <img 
              src={props.coverImage}
              alt={`${props.title} cover`}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* Overview */}
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
            {props.team.split(", ").map((member, index) => {
              const icon = member.includes("Designer") ? (
                <Users className="w-5 h-5 text-white/60" />
              ) : member.includes("Developer") ? (
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
            <span 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-sm"
            >
              <FigmaIcon />
              Figma
            </span>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
        <div className="bg-neutral-900 rounded-3xl p-8">
          <p className="text-xl leading-relaxed">
            {props.problemStatement}
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12">Process</h2>
        <div className="space-y-12">
          {/* Research */}
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

          {/* Design */}
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

          {/* Development */}
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

      {/* Workflow Comparisons */}
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

      {/* Design Process */}
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

      {/* Final Designs */}
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

      {/* Next Steps Section */}
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

      {/* Results */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12">
          {props.title.includes("PepperLaw") ? "Expected Results" : "Results"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.results.map((result, index) => (
            <div key={index} className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-white/80" />
                </div>
                <div className="text-4xl font-bold mb-4">{result.value}</div>
                <h3 className="text-xl font-bold mb-3">{result.metric}</h3>
                <p className="text-white/60 text-center">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 