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
      type: "self-directed · container engineering",
      name: "Docker Lab - Container Engineering",
      period: "Mar 2026 – Jul 2026",
      desc: "Self-directed lab from Linux kernel primitives to orchestration: 13 progressive modules (networking, storage, security, Swarm, Kubernetes), CI/CD with matrix image builds to GHCR, a Prometheus/Grafana pipeline with OOM and CPU-throttling alerts, and 8 written references on container internals.",
      stack: ["Docker", "Kubernetes", "Linux", "GitHub Actions", "Prometheus", "Grafana"],
      github: "https://github.com/AngelosFikias0/docker-lab",
    },
    {
      type: "self-directed · platform engineering",
      name: "Backstage IDP Lab",
      period: "May 2026",
      desc: "Self-hosted internal developer portal on Kubernetes (KinD): custom Backstage build, declarative manifests, PostgreSQL catalog storage, ServiceAccount RBAC for the Kubernetes plugin, and an operational runbook.",
      stack: ["Backstage", "Kubernetes", "PostgreSQL", "Docker", "TypeScript"],
      github: "https://github.com/AngelosFikias0/backstage-gitops",
    },
    {
      type: "self-directed · runtime internals",
      name: "JVM Lab",
      period: "Jun 2026",
      desc: "Runnable demos of JVM memory behaviour: Eden allocation and promotion, GC roots, OutOfMemoryError with heap dumps, Metaspace exhaustion, TLAB allocation, stack limits, and cgroup-aware heap sizing inside containers.",
      stack: ["Java", "JVM", "Garbage Collection", "Docker"],
      github: "https://github.com/AngelosFikias0/jvm-lab",
    },
    {
      type: "self-directed · backend",
      name: "Runners API",
      period: "Oct 2024 – Jul 2026",
      desc: "Spring Boot 3 REST API with a JdbcClient repository layer, PostgreSQL in production and H2 in development, centralised RFC 9457 error handling, and Actuator health and metrics. Containerised with Docker Compose; GitHub Actions builds, tests and packages the image.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
      github: "https://github.com/AngelosFikias0/runners-app",
    },
    {
      type: "university team project · solution architecture",
      name: "EfficienCity - Municipal Resource Management",
      period: "Oct 2025 – Jan 2026",
      desc: "Solutions Architect on a platform for inter-municipality asset sharing. Full SDLC design: BPMN AS-IS/TO-BE modelling, stakeholder mapping and MoSCoW prioritisation, a microservices architecture for Azure AKS with Kafka events, a PostgreSQL/ClickHouse data design and an immutable audit ledger. Built a React + TypeScript MVP with three role-based interfaces.",
      stack: ["Solution Architecture", "BPMN", "React", "TypeScript", "Azure AKS (design)", "Kafka (design)"],
      github: "https://github.com/AngelosFikias0/resource-management-system",
    },
    {
      type: "university team project · mobile & backend",
      name: "TikiPark - Smart Parking App",
      period: "Feb 2025 – Jun 2025",
      desc: "Lead contributor (75 of 121 commits) on a 4-person team. Android parking app with real-time slot availability, booking and Google Maps integration, offline-first SQLite caching, and role-based access (Admin/User/Guest) backed by a PHP/MySQL REST API.",
      stack: ["Java", "Android SDK", "PHP", "MySQL", "SQLite", "REST"],
      github: "https://github.com/AngelosFikias0/tikipark-mobile-app",
    },
    {
      type: "university team project · systems analysis",
      name: "SafeCar - Insurance Management System",
      period: "Feb 2024 – Jun 2024",
      desc: "Insurance agency system modelling the move from paper-based workflows across proposals, contracts and claims. UML-driven design with TOGAF/Zachman viewpoints and an object-oriented Java prototype with role-based users (admin, agent, specialist), built by a 5-person team.",
      stack: ["Java", "UML", "TOGAF", "Zachman"],
      github: "https://github.com/AngelosFikias0/safe-car-insurance-system",
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
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "Jan 2026" },
    { name: "Introduction to Kubernetes (LFS158)", issuer: "The Linux Foundation", date: "Nov 2025" },
    { name: "Manage Kubernetes in Google Cloud (Skill Badge)", issuer: "Google Cloud", date: "Dec 2025" },
    { name: "Linux Fundamentals (LFS101)", issuer: "The Linux Foundation", date: "Jul 2026" },
    { name: "Backstage Fundamentals (LFS142)", issuer: "The Linux Foundation", date: "May 2026" },
    { name: "Intro to Continuous Delivery & GitOps using Argo CD", issuer: "Akuity", date: "Nov 2025" },
    { name: "Introduction to Jenkins", issuer: "The Linux Foundation", date: "Nov 2025" },
    { name: "DevOps Professional Certificate", issuer: "PagerDuty", date: "Sep 2025" },
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
