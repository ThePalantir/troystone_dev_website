"use client";

import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/data/glossary";

interface GlossaryIndexProps {
  terms: GlossaryTerm[];
}

export function GlossaryIndex({ terms }: GlossaryIndexProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredTerms = useMemo(() => {
    if (!normalizedQuery) return terms;

    return terms.filter((entry) => [
      entry.term,
      entry.category,
      entry.definition,
      ...(entry.aliases ?? []),
    ].some((value) => value.toLocaleLowerCase().includes(normalizedQuery)));
  }, [normalizedQuery, terms]);

  return <>
    <div className="glossary-search">
      <label htmlFor="glossary-search">Search the glossary</label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search terms and concepts"
        autoComplete="off"
        aria-describedby="glossary-result-count"
      />
      <p id="glossary-result-count" aria-live="polite">
        {normalizedQuery ? `${filteredTerms.length} ${filteredTerms.length === 1 ? "entry" : "entries"} found` : `${terms.length} definitions`}
      </p>
    </div>

    {filteredTerms.length > 0 ? <dl className="glossary-list">
      {filteredTerms.map((entry) => <div className="glossary-entry" id={entry.slug} key={entry.slug}>
        <dt><a href={`#${entry.slug}`}>{entry.term}</a></dt>
        <dd>
          <span className="glossary-category">{entry.category}</span>
          <p>{entry.definition}</p>
        </dd>
      </div>)}
    </dl> : <div className="glossary-empty" role="status">
      <p>No glossary entries match “{query.trim()}”.</p>
      <button type="button" onClick={() => setQuery("")}>Clear search</button>
    </div>}
  </>;
}
