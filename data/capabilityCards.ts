export interface CapabilityCard {
  id: string;
  category: string;
  title: string;
  problem: string;
  architecture: string;
  scale: string;
  result: string;
  businessOutcome: string;
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
    result: "A governed operating path from hire through role change to departure.",
    businessOutcome: "Faster readiness, fewer handoffs, and more reliable access control.",
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
    result: "A concise view of material variance, risk, and performance.",
    businessOutcome: "Less time reconciling reports; faster, better-grounded decisions.",
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
    result: "Intelligence embedded inside the operating system rather than beside it.",
    businessOutcome: "More capable execution without surrendering control or auditability.",
  },
];
