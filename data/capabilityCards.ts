export interface CapabilityCard {
  id: string;
  category: string;
  title: string;
  challenge: string;
  architecture: string;
  outcome: string;
}

export const capabilityCards: CapabilityCard[] = [
  {
    id: "operating-system",
    category: "Operating System",
    title: "Employee lifecycle orchestration",
    challenge:
      "Employee lifecycle processes often fragment across identities, applications, approvals, and business teams.",
    architecture:
      "Microsoft Entra + Microsoft Graph + Power Platform + governed workflows + automation.",
    outcome: "One trusted system from hire to retire.",
  },
  {
    id: "decision-system",
    category: "Decision System",
    title: "Executive signal, not dashboard noise",
    challenge:
      "Leaders need the few operational signals that change decisions—not another dashboard to monitor.",
    architecture:
      "Connected operational data + normalization + exception-driven intelligence.",
    outcome: "Less reporting. Better decisions.",
  },
  {
    id: "intelligent-system",
    category: "Intelligent System",
    title: "Agentic production workflows",
    challenge:
      "AI fails when it operates outside business rules, permissions, guardrails, and accountability.",
    architecture:
      "Specialized agents + trusted tools + human judgment + guardrails + observability.",
    outcome: "Useful intelligence inside accountable systems.",
  },
];
