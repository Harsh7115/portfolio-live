export const hero = {
  headline: ['Building AI systems', 'that stay grounded.'],
  sub: 'RAG, evaluation, backend infrastructure, and automation — built around real constraints, not demos.',
  links: {
    github: 'https://github.com/Harsh7115',
    linkedin: 'https://www.linkedin.com/in/-harshitjain/',
    email: 'mailto:harshjain.cs.30@gmail.com',
    resume: './Resume.pdf',
  },
}

export const systems = [
  {
    id: 'mcgrawhill',
    label: 'Grounded AI · RAG',
    title: 'UA × McGraw Hill',
    subtitle: 'AI Systems Engineer — POC',
    dates: 'Jan 2026 – May 2026',
    desc: 'Controlled RAG-based GPT framework for textbook-grounded instructional assistants, with retrieval design, source-aware responses, content guardrails, and evaluation criteria to reduce hallucinations.',
    tags: ['RAG', 'LLM Systems', 'Retrieval', 'Guardrails', 'Evaluation'],
    span: 'featured',
  },
  {
    id: 'awcim',
    label: 'Healthcare AI · Backend',
    title: 'Andrew Weil Center',
    subtitle: 'AI Solutions Developer',
    dates: 'Aug 2025 – Dec 2025',
    desc: 'Built backend services for document ingestion, embeddings, API access, and RAG-based support around healthcare content, with emphasis on reliability, safety, and stakeholder testing.',
    tags: ['AWS', 'RAG', 'Backend', 'Embeddings', 'Healthcare AI'],
    span: 'normal',
  },
  {
    id: 'handshake',
    label: 'AI Evaluation',
    title: 'Handshake AI MOVE',
    subtitle: 'CS Fellow',
    dates: 'Oct 2025 – Present',
    desc: 'Evaluated AI-generated outputs, worked on instruction-following quality, prompt iteration, and structured feedback workflows for multimodal AI systems.',
    tags: ['LLM Evaluation', 'Prompt Engineering', 'QA', 'AI Reliability'],
    span: 'normal',
  },
  {
    id: 'grc',
    label: 'Enterprise Automation',
    title: 'UArizona IT Services',
    subtitle: 'GRC Automation Analyst',
    dates: 'Sep 2023 – May 2026',
    desc: 'Automated compliance and risk workflows, built SQL-driven reporting pipelines, supported ServiceNow GRC processes, and improved documentation for recurring operational tasks.',
    tags: ['ServiceNow', 'SQL', 'Automation', 'GRC', 'Reporting'],
    span: 'normal',
  },
  {
    id: 'systems',
    label: 'Systems · Backend',
    title: 'Systems Projects',
    subtitle: 'C · Go · Python · TypeScript',
    dates: '2024 – 2026',
    desc: 'Operating system simulation, TCP proxy tooling, Unix shell, distributed key-value store, and backend/full-stack projects across C, Go, Java, Python, and TypeScript.',
    tags: ['C', 'Go', 'Networking', 'OS', 'Distributed Systems'],
    span: 'wide',
  },
]

export const timeline = [
  {
    role: 'AI Systems Engineer — POC',
    org: 'University of Arizona × McGraw Hill',
    dates: 'Jan 2026 – May 2026',
    desc: 'Working on a controlled RAG-based GPT framework for textbook-grounded instructional assistants, with retrieval design, guardrails, source-aware responses, and evaluation criteria.',
  },
  {
    role: 'CS Fellow — AI Evaluation & Prompt Engineering',
    org: 'Handshake AI MOVE Program',
    dates: 'Oct 2025 – Present',
    desc: 'Evaluating AI-generated outputs and refining instruction-following, prompt iteration, and structured feedback workflows for multimodal systems.',
  },
  {
    role: 'AI Solutions Developer — RAG Systems',
    org: 'Andrew Weil Center for Integrative Medicine',
    dates: 'Aug 2025 – Dec 2025',
    desc: 'Built backend services for document ingestion, embeddings, API access, and RAG-supported healthcare content workflows with safety and reliability focus.',
  },
  {
    role: 'GRC Automation Analyst',
    org: 'University of Arizona IT Services',
    dates: 'Sep 2023 – May 2026',
    desc: 'Automating compliance workflows, SQL-driven reporting, ServiceNow GRC processes, and documentation for recurring operational tasks.',
  },
]

export const projects = [
  { title: 'go-distributed-kv', type: 'Systems', stack: 'Go · Distributed Systems', year: 2025, category: 'Systems', github: 'https://github.com/Harsh7115', desc: 'Distributed key-value store with systems-oriented design.' },
  { title: 'unix-shell', type: 'Systems', stack: 'C · Unix · POSIX', year: 2025, category: 'Systems', github: 'https://github.com/Harsh7115', desc: 'Custom Unix shell implementation.' },
  { title: 'OS Simulation', type: 'Systems', stack: 'C · USLOSS', year: 2025, category: 'Systems', github: 'https://github.com/Harsh7115', desc: 'OS simulation covering process, clock, and system-level behavior.' },
  { title: 'Mobile TCP Proxy', type: 'Networking', stack: 'Python · Networking', year: 2025, category: 'Systems', github: 'https://github.com/Harsh7115', desc: 'TCP proxy tooling for packet-level and network behavior analysis.' },
  { title: 'BudgetMasters', type: 'Full-stack', stack: 'JavaScript · SQL · Express', year: 2024, category: 'Full-stack', github: 'https://github.com/Harsh7115', desc: 'Personal finance and budgeting platform.' },
  { title: 'Finance Management App', type: 'Full-stack', stack: 'Java · JavaFX · SQLite', year: 2024, category: 'Full-stack', github: 'https://github.com/Harsh7115', desc: 'Finance tracking application with structured data workflows.' },
  { title: 'JIRA-Inspired PM Tool', type: 'Full-stack', stack: 'Java · OOP · MVC', year: 2024, category: 'Full-stack', github: 'https://github.com/Harsh7115', desc: 'Project management interface inspired by issue-tracking workflows.' },
  { title: 'OneLiner Hackathon', type: 'Full-stack', stack: 'Python · NLP · Reddit API', year: 2024, category: 'Full-stack', github: 'https://github.com/Harsh7115', desc: 'Reddit thread summarizer distilling discussions into single-line insights.' },
]

export const stack = [
  { cat: 'Languages', prompt: 'languages', items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript'] },
  { cat: 'AI / LLM', prompt: 'ai_llm', items: ['RAG', 'LangChain', 'Embeddings', 'FAISS', 'Prompt Engineering', 'LLM Evaluation', 'AWS Bedrock'] },
  { cat: 'Backend / Data', prompt: 'backend', items: ['REST APIs', 'Express', 'Django', 'PostgreSQL', 'SQLite', 'Redis'] },
  { cat: 'Cloud / Tools', prompt: 'cloud', items: ['AWS', 'Docker', 'Jenkins', 'Linux', 'Git', 'ServiceNow', 'Jira', 'Confluence'] },
]

export const about = {
  main: "I like building systems that work under messy real-world constraints — AI tools that cite sources, backend services that stay reliable, and automation that removes repetitive work.",
  beyond: "Outside software, I'm usually training, following geopolitics, or reading about human behavior and complex systems.",
}
