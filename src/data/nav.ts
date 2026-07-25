export interface NavItem {
  label: string;
  href: string;
}

// Astro file-based routing: pages route to their path without .html extension.
// Phase 2 will convert play.astro, membership.astro, etc. into src/pages/
// and these links will resolve to the Astro routes automatically.
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Play', href: '/play' },
  { label: 'Events', href: '/tournaments' },
  { label: 'Pro Shop', href: '/pro-shop' },
  { label: 'Membership', href: '/membership' },
  { label: 'About', href: '/about' },
];

export const footerPlayLinks: NavItem[] = [
  { label: 'Open Play', href: '/play' },
  { label: 'Court Rentals', href: '/play' },
  { label: 'Lessons & Clinics', href: '/play' },
];

export const footerClubLinks: NavItem[] = [
  { label: 'The Facility', href: '#facility' },
  { label: 'Pro Shop', href: '/pro-shop' },
  { label: 'Inside FLX', href: '/#inside' },
  { label: 'Tournaments & Events', href: '/tournaments' },
];
