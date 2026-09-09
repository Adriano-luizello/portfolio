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
    subtitle: 'A pension signup people can finish in one sitting',
    path: '/case-studies/petros',
    image: '/images/petros/card.png',
    hoverImage: '/images/petros/cardhover.png',
    color: 'bg-neutral-900',
  },
  {
    slug: 'lemans',
    title: 'Le Mans',
    subtitle: 'My first product, seen with today\'s eyes',
    path: '/case-studies/lemans',
    image: '/images/lemans/card.png',
    hoverImage: '/images/lemans/cardhover.png',
    color: 'bg-[#1A1A1A]',
  },
  {
    slug: 'bibleplus',
    title: 'Bible+',
    subtitle: 'An app built around content that was never tested',
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
    subtitle: 'From a sold promise to a product in one month',
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
