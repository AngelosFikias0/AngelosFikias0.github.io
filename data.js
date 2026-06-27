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
      value: "Kubernetes · CI/CD · Observability · Cloud-Native",
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
    sub: "Platform engineer at Dataviva, building Kubernetes infrastructure, CI/CD pipelines, and observability stacks for enterprise-scale systems. Thessaloniki, Greece.",
    ctas: [
      { label: "Projects", href: "#projects", style: "primary" },
      {
        label: "GitHub",
        href: "https://github.com/AngelosFikias0",
        style: "ghost",
        external: true,
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/angelos-fikias/", style: "ghost", external: true },
    ],
  },

  mainStack: ["Kubernetes", "Docker", "Helm", "ArgoCD", "CI/CD"],

  stack: [
    {
      name: "Cloud & Infrastructure",
      type: "tags",
      items: ["Kubernetes", "Docker", "Helm", "Rancher", "Terraform", "Ansible", "Azure", "Linux"],
    },
    {
      name: "CI/CD & GitOps",
      type: "tags",
      items: ["ArgoCD", "Jenkins", "GitHub Actions", "Gitea Actions", "GitOps", "Harbor"],
    },
    {
      name: "Observability",
      type: "tags",
      items: ["Prometheus", "Grafana", "Pushgateway"],
    },
    {
      name: "Security & Config",
      type: "tags",
      items: ["HashiCorp Vault", "Kubernetes Secrets", "RBAC"],
    },
    {
      name: "Testing & Automation",
      type: "tags",
      items: ["Playwright", "Artillery", "K6", "Bash"],
    },
    {
      name: "Languages",
      type: "tags",
      items: ["Python", "JavaScript", "Node.js", "Java", "SQL"],
    },
  ],

  projects: [
    {
      type: "enterprise · full-stack · university",
      name: "EfficienCity — Municipal Resource Management",
      desc: "End-to-end enterprise platform for inter-municipality asset sharing and real-time inventory tracking. Full SDLC ownership: BPMN AS-IS/TO-BE modeling, stakeholder mapping, MoSCoW. Microservices on Azure AKS with Kafka event-driven communication, PostgreSQL/ClickHouse data pipeline, and an immutable audit ledger for GDPR compliance. React + TypeScript MVP across three role-based interfaces.",
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "ClickHouse", "Kafka", "Docker", "Azure AKS", "BPMN"],
      github: "https://github.com/AngelosFikias0/Resource_Management_System",
    },
    {
      type: "enterprise architecture · university",
      name: "SafeCar — Enterprise Insurance Platform",
      desc: "Enterprise insurance platform covering the full policy lifecycle from proposals through claims. Applied TOGAF and Zachman frameworks to align architecture with business strategy. Process transformation modeled end-to-end via BPMN and UML.",
      stack: ["Java", "TOGAF", "Zachman", "BPMN", "UML", "Figma"],
      github: "https://github.com/AngelosFikias0/Safe_car_insurance_System",
    },
    {
      type: "distributed systems · backend · university",
      name: "Java Network Services Hub",
      desc: "Multi-protocol distributed service framework supporting HTTP, TCP, UDP, and RMI communication. Concurrent request handling via thread pooling across all protocols. PostgreSQL persistence with clean separation between transport and application layers.",
      stack: ["Java", "Multi-threading", "Sockets", "RMI", "PostgreSQL"],
      github: "https://github.com/AngelosFikias0/java-network-services-hub",
    },
    {
      type: "full-stack · web · university",
      name: "Full-Stack Blog Platform",
      desc: "LAMP stack blog platform with role-based access control. Separate admin and user dashboards driven by session-based role resolution. Parameterized queries throughout for SQL injection prevention.",
      stack: ["PHP", "MySQL", "Apache", "Linux", "HTML5", "CSS3"],
      github: "https://github.com/AngelosFikias0/blog-web-app",
    },
    {
      type: "mobile · backend · university",
      name: "TikiPark — Smart Parking App",
      desc: "Offline-first Android parking app with real-time Google Maps integration and SQLite caching. RBAC across Admin/User/Guest tiers with a modular auth system. RESTful PHP/MySQL backend.",
      stack: ["Java", "Android SDK", "PHP", "MySQL", "SQLite", "Google Maps API", "REST"],
      github: "https://github.com/AngelosFikias0/TikiPark",
    },
  ],

  experience: [
    {
      period: "JAN 2026 – PRESENT",
      role: "Associate Platform Engineer",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Designed and shipped a Kubernetes-native E2E load testing platform (Playwright + Artillery) — ephemeral job model, VU auto-splitting, wave-based orchestration, and granular observability, enabling data-driven architectural decisions before enterprise client go-live.",
        "Managed multi-cluster infrastructure via Rancher (K3s), ArgoCD App of Apps GitOps, multi-tier Helm charts, and Jenkins RBAC-scoped pipelines across internal, external, and client environments; automated image delivery to Harbor and ACR for air-gapped deployments.",
        "Implemented Prometheus/Grafana observability with Pushgateway for ephemeral job metrics and SQLite-backed regression tracking, turning load test runs into auditable performance baselines.",
        "Drove architecture decisions end to end — tool evaluation, system design, and delivery from prototype to production.",
      ],
      tags: ["Kubernetes", "Helm", "Docker", "ArgoCD", "Rancher", "Prometheus", "Grafana", "Azure", "Python", "Artillery", "Playwright"],
    },
    {
      period: "OCT 2025 – DEC 2025",
      role: "DevOps Engineer Intern",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Designed the architecture and initial K8s implementation for a distributed E2E performance testing platform — from tooling evaluation through first production deployment.",
        "Operated Kubernetes clusters across production workloads; integrated Prometheus/Grafana observability and automated workflows via Bash and Python.",
      ],
      tags: ["Kubernetes", "Docker", "Helm", "Jenkins", "ArgoCD", "Prometheus", "Grafana", "Python", "Bash", "Linux"],
    },
    {
      period: "OCT 2022 – SEP 2026",
      role: "BSc. Applied Computer Science",
      company: "University of Macedonia · Thessaloniki, Greece · GPA 7.46",
      desc: "Specialization in Information Systems. Coursework in software engineering, distributed systems, IT infrastructure, and digital strategy. Delivered team-based projects across the full SDLC.",
      tags: ["Information Systems", "Distributed Systems", "System Design", "Solution Architecture", "Agile"],
    },
  ],

  certifications: [
    // ── Cloud & Kubernetes ──
    { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "Jan 2026" },
    { name: "Manage Kubernetes in Google Cloud", issuer: "Google", date: "Dec 2025" },
    { name: "Introduction to Kubernetes", issuer: "The Linux Foundation", date: "Nov 2025" },
    { name: "Serverless Fundamentals", issuer: "Amazon Web Services", date: "Oct 2025" },
    // ── DevOps & CI/CD ──
    { name: "DevOps Professional", issuer: "PagerDuty", date: "Sep 2025" },
    { name: "Intro to CD & GitOps using Argo CD", issuer: "Akuity", date: "Nov 2025" },
    { name: "Backstage Fundamentals", issuer: "The Linux Foundation", date: "May 2026" },
    { name: "Introduction to Jenkins", issuer: "The Linux Foundation", date: "Nov 2025" },
    // ── Architecture & Agile ──
    { name: "Agile Project Management Professional", issuer: "Atlassian", date: "Sep 2025" },
    { name: "Enterprise and Software Architecture Foundations", issuer: "LinkedIn", date: "Aug 2025" },
    // ── Languages ──
    { name: "Oracle Java Foundations", issuer: "Oracle", date: "Aug 2025" },
  ],

  contact: {
    intro: "Open to conversations about <b>Kubernetes, GitOps, and cloud-native infrastructure</b>. Reach out directly.",
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
