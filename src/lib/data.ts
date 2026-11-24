export const stages = [
  {
    number: "01",
    title: "Foundation & Architecture",
    summary: "Define the technical and operational foundations for Relay.",
    objectives: [
      "Finalize technical architecture and core infrastructure specifications",
      "Define Solana integration requirements and non-custodial wallet architecture",
      "Plan the proprietary USSD gateway",
      "Establish initial security and compliance requirements",
      "Prepare the development environment",
    ],
    milestone: "A validated technical foundation ready for core infrastructure development.",
  },
  {
    number: "02",
    title: "Core Infrastructure Development",
    summary: "Build the connected components behind the Relay experience.",
    objectives: [
      "Develop Relay's proprietary USSD gateway and core infrastructure",
      "Develop the consumer access layer and initial web interface",
      "Implement non-custodial wallet functionality",
      "Develop Solana transaction interaction workflows",
    ],
    milestone: "An initial integrated technical prototype.",
  },
  {
    number: "03",
    title: "Integration & Technical Validation",
    summary: "Validate the architecture and its end-to-end workflows.",
    objectives: [
      "Integrate gateway functionality with appropriate telecom connectivity",
      "Validate Solana transaction workflows and wallet authorization",
      "Conduct security assessments and optimize performance",
      "Validate end-to-end system functionality",
    ],
    milestone: "A technically validated system ready for controlled pilot preparation.",
  },
  {
    number: "04",
    title: "Pilot & Initial Market Entry",
    summary: "Prepare a controlled deployment, subject to the right foundations.",
    objectives: [
      "Establish necessary operational and commercial partnerships",
      "Complete applicable legal and regulatory assessments",
      "Prepare a controlled pilot and onboard initial pilot participants",
      "Monitor performance, collect feedback, and improve functionality",
    ],
    milestone: "A validated initial market deployment, subject to necessary approvals and partnerships.",
  },
  {
    number: "05",
    title: "Growth & Expansion",
    summary: "Build a broader, more capable infrastructure ecosystem.",
    objectives: [
      "Develop and expand Relay Connect",
      "Establish additional business integrations and strengthen ecosystem partnerships",
      "Expand infrastructure capacity and explore additional African markets",
      "Evaluate international expansion opportunities",
    ],
    milestone: "A scalable infrastructure ecosystem supporting broader adoption and commercial opportunities.",
  },
];

export const products = [
  {
    key: "consumer",
    number: "01",
    name: "Relay Consumer",
    descriptor: "Access layer",
    description:
      "A planned consumer-facing experience for accessing supported blockchain services through USSD and web, not only through smartphone applications.",
    bullets: ["USSD and web access", "Non-custodial wallet architecture", "Simplified Solana interactions"],
    href: "/solutions#consumer",
    icon: "phone",
  },
  {
    key: "infrastructure",
    number: "02",
    name: "Relay Infrastructure",
    descriptor: "The engine",
    description:
      "The core systems Relay intends to build and operate, including a proprietary USSD gateway and blockchain interaction infrastructure.",
    bullets: ["Proprietary USSD gateway", "Request handling and orchestration", "Solana connectivity"],
    href: "/solutions#infrastructure",
    icon: "nodes",
  },
  {
    key: "connect",
    number: "03",
    name: "Relay Connect",
    descriptor: "Integration layer",
    description:
      "A planned API and integration layer for businesses and developers exploring blockchain-powered functionality in their own services.",
    bullets: ["Planned API integrations", "Fintech and business opportunities", "Developer access"],
    href: "/solutions#connect",
    icon: "brackets",
  },
];
