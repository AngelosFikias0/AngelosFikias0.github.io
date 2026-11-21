window.SITE_DATA = {
  meta: {
    name: "Angelos Fikias",
    role: "Platform Engineer",
    company: "Dataviva",
    location: "Thessaloniki, Greece",
    email: "angelosfikias@gmail.com",
    github: "https://github.com/AngelosFikias0",
    linkedin: "https://www.linkedin.com/in/angelos-fikias/",
    status: "Running hybrid Kubernetes in production",
    focus: "Platform Engineering · DevOps · Reliability",
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
      value: "Kubernetes · GitOps · Disaster Recovery · Platform Engineering",
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
    sub: "Platform Engineer at Dataviva, running hybrid Kubernetes infrastructure end to end: GitOps delivery, Terraform provisioning, disaster recovery and production incident response. Thessaloniki, Greece.",
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

  stack: [
    {
      name: "Infrastructure",
      type: "tags",
      items: ["Kubernetes", "Azure AKS", "k3s", "Terraform", "Terragrunt", "Helm", "Docker", "Azure", "Linux", "Gateway API", "Harbor", "Rancher"],
    },
    {
      name: "DevOps & Reliability",
      type: "tags",
      items: ["ArgoCD", "GitOps", "Jenkins", "GitHub Actions", "Gitea Actions", "Prometheus", "Grafana", "Alertmanager", "ELK", "CloudNativePG", "Velero"],
    },
    {
      name: "Security",
      type: "tags",
      items: ["HashiCorp Vault", "Entra ID (OIDC)", "RBAC", "cert-manager", "Trivy", "Snyk", "Hadolint", "Renovate"],
    },
    {
      name: "Testing",
      type: "tags",
      items: ["Playwright", "Artillery", "k6", "Load & Performance Testing"],
    },
    {
      name: "Software",
      type: "tags",
      items: ["Python", "Bash", "Java", "SQL", "JavaScript", "Git", "MkDocs"],
    },
  ],

  projects: [
    {
      type: "self-directed · platform & infrastructure",
      name: "Platform & Infrastructure Labs",
      desc: "Self-directed labs from kernel primitives to Kubernetes - a 13-module Docker lab with CI/CD and Prometheus/Grafana alerting, a self-hosted Backstage developer portal, JVM memory and GC internals, and Terraform IaC.",
      impact: [
        '<a href="https://github.com/AngelosFikias0/docker-lab" target="_blank" rel="noopener">Docker Lab</a> - networking, storage, security, Swarm and Kubernetes; matrix image builds to GHCR; OOM and CPU-throttling alerts.',
        '<a href="https://github.com/AngelosFikias0/backstage-gitops" target="_blank" rel="noopener">Backstage IDP</a> - custom build on Kubernetes with PostgreSQL catalog storage, RBAC and a runbook.',
        '<a href="https://github.com/AngelosFikias0/jvm-lab" target="_blank" rel="noopener">JVM Lab</a> - runnable demos of heap, GC, Metaspace, TLAB and cgroup-aware container memory.',
        '<a href="https://github.com/AngelosFikias0/iac-terraform" target="_blank" rel="noopener">Terraform IaC</a> - HCL, state and provider labs.',
      ],
      stack: ["Docker", "Kubernetes", "Backstage", "Terraform", "Prometheus", "GitHub Actions"],
    },
    {
      type: "university & self-directed · software & architecture",
      name: "Software & Architecture Projects",
      desc: "Designed enterprise platforms in university team projects, from BPMN and TOGAF modelling to an AKS/Kafka microservices architecture; built a Spring Boot REST API with PostgreSQL and CI.",
      impact: [
        '<a href="https://github.com/AngelosFikias0/resource-management-system" target="_blank" rel="noopener">EfficienCity</a> - Solutions Architect on a municipal resource-sharing platform: BPMN AS-IS/TO-BE, AKS/Kafka microservices design, audit ledger and a React MVP.',
        '<a href="https://github.com/AngelosFikias0/Safe_car_insurance_System" target="_blank" rel="noopener">SafeCar</a> - insurance platform aligned with TOGAF and Zachman; full policy lifecycle in BPMN and UML.',
        '<a href="https://github.com/AngelosFikias0/runners-app" target="_blank" rel="noopener">Runners API</a> - Spring Boot 3 REST API with RFC 9457 error handling, Actuator metrics, Docker and CI.',
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Azure AKS", "Kafka", "BPMN", "TOGAF"],
    },
  ],

  experience: [
    {
      period: "JAN 2026 – PRESENT",
      role: "Associate Platform Engineer",
      company: "Dataviva · Thessaloniki, Greece",
      desc: "Owning cloud-native infrastructure for a multi-client B2B SaaS platform: hybrid on-prem and Azure Kubernetes, from provisioning to production incident response.",
      bullets: [
        "Designed and built a Kubernetes-native E2E and load-testing platform from scratch (Playwright, Artillery, Python), running production-scale tests at 150+ concurrent users; findings drove backend performance redesigns ahead of an enterprise client launch.",
        "Engineered PostgreSQL disaster recovery (CloudNativePG, Barman, Velero): point-in-time recovery, failover and continuous backup; cut restore time by ~80% and led a cross-team build of an automated backup retention service.",
        "Own production incident response (Prometheus, Grafana, Alertmanager, ELK): built alerting for core platform services with Teams notifications, and turn root-cause analyses into postmortems and runbooks.",
        "Own CI/CD and supply-chain security (Jenkins, Gitea Actions): moved pipelines to version-controlled Jenkinsfiles, automated image builds across release types, and integrated scanning (Hadolint, Trivy, Snyk) and dependency automation (Renovate, Release Please).",
        "Drive the org-wide migration to a Git-based platform: trained engineering teams on Git workflows, migrated repositories with full history, and administer access, branch protection and CI runners.",
        "Provision and operate test and production client environments with Terraform/Terragrunt, ArgoCD and Helm (AKS, k3s, Gateway API, Vault, Entra ID, RBAC).",
        "Build Python packaging and release pipelines for product teams, and GPU infrastructure on Kubernetes for AI workloads.",
        "Onboard and support engineers across teams (developer environments, cluster access, delivery training); maintain the central platform documentation and drive internal developer platform (IDP) adoption, starting with a Backstage prototype.",
      ],
      tags: ["Kubernetes", "Azure AKS", "k3s", "Terraform", "ArgoCD", "Helm", "Jenkins", "Gitea Actions", "Prometheus", "Grafana", "ELK", "CloudNativePG", "Velero", "Vault", "Trivy", "Snyk", "Playwright", "Artillery"],
    },
    {
      period: "OCT 2025 – DEC 2025",
      role: "DevOps Engineer Intern",
      company: "Dataviva · Thessaloniki, Greece",
      desc: "Built and operated cloud-native infrastructure for an enterprise AI SaaS platform during initial onboarding and ramp-up.",
      bullets: [
        "Operated Kubernetes clusters (Docker, Helm, Jenkins, Linux) across production workloads as part of initial platform ramp-up.",
        "Evaluated tooling and designed the initial architecture for a distributed E2E performance testing platform, later built out to production scale.",
        "Deployed a product analytics tool on Kubernetes via Helm and delivered full deployment documentation and troubleshooting playbooks.",
        "Integrated Prometheus/Grafana observability and automated workflows via Bash, Python, and JavaScript.",
      ],
      tags: ["Kubernetes", "Docker", "Helm", "Jenkins", "Prometheus", "Grafana", "Playwright", "k6", "Python", "Bash", "Linux"],
    },
    {
      period: "OCT 2022 – JUL 2026",
      role: "BSc. Applied Computer Science",
      company: "University of Macedonia · Thessaloniki, Greece · GPA 7.66",
      desc: "Specialization in Information Systems. Built foundations in software engineering, distributed systems and enterprise architecture through team-based projects across the full SDLC.",
      tags: ["Information Systems", "Distributed Systems", "System Design", "Enterprise Architecture", "Agile"],
    },
  ],

  certifications: [
    { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "Jan 2026" },
    { name: "Introduction to Kubernetes", issuer: "The Linux Foundation", date: "Nov 2025" },
    { name: "Linux Fundamentals (LFS101)", issuer: "The Linux Foundation", date: "Jul 2026" },
    { name: "Intro to CD & GitOps using Argo CD", issuer: "Akuity", date: "Nov 2025" },
    { name: "Backstage Fundamentals", issuer: "The Linux Foundation", date: "May 2026" },
    { name: "DevOps Professional", issuer: "PagerDuty", date: "Sep 2025" },
  ],

  contact: {
    intro: "Open to conversations about <b>platform engineering, Kubernetes, GitOps and reliability</b>. Reach out directly.",
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
