import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Palette, LayoutDashboard, Target, Repeat, Users, Layers, Sparkles } from 'lucide-react';

const pulseFlowAnimation = `
  @keyframes pulseFlow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: LayoutDashboard,
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces that delight users and drive engagement through careful attention to visual hierarchy, typography, and micro-interactions.",
      deliverables: ["Design Systems", "Component Libraries", "Interactive Prototypes", "Design Specifications"]
    },
    {
      icon: Users,
      title: "UX Strategy",
      description: "Developing comprehensive user experience strategies that align business goals with user needs through research, testing, and iterative improvements.",
      deliverables: ["User Research", "Journey Mapping", "Usability Testing", "Information Architecture"]
    },
    {
      icon: Sparkles,
      title: "No Code (AI)",
      description: "Building sophisticated AI-powered applications without traditional coding, leveraging cutting-edge platforms and automation tools for rapid development.",
      deliverables: ["AI Integration", "Workflow Automation", "Custom AI Tools", "Intelligent Systems"]
    }
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Understanding your goals, users, and business context through in-depth research and stakeholder interviews."
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Defining clear objectives and creating a roadmap for success based on research insights and business requirements."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, functional solutions through iterative design sprints and continuous feedback loops."
    },
    {
      icon: Layers,
      title: "Deliver",
      description: "Implementing and launching the final product with comprehensive documentation and support."
    },
    {
      icon: Repeat,
      title: "Iterate",
      description: "Continuously improving the product based on user feedback and performance metrics."
    }
  ];

  return (
    <div className="pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences through strategic design thinking and user-centered solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300 group"
            >
              <service.icon className="w-12 h-12 mb-6 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 mb-8">{service.description}</p>
              <div className="space-y-2">
                {service.deliverables.map((deliverable, dIndex) => (
                  <div 
                    key={dIndex}
                    className="bg-black/30 rounded-xl px-4 py-2 text-sm text-white/80"
                  >
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">My Design Process</h2>
          <div className="relative">
            {/* Process Connection Line with Animation */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden md:block overflow-hidden">
              <div className="h-1 w-full bg-neutral-800">
                <div className="h-full" 
                     style={{
                       width: '50%',
                       animation: 'pulseFlow 3s linear infinite',
                       background: 'linear-gradient(90deg, transparent 0%, #FF00E5 50%, transparent 100%)'
                     }}
                />
              </div>
            </div>
            
            <style>{pulseFlowAnimation}</style>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative group h-full"
                >
                  {/* Gradient background effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-[24px] opacity-0 group-hover:opacity-50 transition-all duration-700 blur-xl group-hover:blur-2xl" />
                  
                  <div className="relative bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800/80 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                    <step.icon className="w-10 h-10 mb-6 text-white/80 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text group-hover:to-white transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. I'm ready to help you transform your ideas into reality.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}