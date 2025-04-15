import { FC } from 'react';

interface CaseStudyProps {
  title: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  technologies: string[];
  problemStatement: string;
  process: {
    before: string;
    after: string;
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  images: {
    coverImage: string;
    wireframes?: string[];
    final: string[];
  };
}

const CaseStudy: FC<CaseStudyProps> = (props) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Workflow Comparisons */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Workflow Comparisons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Before</h3>
            <p className="text-gray-600 dark:text-gray-400">{props.process.before}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">After</h3>
            <p className="text-gray-600 dark:text-gray-400">{props.process.after}</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      {props.images.wireframes && props.images.wireframes.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {props.images.wireframes.map((wireframe: string, index: number) => (
              <div key={index} className="relative group">
                <img
                  src={wireframe}
                  alt={`Wireframe iteration ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  Iteration {index + 1}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Designs */}
      {props.images.final && props.images.final.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Final Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {props.images.final.map((image: string, index: number) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Final design ${index + 1}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-black/80 px-3 py-1 rounded-full">
                      Final Design {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudy; 