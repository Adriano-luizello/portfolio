import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, FileDown, Loader2, CheckCircle } from 'lucide-react';

export function About() {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDownloadState('loading');
    
    try {
      // Create a direct link instead of using fetch
      const a = document.createElement('a');
      a.href = '/files/Adriano-Luizello-CV-2026.pdf';
      a.download = 'Adriano-Luizello-CV-2026.pdf';
      a.target = '_blank'; // Open in new tab to avoid rewrite issues
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadState('idle');
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/adrianoluizello/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adrianoluizello/", color: "hover:text-blue-600" }
  ];

  const skillGroups = [
    {
      title: "Process",
      skills: [
        "Product discovery",
        "User research",
        "Usability testing",
        "Journey mapping",
        "Problem framing",
        "Information architecture",
      ],
    },
    {
      title: "Design",
      skills: [
        "Wireframing",
        "Prototyping",
        "Interaction design",
        "UI design",
        "Design systems",
        "Responsive and mobile design",
      ],
    },
    {
      title: "Build",
      skills: [
        "React",
        "TypeScript",
        "Tailwind",
        "HTML/CSS",
        "Cursor and AI-assisted prototyping",
      ],
    },
    {
      title: "Collaboration",
      skills: [
        "Stakeholder management",
        "Design critique",
        "Agile with Product and Engineering",
        "Product strategy",
      ],
    },
  ];

  const experiences = [
    {
      year: "2022 - Present",
      role: "Product Designer",
      company: "Choreograph (WPP Group)",
      description:
        "Enterprise SaaS platform for omnichannel media planning and activation. Led an 18-month redesign of a legacy, spreadsheet-based ad platform into a unified workflow, working alongside designers, engineers and product owners.",
    },
    {
      year: "2021 - Present",
      role: "Product Designer",
      company: "Independent (Freelance)",
      description:
        "Product design for clients in legal tech and consumer apps, plus my own products. PepperLaw, Bible+, and three MVPs built in React with AI tooling.",
    },
    {
      year: "2021 - 2022",
      role: "Product Designer",
      company: "IK Solution",
      description:
        "Product consultancy. Client work in pensions and premium rental, including Petros and Le Mans.",
    },
  ];

  return (
    <div className="pt-24 px-4 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative">
            <div className="md:sticky top-24">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 transform transition-all duration-500 hover:scale-105 animate-fade-in whitespace-nowrap">
                Product Designer
              </h1>
              <div className="space-y-8">
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:200ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  I'm a product designer who came to design from the business side.
                </p>
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:400ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Before this I spent ten years in business development and founded two companies, which is why I start from the commercial problem rather than the interface. If a design doesn't move adoption, retention or revenue, it's decoration.
                </p>
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:600ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Most of my work happens where the constraints are real. A pension fund onboarding flow wrapped in legal verification requirements and a backend that only accepted PDFs. A legal tech platform where terminology couldn't be simplified freely. An enterprise ad platform under privacy compliance. In each one the job was the same: work out which friction is doing real work, and remove the rest without breaking anything.
                </p>
                <p className="text-xl text-white/70 leading-relaxed transition-all duration-300 hover:text-white/90 animate-fade-in [animation-delay:800ms] p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  I work end to end, and I build. My portfolio and three MVPs are React and Tailwind, shipped with AI tooling. I'm not an engineer, but I can take an idea to something running and talk implementation with the people who build it.
                </p>
                <p className="text-xl font-medium text-white/90 leading-relaxed animate-fade-in [animation-delay:1000ms] hover:text-white transition-colors p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Munich, EU passport, working remotely for the past four years.
                </p>
                <p className="text-xl font-medium text-white/90 leading-relaxed animate-fade-in [animation-delay:1200ms] hover:text-white transition-colors p-4 rounded-xl hover:-translate-y-1 hover:bg-white/5 cursor-default group">
                  Ready to make your users click and your CFO smile?{" "}
                  <Link
                    to="/contact"
                    className="text-white underline decoration-dotted underline-offset-4 inline-block transition-transform hover:translate-x-1 relative z-20"
                  >
                    Let&apos;s talk
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in [animation-delay:1400ms]">
                <button 
                  onClick={handleDownload}
                  disabled={downloadState !== 'idle'}
                  className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    downloadState === 'idle' 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : downloadState === 'loading'
                      ? 'bg-white/80 text-black cursor-wait'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {downloadState === 'idle' && (
                    <>
                      <span>Download CV</span>
                      <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    </>
                  )}
                  {downloadState === 'loading' && (
                    <>
                      <span>Downloading</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  )}
                  {downloadState === 'success' && (
                    <>
                      <span>Complete</span>
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  className="w-full h-[400px] md:h-[900px] object-cover object-[center_15%] rounded-3xl transform transition-all duration-700 group-hover:scale-[1.01] animate-fade-in [animation-delay:200ms]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black/30 rounded-xl px-3 py-1.5 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
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
                className="bg-neutral-900 rounded-3xl p-8 hover:bg-neutral-800 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0 group-hover:text-white transition-colors">{exp.role}</h3>
                  <p className="text-white/60">{exp.year}</p>
                </div>
                <p className="text-xl text-white/80 mb-4 group-hover:text-white transition-colors">{exp.company}</p>
                <p className="text-white/60">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}