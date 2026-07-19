export type GlossaryCategory =
  | "Infrastructure"
  | "Applications and data"
  | "Automation and integration"
  | "AI and governance"
  | "Strategy and operations";

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  category: GlossaryCategory;
  aliases?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Accountable AI",
    slug: "accountable-ai",
    definition: "AI designed so access, actions, decisions, and outcomes remain governed, observable, auditable, and ultimately owned by people.",
    category: "AI and governance",
  },
  {
    term: "Accountable intelligence",
    slug: "accountable-intelligence",
    definition: "Intelligence that operates within explicit permissions, guardrails, observability, auditability, and human responsibility.",
    category: "AI and governance",
  },
  {
    term: "Agentic AI",
    slug: "agentic-ai",
    definition: "AI that can plan, use tools, and take actions within defined permissions rather than only generating a response.",
    category: "AI and governance",
  },
  {
    term: "Agentic systems",
    slug: "agentic-systems",
    definition: "Operational systems combining models, tools, data, permissions, workflows, guardrails, and human oversight to complete bounded work.",
    category: "AI and governance",
  },
  {
    term: "Agentic workflows",
    slug: "agentic-workflows",
    definition: "Workflows in which AI agents coordinate steps or tools while operating within explicit controls, escalation paths, and accountability.",
    category: "AI and governance",
  },
  {
    term: "Analytics",
    slug: "analytics",
    definition: "The use of data to understand performance, identify patterns, explain outcomes, and support decisions.",
    category: "Applications and data",
  },
  {
    term: "Application programming interface (API)",
    slug: "application-programming-interface",
    definition: "A defined interface that allows applications and services to exchange data or request actions from one another.",
    category: "Automation and integration",
    aliases: ["API"],
  },
  {
    term: "Auditability",
    slug: "auditability",
    definition: "The ability to reconstruct what happened, which data and tools were used, and who or what was responsible.",
    category: "AI and governance",
  },
  {
    term: "Automation",
    slug: "automation",
    definition: "The use of software to perform repeatable work with reduced manual effort and more consistent execution.",
    category: "Automation and integration",
  },
  {
    term: "Bounded intelligence",
    slug: "bounded-intelligence",
    definition: "AI limited by explicit scope, permissions, tools, constraints, and escalation paths.",
    category: "AI and governance",
  },
  {
    term: "Business intelligence",
    slug: "business-intelligence",
    definition: "Technologies and practices that turn operational data into reports, dashboards, and decision-ready information.",
    category: "Applications and data",
    aliases: ["BI"],
  },
  {
    term: "Business systems",
    slug: "business-systems",
    definition: "Applications and platforms that support essential organizational processes, data, controls, and decisions.",
    category: "Applications and data",
  },
  {
    term: "Carrier-grade infrastructure",
    slug: "carrier-grade-infrastructure",
    definition: "Technology engineered for high availability, capacity, monitoring, recovery, and strict service commitments.",
    category: "Infrastructure",
  },
  {
    term: "Cloud platforms",
    slug: "cloud-platforms",
    definition: "On-demand computing services that provide scalable infrastructure, applications, data, and integration capabilities.",
    category: "Infrastructure",
  },
  {
    term: "Decision intelligence",
    slug: "decision-intelligence",
    definition: "The combination of data, analytics, rules, and context to improve how decisions are made and acted upon.",
    category: "Applications and data",
  },
  {
    term: "Decision support",
    slug: "decision-support",
    definition: "Information and tools that help people make better-grounded decisions without removing human responsibility.",
    category: "Applications and data",
  },
  {
    term: "Deterministic automation",
    slug: "deterministic-automation",
    definition: "Automation that follows explicit rules and produces predictable results for the same inputs.",
    category: "Automation and integration",
  },
  {
    term: "Digital transformation",
    slug: "digital-transformation",
    definition: "Redesigning operations, services, and decision-making through technology rather than simply replacing old tools.",
    category: "Strategy and operations",
  },
  {
    term: "Enterprise AI",
    slug: "enterprise-ai",
    definition: "AI deployed across business operations with integration, security, governance, support, and measurable organizational outcomes.",
    category: "AI and governance",
  },
  {
    term: "Enterprise applications",
    slug: "enterprise-applications",
    definition: "Software used across an organization to manage important processes, data, and controls.",
    category: "Applications and data",
  },
  {
    term: "Enterprise architecture",
    slug: "enterprise-architecture",
    definition: "The structure connecting business goals, processes, data, applications, infrastructure, security, and operating responsibilities.",
    category: "Strategy and operations",
  },
  {
    term: "Enterprise networks",
    slug: "enterprise-networks",
    definition: "The connectivity linking an organization’s users, locations, applications, cloud services, and data.",
    category: "Infrastructure",
  },
  {
    term: "Event-driven automation",
    slug: "event-driven-automation",
    definition: "Automation triggered by a business event, such as a hire, transaction, or status change, rather than a manual request.",
    category: "Automation and integration",
  },
  {
    term: "Executive leadership",
    slug: "executive-leadership",
    definition: "Setting direction, allocating resources, managing risk, building capable teams, and remaining accountable for organizational outcomes.",
    category: "Strategy and operations",
  },
  {
    term: "Global deployments",
    slug: "global-deployments",
    definition: "Technology implementations delivered across regions while balancing enterprise standards with local requirements and support.",
    category: "Strategy and operations",
  },
  {
    term: "Global infrastructure",
    slug: "global-infrastructure",
    definition: "Technology services designed to operate reliably across regions, locations, and time zones.",
    category: "Infrastructure",
  },
  {
    term: "Governance",
    slug: "governance",
    definition: "The roles, policies, controls, and decision rights that determine how technology is selected, used, changed, and reviewed.",
    category: "Strategy and operations",
  },
  {
    term: "Guardrails",
    slug: "guardrails",
    definition: "Technical and procedural constraints that keep automated or AI-driven actions within approved boundaries.",
    category: "AI and governance",
  },
  {
    term: "Human-in-the-loop",
    slug: "human-in-the-loop",
    definition: "A deliberate point where a person reviews, approves, overrides, or assumes responsibility for a system’s action.",
    category: "AI and governance",
    aliases: ["HITL"],
  },
  {
    term: "Human judgment",
    slug: "human-judgment",
    definition: "Human interpretation and accountability applied where context, ambiguity, ethics, or consequence make rules alone insufficient.",
    category: "AI and governance",
  },
  {
    term: "Identity and access management",
    slug: "identity-and-access-management",
    definition: "The processes and technologies used to establish identity and control what users and systems may access or do.",
    category: "Strategy and operations",
    aliases: ["IAM"],
  },
  {
    term: "Identity automation",
    slug: "identity-automation",
    definition: "Automated provisioning, updating, and removal of identities, access, licenses, and related lifecycle tasks.",
    category: "Automation and integration",
  },
  {
    term: "Line-of-business systems",
    slug: "line-of-business-systems",
    definition: "Applications supporting a specific operational function such as human resources, finance, safety, or field operations.",
    category: "Applications and data",
    aliases: ["LOB systems"],
  },
  {
    term: "Microsoft Entra ID",
    slug: "microsoft-entra-id",
    definition: "Microsoft’s cloud identity and access service for managing users, applications, devices, authentication, and permissions.",
    category: "Automation and integration",
    aliases: ["Entra ID", "Azure Active Directory", "Azure AD"],
  },
  {
    term: "Microsoft Graph",
    slug: "microsoft-graph",
    definition: "Microsoft’s unified API for accessing and managing data and services across Microsoft 365.",
    category: "Automation and integration",
    aliases: ["Graph API"],
  },
  {
    term: "Observability",
    slug: "observability",
    definition: "The ability to understand a system’s behavior through logs, metrics, traces, events, and operational context.",
    category: "AI and governance",
  },
  {
    term: "Operational resilience",
    slug: "operational-resilience",
    definition: "The ability to continue delivering critical services through failures, disruptions, demand changes, and planned transitions.",
    category: "Infrastructure",
  },
  {
    term: "Orchestration",
    slug: "orchestration",
    definition: "Coordinating multiple systems, steps, rules, and dependencies as one managed process.",
    category: "Automation and integration",
  },
  {
    term: "Power BI",
    slug: "power-bi",
    definition: "Microsoft’s platform for data modeling, visualization, dashboards, and business intelligence.",
    category: "Applications and data",
  },
  {
    term: "Power Platform",
    slug: "power-platform",
    definition: "Microsoft’s low-code platform for building applications, workflows, analytics, websites, and AI-enabled business solutions.",
    category: "Automation and integration",
  },
  {
    term: "Production intelligence",
    slug: "production-intelligence",
    definition: "AI or decision capabilities embedded in live operations with controls, monitoring, support, and accountability.",
    category: "AI and governance",
  },
  {
    term: "Service-level agreement (SLA)",
    slug: "service-level-agreement",
    definition: "A measurable commitment defining expected availability, performance, response, or support.",
    category: "Infrastructure",
    aliases: ["SLA"],
  },
  {
    term: "Systems integration",
    slug: "systems-integration",
    definition: "Connecting applications, data, identities, and workflows so they operate as a coordinated system.",
    category: "Automation and integration",
  },
  {
    term: "Technology strategy",
    slug: "technology-strategy",
    definition: "A plan aligning technology investments, architecture, risk, talent, and delivery with organizational priorities.",
    category: "Strategy and operations",
  },
  {
    term: "Trusted data",
    slug: "trusted-data",
    definition: "Data whose source, meaning, quality, ownership, and timeliness are understood well enough to support decisions and automation.",
    category: "Applications and data",
  },
  {
    term: "Useful intelligence",
    slug: "useful-intelligence",
    definition: "Intelligence that understands the operating context, acts within permission, remains observable in execution, and is accountable in outcome.",
    category: "AI and governance",
  },
  {
    term: "Voice over IP (VoIP)",
    slug: "voice-over-ip",
    definition: "Voice communications carried over IP networks, allowing voice to share scalable, routable infrastructure with data.",
    category: "Infrastructure",
    aliases: ["VoIP", "Voice over IP"],
  },
  {
    term: "Workflow orchestration",
    slug: "workflow-orchestration",
    definition: "The managed coordination of tasks, systems, decisions, and exceptions across an end-to-end process.",
    category: "Automation and integration",
  },
];

export const glossaryTermByName = new Map(
  glossaryTerms.flatMap((entry) => [entry.term, ...(entry.aliases ?? [])].map((name) => [name.toLocaleLowerCase(), entry] as const)),
);

export function getGlossaryHref(term: string) {
  const entry = glossaryTermByName.get(term.toLocaleLowerCase());
  if (!entry) throw new Error(`No glossary entry found for "${term}".`);
  return `/glossary#${entry.slug}`;
}
