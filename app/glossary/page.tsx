import type { Metadata } from "next";
import { GlossaryIndex } from "@/components/GlossaryIndex";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { glossaryTerms } from "@/data/glossary";

const glossaryUrl = "https://www.troystone.dev/glossary";
const description = "Plain-English definitions for enterprise architecture, automation, infrastructure, data, and accountable AI.";

export const metadata: Metadata = {
  title: { absolute: "Technology Glossary — Troy Stone" },
  description,
  alternates: { canonical: glossaryUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: glossaryUrl,
    siteName: "Troy Stone",
    title: "Technology Glossary — Troy Stone",
    description,
    images: [{ url: "/og-troy-stone.png", width: 1200, height: 630, alt: "Troy Stone, Enterprise Systems Architect — Building intelligent systems organizations trust and deploy." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Glossary — Troy Stone",
    description,
    images: ["/og-troy-stone.png"],
  },
};

export default function GlossaryPage() {
  const letters = [...new Set(glossaryTerms.map((entry) => entry.term.charAt(0).toLocaleUpperCase()))];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Troy Stone technology glossary",
    description,
    url: glossaryUrl,
    hasDefinedTerm: glossaryTerms.map((entry) => ({
      "@type": "DefinedTerm",
      name: entry.term,
      description: entry.definition,
      url: `${glossaryUrl}#${entry.slug}`,
      inDefinedTermSet: glossaryUrl,
    })),
  };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main className="glossary-page" id="main">
      <header className="glossary-hero" id="top">
        <p className="eyebrow">Executive glossary</p>
        <h1>Plain language for <em>complex systems.</em></h1>
        <p className="glossary-introduction">Concise definitions for the technologies, operating disciplines, and architectural concepts referenced throughout this site.</p>
        <p className="glossary-clarification">These definitions describe how the terms are used in this body of work. They are intentionally brief rather than exhaustive.</p>
      </header>

      <nav className="glossary-alphabet" aria-label="Glossary alphabet">
        <span>Browse</span>
        <div>{letters.map((letter) => {
          const target = glossaryTerms.find((entry) => entry.term.toLocaleUpperCase().startsWith(letter));
          return <a href={`#${target?.slug}`} key={letter}>{letter}</a>;
        })}</div>
      </nav>

      <section className="glossary-content" aria-label="Technology definitions">
        <GlossaryIndex terms={glossaryTerms} />
      </section>

      <a className="glossary-back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
