import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrailAnimation } from '../components/TrailAnimation';
import { ChevronRight } from 'lucide-react';

export function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: "ADRIANO\nLUIZELLO",
      role: "Product Designer",
      color: "bg-gradient-to-br from-neutral-50 to-neutral-100",
      textColor: "text-black"
    },
    {
      title: "Petros",
      subtitle: "From Pension Paperwork to One-Click Magic",
      image: "/images/petros/card.png",
      hoverImage: "/images/petros/cardhover.png",
      color: "bg-neutral-900",
      path: "/case-studies/petros"
    },
    {
      title: "Le Mans",
      subtitle: "Luxury Rentals, Simplified",
      image: "/images/lemans/card.png",
      hoverImage: "/images/lemans/cardhover.png",
      color: "bg-[#1A1A1A]",
      path: "/case-studies/lemans"
    },
    {
      title: "Bible+",
      subtitle: "AI-Powered Bible Study App",
      image: "/images/bibleplus/card.png",
      hoverImage: "/images/bibleplus/cardhover.png",
      color: "bg-[#2D3648]",
      path: "/case-studies/bibleplus"
    },
    {
      title: "Choreograph",
      subtitle: "The Omnichannel Revolution",
      image: "/images/choreograph/card.png",
      hoverImage: "/images/choreograph/cardhover.png",
      color: "bg-[#2A2A2A]",
      path: "/case-studies/choreograph"
    },
    {
      title: "PepperLaw",
      subtitle: "AI Legal Tech Made Surprisingly Simple",
      image: "/images/pepperlaw/card.png",
      hoverImage: "/images/pepperlaw/cardhover.png",
      color: "bg-[#1E1E1E]",
      path: "/case-studies/pepperlaw"
    }
  ];

  return (
    <div className="min-h-screen p-4 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[calc(50vh-20px)]">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            {/* Mobile Toggle Button - Only visible on mobile */}
            {isMobile && index !== 0 && (
              <button
                className="absolute z-20 right-4 top-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
                onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
              >
                <ChevronRight className={`w-6 h-6 text-white transition-transform duration-300 ${activeCardIndex === index ? 'rotate-180' : ''}`} />
              </button>
            )}
            
            <Link
              to={index === 0 ? '/about' : project.path || '/'}
              className={`
                group
                block
                relative overflow-hidden rounded-2xl
                ${project.color}
                ${project.textColor || 'text-white'}
                h-full
                transition-all duration-500 ease-out
                ${!isMobile && 'hover:scale-[0.98]'}
              `}
            >
              {index === 0 ? (
                <>
                  {/* Trail Animation */}
                  <div className={`absolute inset-0 ${!isMobile ? 'opacity-0 group-hover:opacity-100' : ''} transition-opacity duration-700`}>
                    <TrailAnimation />
                  </div>
                  {/* Hover Title */}
                  <div className={`absolute top-8 left-8 ${!isMobile ? 'opacity-0 group-hover:opacity-100' : ''} transition-all duration-700 delay-100 z-30`}>
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-neutral-800">
                        ADRIANO<br />LUIZELLO
                      </h1>
                      <p className="mt-2 text-neutral-600">Product Designer</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  {/* Base Image */}
                  <img 
                    src={project.image}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover object-center 
                      ${!isMobile 
                        ? 'opacity-100 group-hover:opacity-0' 
                        : activeCardIndex === index ? 'opacity-0' : 'opacity-100'
                      } 
                      transition-opacity duration-700`}
                  />
                  {/* Hover Image */}
                  <img 
                    src={project.hoverImage}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover object-center 
                      ${!isMobile 
                        ? 'opacity-0 group-hover:opacity-100' 
                        : activeCardIndex === index ? 'opacity-100' : 'opacity-0'
                      } 
                      transition-opacity duration-700`}
                  />
                  <div className={`absolute inset-0 bg-black/20 
                    ${!isMobile 
                      ? 'group-hover:opacity-0' 
                      : activeCardIndex === index ? 'opacity-0' : 'opacity-100'
                    } 
                    transition-opacity duration-700`} 
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="relative z-10 h-full p-8">
                <div className="h-full flex flex-col">
                  <div className={`
                    ${index === 0 ? '' : 'max-w-[65%]'} 
                    transition-opacity duration-700 
                    ${!isMobile 
                      ? 'group-hover:opacity-0'
                      : activeCardIndex === index ? 'opacity-0' : 'opacity-100'
                    }
                  `}>
                    {index === 0 ? (
                      <>
                        {project.title.split('\n').map((line, i) => (
                          <h1 key={i} className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-neutral-800">
                            {line}
                          </h1>
                        ))}
                        <p className="mt-2 text-neutral-600">{project.role}</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                          {project.title}
                        </h2>
                        {project.subtitle && (
                          <p className="text-sm text-white/60 leading-relaxed">
                            {project.subtitle}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}