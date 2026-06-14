window.SITE_DATA = {
  meta: {
    name: "Angelos Fikias",
    role: "Platform Engineer",
    company: "Dataviva",
    location: "Thessaloniki, Greece",
    email: "angelosfikias@gmail.com",
    github: "https://github.com/AngelosFikias0",
    linkedin: "https://www.linkedin.com/in/angelos-fikias/",
    status: "Building production infrastructure",
    focus: "Platform Engineering · DevOps · Cloud Infrastructure",
  },

  terminal: [
    { type: "cmd", text: "cat whoami.json" },
    { type: "blank" },
    { type: "brace", text: "{" },
    { type: "field", key: "name", value: "Angelos Fikias" },
    { type: "field", key: "role", value: "Platform Engineer" },
    { type: "field", key: "company", value: "Dataviva" },
    { type: "field", key: "location", value: "Thessaloniki, Greece" },
    {
      type: "field",
      key: "focus",
      value: "Platform Engineering · DevOps · Cloud Infrastructure",
    },
    {
      type: "field",
      key: "education",
      value: "BSc Applied CS @ University of Macedonia",
      last: true,
    },
    { type: "brace", text: "}" },
  ],

  hero: {
    headline: ["Building ", "platforms", " that\noperate reliably."],
    sub: "I own cloud-native infrastructure end to end: Kubernetes, CI/CD, observability, and the automation that ties it together. Based in Thessaloniki, Greece.",
    ctas: [
      { label: "$ explore --projects", href: "#projects", style: "primary" },
      {
        label: "$ open github",
        href: "https://github.com/AngelosFikias0",
        style: "ghost",
        external: true,
      },
      { label: "$ get --in-touch", href: "#contact", style: "ghost" },
    ],
  },

  about: {
    bio: [
      "I'm a platform engineer focused on building and operating the infrastructure that lets product teams ship reliably and fast. My work spans Kubernetes cluster ownership, CI/CD pipeline design, observability stacks, and automation tooling, from initial commit to production rollout.",
      "Currently an <b>Platform Engineer at Dataviva</b>, where I own Kubernetes infrastructure, CI/CD pipelines, and observability stacks for a cloud-native AI-driven retail platform.",
      "My philosophy: <b>automate everything, measure what matters, own the outcome.</b>",
    ],
    stats: [
      { value: "8mo", label: "Production Exp." },
      { value: "4+", label: "Projects Built" },
      { value: "Prod", label: "Infra Owner" },
      { value: "K8s", label: "Daily Driver" },
    ],
  },

  mainStack: ["Kubernetes", "Docker", "Helm", "ArgoCD", "CI/CD"],

  stack: [
    {
      name: "Cloud & Infrastructure",
      type: "tags",
      items: [
        "Kubernetes",
        "Docker",
        "Helm",
        "Rancher",
        "Terraform",
        "Ansible",
        "Azure",
        "Linux",
      ],
    },
    {
      name: "CI/CD & GitOps",
      type: "tags",
      items: [
        "ArgoCD",
        "Jenkins",
        "GitHub Actions",
        "Gitea Actions",
        "GitOps",
        "Harbor",
        "Azure Container Registry",
      ],
    },
    {
      name: "Observability",
      type: "tags",
      items: ["Prometheus", "Grafana", "Pushgateway", "MinIO", "SQLite"],
    },
    {
      name: "Testing & Automation",
      type: "tags",
      items: ["Artillery", "Playwright", "K6", "Bash", "PowerShell"],
    },
    {
      name: "Languages",
      type: "tags",
      items: ["Python", "JavaScript", "Node.js", "Java", "SQL"],
    },
  ],

  projects: [
    {
      type: "platform tooling · production",
      name: "Cloud-Native Browser Load Testing Platform",
      desc: "Distributed E2E browser load testing platform on Kubernetes, running real Playwright sessions at scale via Artillery with VU auto-splitting, wave-based batch execution, and six load profiles. Enabled data-driven architectural validation before enterprise client go-live, surfacing insights that informed platform-wide decisions. Playwright workers run as isolated Kubernetes Jobs per wave, with CSV-driven test data, per-session video capture, and a zero-dependency reporting engine. Includes an Angular-aware test generator with a diagnostic knowledge base for auto-resolving E2E pitfalls. Full observability via Prometheus/Grafana with SQLite regression tracking, shipped via GitHub Actions to ACR and deployed to production.",
      stack: [
        "Python",
        "Artillery",
        "Playwright",
        "Kubernetes",
        "Helm",
        "Docker",
        "Azure Container Registry",
        "Prometheus",
        "Grafana",
        "Pushgateway",
        "MinIO",
        "SQLite",
        "GitHub Actions",
        "JavaScript",
      ],
      github: "https://github.com/AngelosFikias0",
    },
    {
      type: "enterprise · full-stack · university",
      name: "EfficienCity - Municipal Resource Management",
      desc: "Municipal resource management platform enabling inter-municipality asset sharing, real-time inventory tracking, and citizen-facing transparency. Full SDLC ownership: stakeholder mapping, BPMN AS-IS/TO-BE modeling, SWOT, MoSCoW. Microservices on Azure AKS with Kafka event-driven communication, PostgreSQL and ClickHouse data pipeline, and an immutable audit ledger for GDPR compliance. React + TypeScript MVP across three role-based interfaces, designed in Figma.",
      stack: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "ClickHouse",
        "Kafka",
        "Docker",
        "Azure AKS",
        "BPMN",
        "Figma",
      ],
      github: "https://github.com/AngelosFikias0/Resource_Management_System",
    },
    {
      type: "enterprise architecture · university",
      name: "SafeCar - Enterprise Insurance Platform",
      desc: "Enterprise insurance platform covering the full policy lifecycle from proposals through claims. Applied TOGAF and Zachman frameworks to align architecture with business strategy. Modeled end-to-end process transformation via BPMN and UML. RBAC and automated workflows delivered across a team SDLC project.",
      stack: [
        "Java",
        "TOGAF",
        "Zachman",
        "BPMN",
        "UML",
        "Figma",
        "Enterprise Architecture",
      ],
      github: "https://github.com/AngelosFikias0/Safe_car_insurance_System",
    },
    {
      type: "mobile + backend · university",
      name: "TikiPark - Real-Time Smart Parking",
      desc: "Android parking assistant with real-time slot availability and Google Maps integration. Offline-first architecture maintains full functionality without network access. RBAC across Admin/User/Guest tiers with a modular auth system. RESTful backend with PHP and MySQL, SQLite for local persistence.",
      stack: [
        "Java",
        "Android SDK",
        "PHP",
        "MySQL",
        "SQLite",
        "Google Maps API",
        "REST",
      ],
      github: "https://github.com/AngelosFikias0/TikiPark",
    },
  ],

  experience: [
    {
      period: "JAN 2026 - PRESENT",
      role: "Associate Platform Engineer",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Designed and shipped a Kubernetes-native E2E load testing platform (Playwright + Artillery) - ephemeral job model, VU auto-splitting, wave-based orchestration, and granular observability, enabling data-driven architectural decisions before enterprise client go-live.",
        "Managed multi-cluster infrastructure via Rancher (K3s), ArgoCD App of Apps GitOps, multi-tier Helm charts, and Jenkins RBAC-scoped pipelines across internal, external, and client environments; automated image delivery to Harbor and ACR for air-gapped deployments.",
        "Implemented Prometheus/Grafana observability with Pushgateway for ephemeral job metrics, SLA dashboards, and SQLite-backed regression tracking, turning load test runs into auditable performance baselines.",
        "Drove architecture decisions end to end, tool evaluation, system design, and delivery from prototype to production.",
      ],
      tags: [
        "Kubernetes",
        "Helm",
        "Docker",
        "ArgoCD",
        "Rancher",
        "Prometheus",
        "Grafana",
        "Azure",
        "Python",
        "Artillery",
        "Playwright",
      ],
    },
    {
      period: "OCT 2025 - DEC 2025",
      role: "DevOps Engineer Intern",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Operated Kubernetes clusters using Docker, Helm, Jenkins, and Linux across production workloads.",
        "Designed a distributed E2E performance testing infrastructure — tooling evaluation, architecture design, and initial K8s implementation.",
        "Deployed Product analytics tool on Kubernetes via Helm and delivered full deployment documentation and troubleshooting playbooks.",
        "Integrated Prometheus and Grafana observability, and automated workflows via Bash, Python, and JavaScript.",
      ],
      tags: [
        "Kubernetes",
        "Docker",
        "Helm",
        "Jenkins",
        "ArgoCD",
        "Prometheus",
        "Grafana",
        "Python",
        "Bash",
        "Linux",
      ],
    },
    {
      period: "OCT 2022 - PRESENT",
      role: "BSc. Applied Computer Science",
      company: "University of Macedonia · Thessaloniki, Greece · GPA 7.46",
      desc: "Specialization in Information Systems. Coursework in software engineering, distributed systems, IT infrastructure, and digital strategy. Delivered team-based projects across the full SDLC.",
      tags: [
        "Information Systems",
        "Distributed Systems",
        "System Design",
        "Solution Architecture",
        "Agile",
      ],
    },
  ],

  certifications: [
    // ── Cloud & Kubernetes ──
    {
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Jan 2026",
    },
    {
      name: "Manage Kubernetes in Google Cloud",
      issuer: "Google",
      date: "Dec 2025",
    },
    {
      name: "Introduction to Kubernetes",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
    },
    // ── DevOps & CI/CD ──
    {
      name: "DevOps Professional",
      issuer: "PagerDuty",
      date: "Sep 2025",
    },
    {
      name: "Intro to CD & GitOps using Argo CD",
      issuer: "Akuity",
      date: "Nov 2025",
    },
    {
      name: "Backstage Fundamentals",
      issuer: "The Linux Foundation",
      date: "May 2026",
    },
    {
      name: "Introduction to Jenkins",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
    },
    {
      name: "DevOps Foundations: Site Reliability Engineering",
      issuer: "LinkedIn",
      date: "Sep 2025",
    },
    // ── Architecture & Agile ──
    {
      name: "Agile Project Management Professional",
      issuer: "Atlassian",
      date: "Sep 2025",
    },
    {
      name: "Enterprise and Software Architecture Foundations",
      issuer: "LinkedIn",
      date: "Aug 2025",
    },
    // ── Security & Languages ──
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Aug 2025",
    },
    {
      name: "Oracle Java Foundations",
      issuer: "Oracle",
      date: "Aug 2025",
    },
  ],

  contact: {
    intro:
      "Open to conversations about <b>Kubernetes, GitOps, and cloud-native infrastructure</b>. Reach out directly.",
    languages: [
      { lang: "Greek", level: "Native" },
      { lang: "English", level: "C2 Proficiency" },
      { lang: "German", level: "Elementary" },
    ],
    links: [
      {
        icon: "email",
        platform: "Email",
        handle: "angelosfikias@gmail.com",
        href: "mailto:angelosfikias@gmail.com",
      },
      {
        icon: "gh",
        platform: "GitHub",
        handle: "@AngelosFikias0",
        href: "https://github.com/AngelosFikias0",
        external: true,
      },
      {
        icon: "li",
        platform: "LinkedIn",
        handle: "Angelos Fikias",
        href: "https://www.linkedin.com/in/angelos-fikias/",
        external: true,
      },
    ],
  },
};
