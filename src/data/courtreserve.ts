// Single source of truth for CourtReserve outbound links.
// These URLs are copied verbatim from the current live root HTML files —
// do not regenerate or "clean up" the IDs, they are specific CourtReserve
// destinations configured for this club.

export const COURTRESERVE_BASE_URL =
  'https://app.courtreserve.com/Online/Memberships/Public/9518';

export const courtReserveLinks = {
  // General "Book a Court" CTA used in nav, hero, footer, final CTA, mobile bar.
  bookCourt: COURTRESERVE_BASE_URL,
  general: COURTRESERVE_BASE_URL,

  // Specific membership-tier deep links from membership.html.
  // Intentionally distinct from `general` — do not collapse these into one URL.
  membershipFree:
    'https://app.courtreserve.com/Online/Memberships/ViewPublicMembership/9518?membershipId=101176',
  membershipMonthly:
    'https://app.courtreserve.com/Online/Memberships/ViewPublicMembership/9518?membershipId=107588',
  membershipAnnual:
    'https://app.courtreserve.com/Online/Memberships/ViewPublicMembership/9518?membershipId=108399',
} as const;

export type CourtReserveLinkKey = keyof typeof courtReserveLinks;
