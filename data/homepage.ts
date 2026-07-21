export interface BusinessOutcome {
  title: string;
  description: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export interface ProofPoint {
  metric: string;
  label: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  problem: string;
  challenge: string;
  solution: string;
  role: string;
  technologies: string[];
  result: string;
  contentGaps?: string[];
}

export const businessOutcomes: BusinessOutcome[] = [
  { title: "Lower operating costs", description: "Find and remove structural effort, duplication, and avoidable process expense." },
  { title: "Less manual work", description: "Replace repetitive handoffs and re-entry with reliable, governed workflows." },
  { title: "Fewer errors and less risk", description: "Build controls, accountability, and consistency into the way work moves." },
  { title: "Faster, more reliable operations", description: "Reduce delays while designing for support, recovery, and ordinary use." },
  { title: "Connected systems and information", description: "Make applications, data, identities, and workflows operate as one system." },
  { title: "Better decisions", description: "Give leaders clearer visibility into performance, exceptions, and emerging risk." },
  { title: "Processes that scale", description: "Create operating patterns that can grow without multiplying friction." },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Technology strategy and leadership",
    description: "Align investments, teams, governance, architecture, and priorities with the outcomes the organization needs.",
  },
  {
    title: "Automation and process improvement",
    description: "Replace repetitive, error-prone work with reliable workflows that remain visible, governed, and supportable.",
  },
  {
    title: "Systems and API integration",
    description: "Connect CRM, HR, ERP, Microsoft 365, SharePoint, DocuSign, databases, and other business platforms.",
  },
  {
    title: "AI-enabled business solutions",
    description: "Apply AI, document intelligence, copilots, and agents to practical work with security, governance, and risk in view.",
  },
  {
    title: "Business applications and data solutions",
    description: "Build applications, operational tools, dashboards, and reporting systems that improve execution and visibility.",
  },
];

export const proofPoints: ProofPoint[] = [
  { metric: "1 day", label: "Employee account creation", detail: "Reduced from approximately 2.5 weeks through API-driven provisioning." },
  { metric: "48K+", label: "Enterprise automation events", detail: "Processed through a connected webhook-driven workflow." },
  { metric: "8 years", label: "CIO-level leadership", detail: "Leading countywide technology across more than 60 departments, offices, and bureaus." },
  { metric: "30+", label: "Years in technology", detail: "Across infrastructure, applications, data, leadership, automation, and AI." },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sharepoint-project-automation",
    category: "Systems integration",
    title: "CRM-to-SharePoint project automation",
    problem: "Project activity in CRM needed to produce consistent, governed working structures in SharePoint without repeated manual setup.",
    challenge: "Coordinate high-volume business events across platforms while keeping project structures repeatable and supportable.",
    solution: "Built a webhook-driven integration that translated CRM events into governed SharePoint folder provisioning.",
    role: "Designed and built the integration pattern, automation, and operating controls.",
    technologies: ["CRM", "SharePoint", "APIs", "Webhooks", "Workflow automation"],
    result: "Processed more than 48,000 events and provisioned more than 250,000 governed project folders.",
  },
  {
    slug: "enterprise-safety-application",
    category: "Business applications",
    title: "Enterprise safety application",
    problem: "Multi-site safety operations needed a shared application that could support consistent operational use across the organization.",
    challenge: "Design for a broad user population while keeping the application practical for day-to-day work.",
    solution: "Designed and delivered an enterprise application around shared safety workflows and operational visibility.",
    role: "Led solution design and hands-on delivery.",
    technologies: ["Enterprise application", "Workflow automation", "Operational data"],
    result: "Supported more than 750 enterprise safety users across multi-site operations.",
    contentGaps: ["Verified cost, time, or error reduction beyond the documented user scope."],
  },
  {
    slug: "employee-lifecycle-orchestration",
    category: "Automation and identity",
    title: "API-driven employee onboarding and provisioning",
    problem: "Hiring, access, role changes, and departures were fragmented across identities, applications, approvals, and teams.",
    challenge: "Coordinate HR, Entra ID, Microsoft 365, SharePoint, licensing, groups, and downstream systems without multiplying manual handoffs.",
    solution: "Created a governed employee-lifecycle workflow using APIs, event-driven automation, and explicit operating controls.",
    role: "Designed the architecture, integration flow, provisioning logic, and operational model.",
    technologies: ["Microsoft Entra ID", "Microsoft Graph", "Microsoft 365", "SharePoint", "Power Platform", "APIs"],
    result: "Reduced account-creation time from approximately 2.5 weeks to one day while eliminating multiple systems, manual handoffs, and common sources of human error.",
  },
  {
    slug: "decision-focused-reporting",
    category: "Data and decision support",
    title: "Executive signal from operational noise",
    problem: "Leaders had abundant reporting but limited visibility into the exceptions that required action.",
    challenge: "Connect fragmented sources and distinguish material variance and emerging risk from routine operating noise.",
    solution: "Consolidated operational reporting into decision-focused views using normalized measures and exception logic.",
    role: "Connected the business context, information model, reporting design, and operating use.",
    technologies: ["Operational data", "Analytics", "Exception logic", "Decision-focused reporting"],
    result: "Reduced the time leaders spent reconciling reports and allowed attention to shift sooner toward issues requiring action; impact varied by solution.",
    contentGaps: ["A consistent verified time-reduction measure across the different reporting solutions."],
  },
  {
    slug: "agentic-workflows",
    category: "Accountable AI",
    title: "Agentic workflows built for production",
    problem: "AI could not enter consequential workflows without explicit permissions, guardrails, and accountability.",
    challenge: "Automate multi-step knowledge work without removing human review from consequential decisions.",
    solution: "Combined specialized agents, trusted tools, bounded actions, human judgment, and end-to-end observability.",
    role: "Designed and built the governed workflow pattern and its operating controls.",
    technologies: ["AI agents", "APIs", "Trusted data", "Human review", "Observability"],
    result: "Reduced work that previously required approximately 12 hours to minutes, shortened refresh cycles, and established a reusable pattern for governed enterprise AI workflows.",
  },
];
