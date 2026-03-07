/**
 * ============================================================
 *  ANGELOS FIKIAS - Site Data
 *  Edit this file to update any section of the website.
 *  The HTML reads everything from here - no other file to touch.
 * ============================================================
 */

window.SITE_DATA = {
  /* ── META ─────────────────────────────────────────────── */
  meta: {
    name: "Angelos Fikias",
    role: "Platform Engineer",
    company: "Dataviva",
    location: "Thessaloniki, Greece",
    email: "angelosfikias@gmail.com",
    github: "https://github.com/AngelosFikias0",
    linkedin: "https://www.linkedin.com/in/angelos-fikias/",
    status: "Building cool things",
    focus: "Cloud Infrastructure · Automation · DevOps",
    openTo: "Platform / SRE / DevOps roles",
  },

  /* ── HERO terminal lines ──────────────────────────────── */
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
      value: "Cloud Infrastructure · Automation · DevOps",
    },
    {
      type: "field",
      key: "education",
      value: "BSc Applied CS @ University of Macedonia",
      last: true,
    },
    { type: "brace", text: "}" },
  ],

  /* ── HERO copy ────────────────────────────────────────── */
  hero: {
    headline: ["Building ", "platforms", " that\nmake engineers fly."],
    sub: "I connect development, infrastructure and automation to reduce friction across the SDLC. Focused on cloud-native systems, Kubernetes, and long-term maintainability. I optimize for speed, reliability and growth.",
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

  /* ── ABOUT ────────────────────────────────────────────── */
  about: {
    bio: [
      "I'm <b>Angelos Fikias</b>, a platform engineer based in Thessaloniki, Greece. I build and operate cloud and DevOps platforms designed for scale - connecting development, infrastructure, and automation to reduce friction across the entire software delivery lifecycle.",
      "Currently an <b>Associate Platform Engineer at Dataviva</b>, where I own Kubernetes infrastructure, CI/CD pipelines, and observability stacks for a cutting-edge AI-driven retail forecasting platform.",
      "My philosophy: <b>automate everything, measure what matters, ship with confidence.</b> Great infrastructure is invisible - developers should never have to think about it.",
    ],
    stats: [
      { value: "3+", label: "Years Engineering" },
      { value: "8+", label: "Projects Built" },
      { value: "Prod", label: "Infra Owner" },
      { value: "Real", label: "Startup-Hardened" },
    ],
  },

  /* ── STACK ────────────────────────────────────────────── */
  stack: [
    {
      icon: "☁️",
      name: "Cloud & Infrastructure",
      type: "tags",
      items: [
        "Kubernetes",
        "Docker",
        "Helm",
        "Terraform",
        "Ansible",
        "Azure (Primary)",
        "GCP (Exposure)",
        "AWS (Foundations)",
        "Linux",
      ],
    },
    {
      icon: "⚙️",
      name: "CI / CD & GitOps",
      type: "tags",
      items: [
        "GitHub Actions",
        "ArgoCD",
        "Jenkins",
        "GitOps",
        "Bash",
        "PowerShell",
        "Python",
      ],
    },
    {
      icon: "📊",
      name: "Observability & Testing",
      type: "tags",
      items: ["Prometheus", "Grafana", "K6", "Playwright", "SRE"],
    },
    {
      icon: "💻",
      name: "Core Proficiency",
      type: "bars",
      items: [
        { label: "Kubernetes", pct: 90 },
        { label: "Python", pct: 85 },
        { label: "JavaScript", pct: 80 },
        { label: "Java", pct: 75 },
        { label: "SQL", pct: 70 },
        { label: "Azure", pct: 60 },
      ],
    },
    {
      icon: "🏗️",
      name: "Architecture",
      type: "tags",
      items: [
        "Cloud-Native Design",
        "Microservices",
        "Distributed Systems",
        "RESTful APIs",
        "Event-Driven",
        "TOGAF",
        "Zachman",
        "BPMN",
        "Solution Architecture",
      ],
    },
    {
      icon: "🔧",
      name: "Dev & Data",
      type: "tags",
      items: [
        "Spring Boot",
        "Express.js",
        "React",
        "TypeScript",
        "Kafka",
        "PostgreSQL",
        "MySQL",
        "Android SDK",
        "PHP",
        "Apache",
      ],
    },
  ],

  /* ── PROJECTS ─────────────────────────────────────────── */
  projects: [
    {
      type: "enterprise · full-stack",
      name: "EfficienCity - Municipal Resource Management",
      desc: "Enterprise municipal platform designed end-to-end across the full SDLC. Led stakeholder mapping, BPMN AS-IS/TO-BE modeling, and SWOT/MoSCoW analysis. Architected a microservices system on Azure AKS with Kafka event-driven comms, ClickHouse analytics, blockchain audit ledger (100% traceability, GDPR compliant), and a React + TypeScript MVP across three role-based interfaces.",
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
      type: "platform tooling",
      name: "Cloud-Native E2E Performance Testing Tool",
      desc: "Built a distributed end-to-end performance testing infrastructure for cloud-native workloads at Dataviva. Automated deployment pipelines with Docker, Helm, and GitHub Actions to run load tests at scale.",
      stack: ["K6", "Docker", "Helm", "GitHub Actions", "Kubernetes"],
      github:
        "https://github.com/AngelosFikias0/Data_Structures_and_Algorithms",
    },
    {
      type: "distributed systems · backend",
      name: "Java Network Services Hub",
      desc: "Multi-protocol distributed service framework supporting HTTP, TCP, UDP, and RMI communication. Implements concurrent request handling with thread pooling and a Swing-based orchestration interface for unified service management.",
      stack: [
        "Java",
        "Multi-threading",
        "Sockets",
        "RMI",
        "PostgreSQL",
        "Distributed Systems",
      ],
      github: "https://github.com/AngelosFikias0/Java_Network_Services_Hub",
    },
    {
      type: "enterprise architecture",
      name: "SafeCar - Enterprise Insurance Platform",
      desc: "Full-lifecycle insurance platform simulating digital transformation of proposals, contracts and claims. Applied TOGAF and Zachman frameworks to align software with business strategy; modeled workflows via BPMN and UML. Led team collaboration following SDLC best practices end-to-end.",
      stack: ["Java", "TOGAF", "Zachman", "BPMN", "UML", "Figma", "OOAD"],
      github: "https://github.com/AngelosFikias0/Safe_car_insurance_System",
    },
    {
      type: "mobile + backend",
      name: "TikiPark - Real-Time Smart Parking",
      desc: "Offline-first Android app with real-time slot synchronization, Google Maps integration, and SQLite caching for full network resilience. Modular backend with RBAC (Admin/User/Guest) and RESTful APIs ready for payment gateway extension.",
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
    {
      type: "data engineering · graph analysis",
      name: "Crime Intelligence - Network Analysis Platform",
      desc: "Graph-based investigative intelligence platform using the JUNG library and advanced graph theory. Computes centrality metrics (betweenness, closeness, degree) to identify key suspects and uncover criminal relationship patterns.",
      stack: [
        "Java",
        "JUNG",
        "Graph Theory",
        "Swing",
        "Data Visualization",
        "MVC",
      ],
      github: "https://github.com/AngelosFikias0/Crime_Management_System",
    },
  ],

  /* ── EXPERIENCE ───────────────────────────────────────── */
  experience: [
    {
      period: "JAN 2026 - PRESENT",
      role: "Associate Platform Engineer",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Transitioned to full-time after internship - owning Kubernetes infrastructure, Docker & Helm deployments, CI/CD, observability and automation",
        "Integrated APIs (JavaScript, Python) and modern tools into Kubernetes infrastructure and CI/CD workflows for scalable cloud-native environments",
        "Developed a cloud-native E2E performance testing tool and automated deployment pipelines with Docker, Helm and GitHub Actions",
        "Implemented observability with Prometheus and Grafana to improve reliability and monitor platform performance",
        "Drove platform efficiency, maintainability and scalability across the SDLC in a cutting-edge agile startup",
      ],
      tags: [
        "Kubernetes",
        "Docker",
        "Helm",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "Azure",
        "Python",
      ],
    },
    {
      period: "OCT 2025 - DEC 2025",
      role: "DevOps Engineer Intern",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
        "Developed and managed cloud-native infrastructure for an AI-driven retail forecasting platform",
        "Operated and scaled Kubernetes clusters using Docker, Helm and Linux",
        "Built distributed E2E performance testing infrastructure for cloud-native workloads",
        "Integrated product analytics and automated processes with Bash and PowerShell",
        "Developed APIs with JavaScript/Express and automated scripts with Python",
        "Collaborated in Agile workflows, troubleshooting and resolving modern system challenges",
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

  /* ── CERTIFICATIONS ───────────────────────────────────── */
  certifications: [
    {
      icon: "🔷",
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Jan 2026",
    },
    {
      icon: "☸️",
      name: "Manage Kubernetes in Google Cloud",
      issuer: "Google",
      date: "Dec 2025",
    },
    {
      icon: "☸️",
      name: "Introduction to Kubernetes",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
    },
    {
      icon: "🔄",
      name: "Intro to CD & GitOps using Argo CD",
      issuer: "Akuity",
      date: "Nov 2025",
    },
    {
      icon: "🔧",
      name: "Introduction to Jenkins",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
    },
    {
      icon: "🟠",
      name: "Serverless Fundamentals",
      issuer: "AWS",
      date: "Oct 2025",
    },
    {
      icon: "🔔",
      name: "DevOps Professional",
      issuer: "PagerDuty",
      date: "Sep 2025",
    },
    {
      icon: "🔄",
      name: "DevOps Foundations: CI/CD",
      issuer: "CompTIA",
      date: "Sep 2025",
    },
    {
      icon: "📋",
      name: "Agile Project Management Professional",
      issuer: "Atlassian",
      date: "Sep 2025",
    },
    {
      icon: "🔐",
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Aug 2025",
    },
  ],

  /* ── CONTACT ──────────────────────────────────────────── */
  contact: {
    intro:
      "Want to talk <b>Kubernetes internals, GitOps patterns, or cloud-native architecture</b>? Always happy to connect with engineers and teams building interesting things. Drop me a line.",
    openTo: [],
    languages: [
      { lang: "Greek", level: "Native" },
      { lang: "English", level: "C2 Proficiency" },
      { lang: "German", level: "Elementary" },
    ],
    links: [
      {
        icon: "✉️",
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

  /* ── SOFT SKILLS ──────────────────────────────────────── */
  softSkills: [
    "Agile Collaboration",
    "Critical Thinking",
    "Continuous Learning",
    "Project Ownership",
    "Cross-Functional Communication",
    "Time Management",
    "Leadership",
    "Consulting",
  ],
};
