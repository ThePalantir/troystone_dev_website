export interface CapabilityCard {
  id: string;
  category: string;
  title: string;
  problem: string;
  architecture: string;
  scale: string;
  operationalResult: string;
  businessValue: string;
}

export const capabilityCards: CapabilityCard[] = [
  {
    id: "operating-system",
    category: "Enterprise operations",
    title: "Employee lifecycle orchestration",
    problem:
      "Hiring, access, role changes, and departures were fragmented across identities, applications, approvals, and teams.",
    architecture:
      "Microsoft Entra, Microsoft Graph, Power Platform, governed workflows, and event-driven automation.",
    scale: "Cross-functional lifecycle spanning HR, identity, security, managers, and service owners.",
    operationalResult:
      "Reduced account-creation time from approximately 2.5 weeks to one day while eliminating multiple systems, manual handoffs, and common sources of human error from the onboarding process.",
    businessValue:
      "New employees received access sooner, onboarding became more predictable, and identity provisioning became more consistent and auditable.",
  },
  {
    id: "decision-system",
    category: "Decision intelligence",
    title: "Executive signal from operational noise",
    problem:
      "Leaders had abundant reporting but limited visibility into the exceptions that required action.",
    architecture:
      "Connected operational sources, normalized measures, exception logic, and decision-focused reporting.",
    scale: "Enterprise portfolio spanning multiple systems, owners, and operating measures.",
    operationalResult:
      "Consolidated fragmented operational reporting into decision-focused views of material exceptions, performance variance, and emerging risk.",
    businessValue:
      "Reduced the time leaders spent reconciling reports and allowed attention to shift sooner toward the issues requiring action, with the level of impact varying by solution.",
  },
  {
    id: "intelligent-system",
    category: "Accountable intelligence",
    title: "Agentic workflows built for production",
    problem:
      "AI could not enter consequential workflows without explicit permissions, guardrails, and accountability.",
    architecture:
      "Specialized agents, trusted tools, bounded actions, human judgment, and end-to-end observability.",
    scale: "Production workflow pattern designed to extend across governed enterprise processes.",
    operationalResult:
      "Automated research, data enrichment, deduplication, analysis, and content generation while preserving human review at consequential decision points.",
    businessValue:
      "Reduced work that previously required approximately 12 hours to minutes, shortened refresh cycles, and created a reusable pattern for introducing AI into governed enterprise workflows.",
  },
];
