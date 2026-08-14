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
  bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ05-YSHn-MGMi-7JYKK2iYb5U7LWHD_d7QUy4Nz69KnvWLmKJoSH5H2w-HfOwE_bzUjBcsus4jY",
};
