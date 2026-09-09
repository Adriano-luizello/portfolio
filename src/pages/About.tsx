import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, FileDown, Loader2, CheckCircle } from 'lucide-react';
import { Reveal } from '../components/Reveal';

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
    { icon: Instagram, href: "https://www.instagram.com/adrianoluizello/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adrianoluizello/" }
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
        "Enterprise SaaS for media planning and activation. I own the design of Create Optimization, the ads activation product, and designed the Decision Tree that replaced the rule-based targeting workflow. In production, used daily by global brands.",
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
              <h1 className="font-display font-medium text-5xl md:text-7xl tracking-tight mb-12 leading-[1.05]">
                Senior Product Designer
              </h1>
              <div className="space-y-6">
                <p className="text-2xl text-white/85 leading-relaxed">
                  I'm a product designer who came to design from the business side.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Before this I spent ten years in business development and founded two companies, which is why I start from the commercial problem rather than the interface. <mark>If a design doesn't move adoption, retention or revenue, it's decoration.</mark>
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Most of my work happens where the constraints are real. A pension fund onboarding flow wrapped in legal verification requirements and a backend that only accepted PDFs. A legal tech platform where terminology couldn't be simplified freely. An enterprise ad platform under privacy compliance. In each one the job was the same: work out which friction is doing real work, and remove the rest without breaking anything.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  I work end to end, and I build. My portfolio and three MVPs are React and Tailwind, shipped with AI tooling. I'm not an engineer, but I can take an idea to something running and talk implementation with the people who build it.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Munich, EU passport, working remotely for the past four years.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Working on something like this?{" "}
                  <Link
                    to="/contact"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    Let&apos;s talk &rarr;
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button 
                  onClick={handleDownload}
                  disabled={downloadState !== 'idle'}
                  className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    downloadState === 'idle' 
                      ? 'bg-primary text-black hover:bg-primary/90 font-medium' 
                      : downloadState === 'loading'
                      ? 'bg-primary/80 text-black cursor-wait'
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
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
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
              <div className="relative">
                <img 
                  src="/images/profile/profile.jpg"
                  alt="Adriano Luizello"
                  className="w-full h-[400px] md:h-[900px] object-cover object-[center_15%] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-10">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-12 border-t border-white/10 pt-10">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <h3 className="font-display text-3xl text-primary mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-lg text-white/75">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-10">Experience</h2>
          <div className="border-t border-white/10">
            {experiences.map((exp, index) => (
              <Reveal
                key={index}
                delay={index * 0.06}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10"
              >
                <p className="md:col-span-2 text-primary">{exp.year}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display font-medium text-3xl leading-tight">{exp.role}</h3>
                  <p className="text-lg text-white/60 mt-1">{exp.company}</p>
                </div>
                <p className="md:col-span-6 text-lg text-white/75 leading-relaxed">{exp.description}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}