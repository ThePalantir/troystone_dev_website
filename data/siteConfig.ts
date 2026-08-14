export const featureFlags = {
  showTrueCore: false,
} as const;

type SiteLinks = {
  linkedIn: string;
  trueCore: string;
  bookingUrl: string | null;
};

export const siteLinks: SiteLinks = {
  linkedIn: "https://www.linkedin.com/in/troystone",
  trueCore: "https://truecore.services/",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || null,
};
