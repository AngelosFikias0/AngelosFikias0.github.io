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
    sub: "Platform Engineer at Dataviva, building Kubernetes infrastructure, CI/CD pipelines, and observability stacks for enterprise-scale systems. Thessaloniki, Greece.",
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
      type: "self-directed · systems engineering",
      name: "Docker Lab — Production Container Engineering Lab",
      period: "May 2026 – Jul 2026",
      desc: "Self-directed container engineering lab spanning the full stack from Linux kernel primitives to production orchestration — built to go beyond tutorials into how containers actually work at the kernel and runtime level.",
      impact: [
        "Designed 13 progressive modules across the full container lifecycle — images, networking, storage, performance, security hardening, multi-container orchestration, observability, Swarm, and Kubernetes — each with runnable exercises.",
        "Built production-shaped CI/CD with parallel matrix builds across 13 Dockerfiles, Compose validation gates, BuildKit GHA cache, and automated semver releases publishing versioned images to GitHub Container Registry.",
        "Deployed a complete metrics pipeline (cAdvisor + Prometheus + Grafana) with OOM, CPU throttle, and memory pressure alert rules, auto-provisioned with zero manual configuration.",
        "Wrote 8 technical reference docs on Docker internals, Linux namespaces and cgroups, overlay networking, KVM/QEMU virtualization, OCI runtimes, and 12-Factor methodology, mapped to Kubernetes equivalents throughout.",
      ],
      stack: ["Docker", "Kubernetes", "Linux", "GitHub Actions", "Prometheus", "Grafana", "Spring Boot", "PostgreSQL", "Python", "Bash"],
    },
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
      desc: "Building and operating cloud-native infrastructure for a B2B SaaS product in retail forecasting and supply chain.",
      bullets: [
        "Designed and built a Kubernetes-native E2E load and performance testing platform (Playwright, Artillery) from scratch, running production-scale tests with 150+ concurrent users. Findings drove backend architecture redesigns ahead of enterprise client launch.",
        "Manage CI/CD pipeline architecture org-wide (Jenkins, GitHub/Gitea Actions) and contribute to a full version-control platform migration across engineering teams, including workflow design and team training.",
        "Improved backup and recovery processes for critical production systems through hands-on testing and analysis.",
        "Operate multi-cluster Kubernetes infrastructure (K8s, K3s, ArgoCD GitOps, Helm, RBAC) spanning dev, staging, and production, with Docker-based workloads throughout; build and own internal developer tooling and organization-wide technical documentation.",
        "Own end-to-end incident response and production support across internal, client, and multi-environment deployments, using Prometheus/Grafana and Linux-level diagnostics for monitoring, logging, and root cause analysis.",
      ],
      tags: ["Kubernetes", "Helm", "Docker", "ArgoCD", "Rancher", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "RBAC", "Linux", "Azure", "Python"],
    },
    {
      period: "OCT 2025 – DEC 2025",
      role: "DevOps Engineer Intern",
      company: "Dataviva · Thessaloniki, Greece",
      desc: "Built and operated cloud-native infrastructure for an enterprise AI platform serving retail forecasting and supply chain management, during initial onboarding and ramp-up.",
      bullets: [
        "Operated Kubernetes clusters (Docker, Helm, Jenkins, Linux) across production workloads as part of initial platform ramp-up.",
        "Evaluated tooling and designed the initial architecture for a distributed E2E performance testing platform, later built out to production scale.",
        "Deployed a product analytics tool on Kubernetes via Helm and delivered full deployment documentation and troubleshooting playbooks.",
        "Integrated Prometheus/Grafana observability and automated workflows via Bash, Python, and JavaScript.",
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
    // ── Linux & Systems ──
    {
      name: "Linux Fundamentals (LFS101)",
      issuer: "The Linux Foundation",
      date: "Jul 2026",
      desc: "Core Linux skills: boot process (BIOS/UEFI, GRUB, systemd), filesystem hierarchy and permissions (ext4, XFS, inodes, chmod/chown), process and user management (UID/EUID, cron, systemctl), shell scripting, and networking fundamentals (ssh, DNS, NFS).",
    },
    // ── DevOps & CI/CD ──
    { name: "DevOps Professional", issuer: "PagerDuty", date: "Sep 2025" },
    { name: "Intro to CD & GitOps using Argo CD", issuer: "Akuity", date: "Nov 2025" },
    { name: "Backstage Fundamentals", issuer: "The Linux Foundation", date: "May 2026" },
    { name: "Introduction to Jenkins", issuer: "The Linux Foundation", date: "Nov 2025" },
    // ── Architecture & Agile ──
    { name: "Agile Project Management Professional", issuer: "Atlassian", date: "Sep 2025" },
    { name: "Scrum: The Basics", issuer: "Project Management Institute", date: "Sep 2025" },
    { name: "Enterprise Architecture Foundations", issuer: "LinkedIn", date: "Aug 2025" },
    { name: "Software Architecture Foundations", issuer: "LinkedIn", date: "Aug 2025" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Aug 2025" },
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
