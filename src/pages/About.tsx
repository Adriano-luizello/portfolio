import { useState } from 'react';
import { Instagram, Linkedin, FileDown, ArrowUpRight } from 'lucide-react';

export function About() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeExp, setActiveExp] = useState<number | null>(null);

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" }
  ];

  const skills = [
    { name: "User Research", level: 95 },
    { name: "Wireframing", level: 92 },
    { name: "Prototyping", level: 94 },
    { name: "User Flows", level: 93 },
    { name: "A/B Testing", level: 88 },
    { name: "Strategic Planning", level: 90 },
    { name: "Management", level: 89 },
    { name: "Benchmarking", level: 91 },
    { name: "Adobe XD", level: 95 },
    { name: "Figma", level: 96 },
    { name: "Keynote", level: 92 },
    { name: "Design Thinking", level: 94 }
  ];

  const experiences = [
    {
      year: "2022 - Present",
      role: "Product Designer",
      company: "Choreograph",
      description: "Leading product design initiatives in Netherlands",
      achievements: [
        "Implementing user-centered design methodologies",
        "Conducting user research and usability testing",
        "Creating comprehensive design systems"
      ]
    },
    {
      year: "2021 - Present",
      role: "UX/UI Designer",
      company: "Freelance",
      description: "Providing design solutions for international clients from Milan, Italy",
      achievements: [
        "Delivering end-to-end design solutions for diverse clients",
        "Conducting user research and creating user flows",
        "Developing interactive prototypes and wireframes"
      ]
    },
    {
      year: "2021 - 2022",
      role: "UX Designer",
      company: "IK Solution",
      description: "Led UX design initiatives for 7 months",
      achievements: [
        "Implemented user-centered design processes",
        "Created user flows and wireframes",
        "Conducted usability testing and iterations"
      ]
    }
  ];

  return (
    <div className="pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative">
            <div className="sticky top-24">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 transform transition-all duration-500 hover:scale-105 animate-fade-in whitespace-nowrap">
                UX Designer & Business Alchemist
              </h1>
              <div className="space-y-8">
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:200ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  I turn business puzzles into user-clicking gold. A two-time founder before 30—ask me about the rollercoaster, I now weaponize design to solve the ultimate double-agent problem: 
                  <span className="text-white/90 group-hover:text-white inline-block transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.02]">making users fall head-over-heels while sending revenue graphs blushing.</span> My unfair advantage? A founder-turned-designer brain that speaks both boardroom and behavioral psychology fluently.
                </p>
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:400ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Every pixel I craft fights for two things simultaneously: 
                  <span className="text-white/90 group-hover:text-white inline-block transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.02]">user joy and your KPIs.</span> I operate with a zero-fluff strategy—if it doesn't drive adoption, retention, or sales, it's just decoration. Here's how I work: First, I dissect your business like a VC (but with better color palettes). Then, I engineer desire through interfaces users can't resist clicking. Finally, I optimize the hell out of that magical space between "Aha!" and "Add to Cart."
                </p>
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:600ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  My current mission? 
                  <span className="text-white/90 group-hover:text-white inline-block transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.02]">Helping companies convert skeptics into fans—one frictionless flow at a time.</span> The proof? Check my case studies or connect on LinkedIn. And yes, I've cried over failed prototypes. No, I regret nothing—every iteration gets us closer to that perfect balance of business-smart and user-delightful.
                </p>
                <p className="text-xl font-medium text-white/90 leading-relaxed animate-fade-in [animation-delay:800ms] hover:text-white transition-colors p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Ready to make your users click and your CFO smile? 
                  <span className="text-white underline decoration-dotted underline-offset-4 inline-block transition-transform group-hover:translate-x-1">Let's talk</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in [animation-delay:1000ms]">
                <a 
                  href="/adrian-luizello-cv.pdf" 
                  download
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                >
                  <span>Download CV</span>
                  <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-[140px]">
            <div className="relative group w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-[22px] opacity-0 group-hover:opacity-75 transition-all duration-700 blur-xl group-hover:blur-2xl"></div>
              <div className="relative">
                <img 
                  src="/images/profile/profile.jpg"
                  alt="Adriano Luizello"
                  className="w-full h-[900px] object-cover object-[center_15%] rounded-3xl transform transition-all duration-700 group-hover:scale-[1.01] animate-fade-in [animation-delay:200ms]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-medium">{skill.name}</p>
                  <span className="text-sm text-white/40">{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-700 ease-out"
                    style={{ 
                      width: activeSkill === index ? `${skill.level}%` : '0%',
                      opacity: activeSkill === index ? 1 : 0.3
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveExp(index)}
                onMouseLeave={() => setActiveExp(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0 group-hover:text-white transition-colors">{exp.role}</h3>
                  <p className="text-white/60">{exp.year}</p>
                </div>
                <p className="text-xl text-white/80 mb-4 group-hover:text-white transition-colors">{exp.company}</p>
                <p className="text-white/60 mb-6">{exp.description}</p>
                
                <div className={`space-y-3 transition-all duration-500 ${
                  activeExp === index ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div 
                      key={achIndex}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}