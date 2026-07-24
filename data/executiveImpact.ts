export type ImpactDisclosureStatus =
  | "public"
  | "organization-withheld"
  | "requires-confirmation";

export type MetricDisclosureStatus = "approved" | "requires-confirmation";

export interface ImpactMetric {
  value: string;
  description: string;
  qualifier?: string;
  disclosureStatus: MetricDisclosureStatus;
}

export interface ExecutiveImpact {
  id: string;
  organization: string;
  displayOrganization: string;
  title?: string;
  engagementType: "Executive role" | "Technology leadership" | "Consulting";
  dateRange?: string;
  industry: string;
  context: string;
  accomplishment: string;
  metrics: readonly ImpactMetric[];
  disclosureStatus: ImpactDisclosureStatus;
  link?: string;
  displayOrder: number;
  publish: boolean;
  tags: readonly string[];
}

export const executiveImpact: readonly ExecutiveImpact[] = [
  {
    id: "mei-enterprise-automation",
    organization: "MEI Industrial Solutions",
    displayOrganization: "MEI Industrial Solutions",
    title: "AI & Systems Automation Lead",
    engagementType: "Technology leadership",
    industry: "Industrial services",
    context:
      "Led enterprise automation, integration, application, and governance initiatives across HR, identity, Microsoft cloud platforms, and operational systems.",
    accomplishment:
      "Delivered solutions supporting more than 750 users, including CRM-driven governance of more than 250,000 SharePoint project folders and employee lifecycle orchestration that reduced account creation from approximately 2.5 weeks to one day.",
    metrics: [
      {
        value: "250,000+",
        description: "governed SharePoint project folders",
        disclosureStatus: "approved",
      },
      {
        value: "750+",
        description: "enterprise application users",
        disclosureStatus: "approved",
      },
    ],
    disclosureStatus: "public",
    displayOrder: 1,
    publish: true,
    tags: ["Enterprise automation", "Systems integration", "AI"],
  },
  {
    id: "infonxx-service-provider-scale",
    organization: "InfoNXX",
    displayOrganization: "InfoNXX",
    title: "Vice President of Technology, North America and Asia Pacific",
    engagementType: "Executive role",
    industry: "Telecommunications",
    context:
      "Led regional technology strategy, service delivery, and operations in a carrier-grade directory-assistance environment serving major telecommunications clients.",
    accomplishment:
      "Supported approximately 50 million calls per month for Verizon and Sprint while operating against a 99.999% availability commitment across North America and Asia Pacific.",
    metrics: [
      {
        value: "50M",
        description: "calls per month",
        qualifier: "approximately",
        disclosureStatus: "approved",
      },
      {
        value: "$20M+",
        description: "budget or P&L responsibility",
        qualifier: "ownership and wording not yet verified",
        disclosureStatus: "requires-confirmation",
      },
    ],
    disclosureStatus: "public",
    displayOrder: 2,
    publish: true,
    tags: ["Executive leadership", "Operational scale", "Telecommunications"],
  },
  {
    id: "lehigh-county-cio",
    organization: "Lehigh County",
    displayOrganization: "Lehigh County",
    title: "Chief Information Officer",
    engagementType: "Executive role",
    dateRange: "Eight years",
    industry: "County government",
    context:
      "Led enterprise technology strategy and operations across county government, public safety, criminal justice, infrastructure, digital forensics, and business systems.",
    accomplishment:
      "Directed technology serving more than 60 departments, offices, and bureaus and over 2,000 employees, with reliability, accountability, continuity, and public outcomes as operating requirements.",
    metrics: [
      {
        value: "8 years",
        description: "of countywide CIO leadership",
        disclosureStatus: "approved",
      },
      {
        value: "60+",
        description: "departments, offices, and bureaus",
        disclosureStatus: "approved",
      },
    ],
    disclosureStatus: "public",
    displayOrder: 3,
    publish: true,
    tags: ["Public sector", "Technology strategy", "Operational leadership"],
  },
  {
    id: "energy-executive-visibility",
    organization: "Superior Plus Propane",
    displayOrganization: "Energy distribution organization",
    title: "Technology Consultant",
    engagementType: "Consulting",
    industry: "Energy distribution",
    context:
      "Worked across technology, operations, finance, and human resources to connect operational information with executive priorities.",
    accomplishment:
      "Consolidated fragmented reporting into decision-focused views, reducing reconciliation effort and helping leaders direct attention sooner to material exceptions, performance variance, and emerging risk.",
    metrics: [],
    disclosureStatus: "organization-withheld",
    displayOrder: 4,
    publish: true,
    tags: ["Decision support", "Cross-functional leadership", "Operational insight"],
  },
  {
    id: "cybersecurity-agentic-workflows",
    organization: "Confidential cybersecurity company",
    displayOrganization: "Cybersecurity industry",
    title: "Technology Consultant",
    engagementType: "Consulting",
    industry: "Cybersecurity",
    context:
      "Developed agentic workflow strategy and architecture for research, enrichment, analysis, and content operations.",
    accomplishment:
      "Designed a governed operating pattern that joined AI capabilities with business data, permissions, human review, and accountable decision points without representing the work as a completed production deployment.",
    metrics: [],
    disclosureStatus: "organization-withheld",
    displayOrder: 5,
    publish: true,
    tags: ["Agentic systems", "Governance", "Human oversight"],
  },
  {
    id: "barclays-growth",
    organization: "Barclays / Barclaycard US",
    displayOrganization: "Barclays / Barclaycard US",
    engagementType: "Executive role",
    industry: "Financial services",
    context:
      "Led network and contact-center technology through a period of significant organizational change and growth.",
    accomplishment:
      "Aligned architecture, capacity, resiliency, and technology execution with the expanding needs of the business.",
    metrics: [
      {
        value: "150%",
        description: "growth",
        qualifier:
          "measure, time period, business context, and employer relationship require confirmation",
        disclosureStatus: "requires-confirmation",
      },
    ],
    disclosureStatus: "requires-confirmation",
    displayOrder: 6,
    publish: false,
    tags: ["Financial services", "Network leadership", "Contact centers"],
  },
] as const;

export const publishedExecutiveImpact = executiveImpact
  .filter((item) => item.publish)
  .sort((a, b) => a.displayOrder - b.displayOrder);
