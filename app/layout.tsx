import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://troystone.dev"),
  title: { default: "Troy Stone — Enterprise Systems Architect", template: "%s — Troy Stone" },
  description: "Three decades building enterprise infrastructure, leading technology organizations, automating operations, and deploying intelligent systems.",
  keywords: ["Troy Stone", "enterprise architecture", "agentic AI", "Power Platform", "Microsoft 365", "enterprise automation"],
  authors: [{ name: "Troy Stone", url: "https://troystone.dev" }], creator: "Troy Stone",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "https://troystone.dev", siteName: "Troy Stone", title: "Troy Stone — Enterprise Systems Architect", description: "I build intelligent systems that organizations actually deploy.", images: [{ url: "/system-horizon.png", width: 1536, height: 864, alt: "An abstract intelligent systems landscape" }] },
  twitter: { card: "summary_large_image", title: "Troy Stone — Enterprise Systems Architect", description: "I build intelligent systems that organizations actually deploy.", images: ["/system-horizon.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1e9" },
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var saved=localStorage.getItem('theme');var theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){}})();` }} /></head><body>{children}</body></html>;
}
