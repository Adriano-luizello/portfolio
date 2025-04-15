import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export function Work() {
  const projects: Project[] = [
    {
      title: "Redesigning Petros: From Pension Paperwork to One-Click Magic",
      description: "Transforming Brazil's €18B+ pension fund's signup process from a bureaucratic nightmare into a streamlined, user-friendly experience.",
      image: "/images/petros/cover.png",
      tags: ["UX/UI", "Full Stack", "Enterprise", "React", "Node.js"],
      link: "/case-studies/petros"
    }
    // Add more projects here as they become available
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12">Selected Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link 
            key={index}
            to={project.link}
            className="group block bg-neutral-900 rounded-3xl overflow-hidden hover:bg-neutral-800 transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-white/60 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-neutral-800 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}