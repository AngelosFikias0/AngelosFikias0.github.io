window.SITE_DATA = {
  meta: {
    name: "Angelos Fikias",
    role: "Associate Platform Engineer",
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
    { type: "field", key: "role", value: "Associate Platform Engineer" },
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
      "Currently an <b>Associate Platform Engineer at Dataviva</b>, where I own Kubernetes infrastructure, CI/CD pipelines, and observability stacks for a cloud-native AI-driven retail platform.",
      "My philosophy: <b>automate everything, measure what matters, own the outcome.</b>",
    ],
    stats: [
      { value: "1+", label: "Years Professional" },
      { value: "4+", label: "Projects Built" },
      { value: "Prod", label: "Infra Owner" },
      { value: "K8s", label: "Daily Driver" },
    ],
  },

  mainStack: [
    "Kubernetes",
    "Docker",
    "Azure",
    "CI/CD",
    "Java",
  ],

  stack: [
    {
      name: "Cloud & Infrastructure",
      type: "tags",
      items: [
        "Kubernetes",
        "Docker",
        "Helm",
        "Terraform",
        "Ansible",
        "Azure",
        "GCP",
        "AWS",
        "Linux",
      ],
    },
    {
      name: "CI/CD & GitOps",
      type: "tags",
      items: [
        "GitHub Actions",
        "ArgoCD",
        "Jenkins",
        "GitOps",
        "Azure Container Registry",
      ],
    },
    {
      name: "Observability & Data",
      type: "tags",
      items: [
        "Prometheus",
        "Grafana",
        "SQLite",
        "PostgreSQL",
        "ClickHouse",
        "Kafka",
        "MinIO",
      ],
    },
    {
      name: "Testing & Automation",
      type: "tags",
      items: [
        "Artillery",
        "Playwright",
        "Bash",
        "PowerShell",
      ],
    },
    {
      name: "Languages & Frameworks",
      type: "tags",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL",
        "React",
        "Spring Boot",
      ],
    },
  ],

  projects: [
    {
      type: "platform tooling · production",
      name: "Cloud-Native Browser Load Testing Platform",
      desc: "Distributed E2E load testing platform running real Playwright browser sessions at scale on Kubernetes via Artillery. Replaced synthetic HTTP simulation with actual user workflows. Two-layer architecture with exact VU auto-splitting, wave-based execution, CSV batch injection, and six load profiles. Python-based test generator with a JSON knowledge base that auto-fixes 35+ Angular E2E pitfalls and surfaces targeted remediation for the rest. Helm operator for full namespace lifecycle management across four cluster discovery strategies. Observability via Prometheus and Grafana with SQLite regression tracking. Shipped via GitHub Actions to Azure Container Registry. Deployed to production.",
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
        "Built a distributed E2E browser load testing platform on Kubernetes, running real Playwright sessions at scale via Artillery with exact VU auto-splitting, wave-based batch execution, and six configurable load profiles. Angular-aware test generator backed by a structured diagnostic knowledge base auto-fixes 35+ known E2E pitfalls and surfaces targeted remediation for patterns it cannot resolve. Helm-based environment lifecycle operator covers cluster-aware auto-discovery, full namespace provisioning and teardown, and GUI-guarded destructive operations, complemented by Prometheus and Grafana observability with SQLite regression tracking. Shipped via GitHub Actions to Azure Container Registry and deployed to production.",
        "Own Kubernetes infrastructure, Docker deployments, CI/CD pipelines, and observability stacks across the platform.",
        "Automated image build and delivery pipelines via GitHub Actions to Azure Container Registry for air-gapped client deployments.",
        "Implemented Prometheus and Grafana observability with ServiceMonitor, custom dashboards, and SQLite-backed regression tracking.",
        "Drive platform efficiency, maintainability, and scalability across the SDLC in a fast-moving agile environment.",
      ],
      tags: [
        "Kubernetes",
        "Helm",
        "Docker",
        "GitHub Actions",
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
        "Developed and managed cloud-native infrastructure for an AI-driven retail forecasting platform.",
        "Operated and scaled Kubernetes clusters using Docker, Helm, and Linux.",
        "Began building distributed E2E performance testing infrastructure, continued and shipped as full-time first task.",
        "Built and automated internal tooling and scripts in Python and Bash.",
        "Collaborated in Agile workflows across infrastructure, backend, and platform teams.",
      ],
      tags: [
        "Kubernetes",
        "Linux",
        "Python",
        "JavaScript",
        "Bash",
        "PowerShell",
        "Agile",
      ],
    },
    {
      period: "OCT 2022 - PRESENT",
      role: "BSc. Applied Computer Science",
      company: "University of Macedonia · Thessaloniki, Greece · GPA 7.46",
      desc: "Specialization in Information Systems. Built expertise in software engineering, IT infrastructure, data, distributed systems, and digital strategy. Delivered business-driven solutions through team-based projects designing and optimizing scalable systems aligned with organizational objectives.",
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
      name: "Software Architecture Foundations",
      issuer: "LinkedIn",
      date: "Aug 2025",
    },
    {
      name: "Enterprise Architecture Foundations",
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
