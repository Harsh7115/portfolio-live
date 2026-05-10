export const nav = ['Work', 'Experience', 'Projects', 'About', 'Contact'];

export const hero = {
  name: 'Harsh Jain',
  headline: 'Building AI systems that stay grounded, useful, and reliable.',
  sub: "I'm a CS senior at the University of Arizona working across RAG systems, LLM evaluation, backend infrastructure, and automation-heavy enterprise workflows.",
  pills: ['Graduating May 2026', 'Open to full-time roles', 'Arizona / open to relocation', '3.85 GPA'],
  focusAreas: ['AI Systems', 'RAG + Evaluation', 'Backend APIs', 'Automation', 'Cloud + Infrastructure'],
  links: {
    github: 'https://github.com/Harsh7115',
    linkedin: 'https://www.linkedin.com/in/-harshitjain/',
    email: 'harshjain.cs.30@gmail.com',
    resume: 'https://harsh7115.github.io/portfolio-live/Resume.pdf',
  },
};

export const signals = [
  { title: 'AI Systems', body: 'Textbook-grounded assistants, retrieval pipelines, evaluation harnesses.' },
  { title: 'Backend', body: 'REST APIs, data models, infrastructure across Python, Go, Java, TypeScript.' },
  { title: 'Automation', body: 'ServiceNow GRC, compliance workflows, SQL-driven reporting pipelines.' },
  { title: 'Systems', body: 'OS, networking, distributed systems — C, C++, Go at the metal.' },
];

export const selectedWork = [
  {
    id: 'mcgrawhill',
    role: 'AI Systems Engineer — POC',
    org: 'University of Arizona × McGraw Hill',
    dates: 'Jan 2026 – May 2026',
    description: 'Controlled RAG-based GPT framework for textbook-grounded instructional assistants, with retrieval design, source-aware responses, content guardrails, and evaluation criteria to reduce hallucinations.',
    tags: ['RAG', 'LLM Systems', 'Retrieval', 'Guardrails', 'Evaluation'],
    featured: true,
  },
  {
    id: 'awcim',
    role: 'AI Solutions Developer',
    org: 'Andrew Weil Center for Integrative Medicine',
    dates: 'Aug 2025 – Nov 2025',
    description: 'Built backend services for document ingestion, embeddings, API access, and RAG-based support around healthcare content, with emphasis on reliability, safety, and stakeholder testing.',
    tags: ['AWS', 'RAG', 'Backend', 'Embeddings', 'Healthcare AI'],
    featured: true,
  },
  {
    id: 'handshake',
    role: 'CS Fellow — AI Evaluation',
    org: 'Handshake AI MOVE Program',
    dates: 'Sep 2025 – Present',
    description: 'Built reproducible Docker CI environments for AI agent benchmarking; authored fail-to-pass test suites and collaborated with engineering leads to refine prompt patterns and structured output formats.',
    tags: ['LLM Evaluation', 'Docker', 'Prompt Engineering', 'AI Reliability'],
    featured: false,
  },
  {
    id: 'grc',
    role: 'GRC Business Analyst',
    org: 'University of Arizona ITS',
    dates: 'Sep 2023 – May 2026',
    description: 'Automated compliance and risk workflows, built SQL-driven reporting pipelines, supported ServiceNow GRC processes, and improved documentation for recurring operational tasks.',
    tags: ['ServiceNow', 'SQL', 'Automation', 'GRC', 'Reporting'],
    featured: false,
  },
  {
    id: 'systems',
    role: 'Systems Projects',
    org: 'Personal / Academic',
    dates: '2023 – 2026',
    description: 'Operating system simulation, TCP proxy tooling, Unix shell, distributed key-value store, and backend/full-stack projects across C, Go, Java, Python, and TypeScript.',
    tags: ['C', 'Go', 'Networking', 'OS', 'Distributed Systems'],
    featured: false,
  },
];

