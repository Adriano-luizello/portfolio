export type CaseStudyNavItem = {
  slug: string;
  title: string;
  subtitle: string;
  path: string;
  image: string;
  hoverImage: string;
  color: string;
};

/** Display order matches the home bento grid (excluding the identity card). */
export const caseStudies: CaseStudyNavItem[] = [
  {
    slug: 'petros',
    title: 'Petros',
    subtitle: 'From Pension Paperwork to One-Click Magic',
    path: '/case-studies/petros',
    image: '/images/petros/card.png',
    hoverImage: '/images/petros/cardhover.png',
    color: 'bg-neutral-900',
  },
  {
    slug: 'lemans',
    title: 'Le Mans',
    subtitle: 'Luxury Rentals, Simplified',
    path: '/case-studies/lemans',
    image: '/images/lemans/card.png',
    hoverImage: '/images/lemans/cardhover.png',
    color: 'bg-[#1A1A1A]',
  },
  {
    slug: 'bibleplus',
    title: 'Bible+',
    subtitle: 'AI-Powered Bible Study App',
    path: '/case-studies/bibleplus',
    image: '/images/bibleplus/card.png',
    hoverImage: '/images/bibleplus/cardhover.png',
    color: 'bg-[#2D3648]',
  },
  {
    slug: 'choreograph',
    title: 'Choreograph',
    subtitle: 'The Omnichannel Revolution',
    path: '/case-studies/choreograph',
    image: '/images/choreograph/card.png',
    hoverImage: '/images/choreograph/cardhover.png',
    color: 'bg-[#2A2A2A]',
  },
  {
    slug: 'pepperlaw',
    title: 'PepperLaw',
    subtitle: 'AI Legal Tech Made Surprisingly Simple',
    path: '/case-studies/pepperlaw',
    image: '/images/pepperlaw/card.png',
    hoverImage: '/images/pepperlaw/cardhover.png',
    color: 'bg-[#1E1E1E]',
  },
];

export function getAdjacentCaseStudies(pathname: string): {
  prev: CaseStudyNavItem;
  next: CaseStudyNavItem;
} | null {
  const index = caseStudies.findIndex(
    (item) => item.path === pathname || pathname.endsWith(`/${item.slug}`)
  );

  if (index === -1) return null;

  const total = caseStudies.length;
  return {
    prev: caseStudies[(index - 1 + total) % total],
    next: caseStudies[(index + 1) % total],
  };
}
