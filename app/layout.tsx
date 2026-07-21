import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.troystone.dev"),
  title: { default: "Troy Stone — Enterprise Systems Architect", template: "%s — Troy Stone" },
  description: "Technology leadership and hands-on execution that reduce operating friction, connect systems, improve decisions, and move organizations forward.",
  keywords: ["Troy Stone", "enterprise architecture", "agentic AI", "Power Platform", "Microsoft 365", "enterprise automation"],
  authors: [{ name: "Troy Stone", url: "https://www.troystone.dev" }], creator: "Troy Stone",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
  },
  openGraph: { type: "website", locale: "en_US", url: "https://www.troystone.dev", siteName: "Troy Stone", title: "Troy Stone — Enterprise Systems Architect", description: "Technology leadership and hands-on execution that move organizations forward.", images: [{ url: "/og-troy-stone.png", width: 1200, height: 630, alt: "Troy Stone, Enterprise Systems Architect" }] },
  twitter: { card: "summary_large_image", title: "Troy Stone — Enterprise Systems Architect", description: "Technology leadership and hands-on execution that move organizations forward.", images: ["/og-troy-stone.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeInitializationScript = `(function(){var theme='dark';try{var saved=localStorage.getItem('theme');if(saved==='light'||saved==='dark')theme=saved;}catch(e){}var root=document.documentElement;root.dataset.theme=theme;root.style.colorScheme=theme;var meta=document.querySelector('meta[data-site-theme="true"]');if(meta)meta.content=theme==='light'?'#f4f1e9':'#08090a';})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning><head><meta name="theme-color" content="#08090a" data-site-theme="true" /><script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} /></head><body>{children}</body></html>;
}