export const experience = [
  {
    role: 'AI Systems Engineer — POC',
    org: 'University of Arizona × McGraw Hill',
    dates: 'Jan 2026 – May 2026',
    bullets: [
      'Built production backend for a RAG-based AI assistant: document ingestion, retrieval pipeline, prompt routing, and GPT API integration.',
      'Designed role-based access controls and retrieval scoping enabling instructors to configure assistants constrained to course materials.',
      'Iterated on chunking and retrieval strategies to improve multi-step query accuracy and reduce hallucination risk.',
    ],
  },
  {
    role: 'CS Fellow — AI Evaluation & Prompt Engineering',
    org: 'Handshake AI MOVE Program',
    dates: 'Sep 2025 – Present',
    bullets: [
      'Built reproducible Docker CI environments for automated testing of AI agent patches across diverse codebases.',
      'Authored fail-to-pass test suites enabling automated patch validation; collaborated to refine prompt patterns and structured output formats.',
    ],
  },
  {
    role: 'Founding Engineer',
    org: 'SkillfullyAware (SAAQ) App',
    dates: 'Oct 2025 – Jan 2026',
    bullets: [
      'Led MVP backend from scratch: data models, service architecture, LLM API integrations, and vector retrieval.',
      'Delivered features end-to-end across API, data layer, and system integrations.',
    ],
  },
  {
    role: 'AI Solutions Developer',
    org: 'Andrew Weil Center for Integrative Medicine',
    dates: 'Aug 2025 – Nov 2025',
    bullets: [
      'Built modular backend services and document ingestion pipelines for AI-driven healthcare applications.',
      'Integrated AWS (Lambda, S3) to support backend workflows; standardized API contracts across ingestion pipelines.',
    ],
  },
  {
    role: 'GRC Business Analyst',
    org: 'University of Arizona ITS',
    dates: 'Sep 2023 – May 2026',
    bullets: [
      'Automated compliance workflows with scripting and data pipelines, reducing manual effort across recurring audit processes.',
      'Built reporting dashboards for audit-ready enterprise systems; partnered with compliance officers using ServiceNow GRC.',
    ],
  },
];

export const projects = [
  { title: 'Guardrail Auditor', year: 2026, category: 'Full-stack', desc: 'Full-stack LLM security auditing platform — risk-tiered verdicts, JSON/CSV exports, Prisma ORM, Neon Postgres, deployed on Vercel.', tags: ['TypeScript', 'Next.js', 'Prisma', 'AI Safety'], github: 'https://github.com/Harsh7115/guardrail-auditor', live: 'https://guardrail-auditor.vercel.app/' },
  { title: 'go-distributed-kv', year: 2026, category: 'Systems', desc: 'Distributed key-value store with Raft consensus for leader election and log replication — linearizable reads, fault-tolerant writes.', tags: ['Go', 'Raft', 'gRPC', 'Docker'], github: 'https://github.com/Harsh7115' },
  { title: 'Unix Shell', year: 2025, category: 'Systems', desc: 'POSIX-compatible shell with piping, redirection, background jobs, and signal handling in C.', tags: ['C', 'Systems', 'OS', 'Unix'], github: 'https://github.com/Harsh7115' },
  { title: 'OS Simulation', year: 2025, category: 'Systems', desc: 'Operating system simulation covering scheduling, memory management, and process lifecycle in C.', tags: ['C', 'OS', 'Scheduling', 'Memory'], github: 'https://github.com/Harsh7115' },
  { title: 'Mobile TCP Proxy Tool', year: 2025, category: 'Systems', desc: 'TCP proxy tool for mobile traffic interception, analysis, and routing across network layers.', tags: ['Networking', 'TCP', 'Python'], github: 'https://github.com/Harsh7115' },
  { title: 'Java Personal Finance AI', year: 2025, category: 'Full-stack', desc: 'Modular finance platform with concurrent transaction processing, SQL persistence, and Python ML for automated expense categorization.', tags: ['Java', 'JavaFX', 'SQLite', 'Python ML', 'Jenkins'], github: 'https://github.com/Harsh7115' },
  { title: 'JIRA-Inspired PM Tool', year: 2024, category: 'Full-stack', desc: 'Project management tool with ticket tracking, sprints, and role-based access — modeled after JIRA workflows.', tags: ['Java', 'OOP', 'MVC'], github: 'https://github.com/Harsh7115' },
  { title: 'OneLiner Reddit Hackathon', year: 2024, category: 'Full-stack', desc: 'Hackathon project summarizing Reddit threads into single-line insights using NLP and the Reddit API.', tags: ['Python', 'NLP', 'API', 'Hackathon'], github: 'https://github.com/Harsh7115' },
];

export const skills = [
  { cat: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'Go', 'SQL', 'JavaScript', 'TypeScript'] },
  { cat: 'AI / LLM', items: ['RAG', 'LangChain', 'Embeddings', 'FAISS', 'Prompt Engineering', 'LLM Evaluation', 'AWS Bedrock'] },
  { cat: 'Backend / Data', items: ['REST APIs', 'Express', 'Django', 'PostgreSQL', 'SQLite', 'Redis', 'gRPC'] },
  { cat: 'Cloud / Tools', items: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Linux', 'Git', 'ServiceNow', 'Jira'] },
];

export const about = {
  main: "I'm interested in systems that are useful under real constraints — AI tools that cite their sources, backend services that don't collapse under messy requirements, and automation that saves people from repetitive work. My work has moved across university research partnerships, healthcare-facing AI tooling, enterprise GRC automation, and systems-heavy CS projects.",
  beyond: "Outside of software, I'm usually training, following geopolitics, or reading about human behavior and complex systems.",
};
