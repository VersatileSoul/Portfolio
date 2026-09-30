export const personalInfo = {
  name: "Ajaykumar Shendage",
  role: "Software Engineer",
  currentRole: "Technical Consultant at NCS Group",
  tagline: "Enterprise applications, system integrations, and full-stack products built to hold up in production",
  email: "ajaykumarshendage@gmail.com",
  phone: "+918390833210",
  location: "Pune, India",
  linkedin: "https://www.linkedin.com/in/ajaykumar-shendage/",
  github: "https://github.com/VersatileSoul",
  website: "https://versatilesoul.co.in",
  // Drives the "Years Experience" stat so it never goes stale.
  careerStart: "2023-12-01",
  resumeLink: "#",
};

export const summary =
  "Software engineer working across enterprise application development and system integration. As a Technical Consultant at NCS Group I deliver enhancements spanning SQL, ETL/EAI pipelines and workflow configuration, and troubleshoot end-to-end integrations across Ivalua, AcuBuy, SAP, REST APIs and SFTP. Before that I spent close to two years at Ivalua building features, defect fixes and performance-oriented database queries in C#, .NET and SQL. Outside of client work I build full-stack systems — most recently DFOMS, a transit operations platform in Java and Spring Boot where the workflow order is enforced by database constraints and every approval lands on a hash-chained audit trail.";

export const skills = [
  {
    category: "Programming",
    icon: "💻",
    items: ["Java", "C#", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend & Web",
    icon: "🌐",
    items: [".NET", "Spring Boot", "REST APIs", "React", "Next.js", "Node.js", "Express.js", "Vite"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["Microsoft SQL Server", "PostgreSQL", "PostGIS", "MongoDB", "Prisma"],
  },
  {
    category: "Integration",
    icon: "🔗",
    items: ["ETL", "EAI", "SAP IDoc/ALEAUD", "XML/JSON", "SFTP", "OAuth"],
  },
  {
    category: "Tools & DevOps",
    icon: "🐳",
    items: ["Git", "Docker", "Maven", "Gradle", "Postman", "Selenium"],
  },
  {
    category: "Engineering Practice",
    icon: "⚙️",
    items: ["SDLC", "Agile", "UAT", "Regression Testing", "Code Review", "Performance Optimization"],
  },
  {
    category: "Enterprise Platforms",
    icon: "🏢",
    items: ["Ivalua", "AcuBuy", "SAP"],
  },
];

export const experiences = [
  {
    title: "Technical Consultant",
    company: "NCS Group",
    location: "Pune, India",
    period: "Apr 2026 – Present",
    type: "full-time",
    points: [
      "Develop and deliver enterprise application enhancements across SQL, ETL/EAI and workflow configuration, analysing audit trails, data flows and business rules to take changes through testing, UAT and production deployment.",
      "Troubleshoot end-to-end integrations spanning Ivalua, AcuBuy, SAP, middleware, REST APIs and SFTP — covering data mapping, interface errors, XML/JSON processing and reprocessing flows.",
      "Designed and built a React-based integration playbook using JavaScript and Vite, documenting multi-entity SAP/Ivalua P2P flows, EAI/ETL components, workflow paths and integration dependencies.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ivalua",
    location: "Pune, India",
    period: "Jul 2024 – Mar 2026",
    type: "full-time",
    points: [
      "Developed and maintained enterprise applications using C#, .NET and SQL, delivering application features, defect fixes and performance-oriented database queries.",
      "Implemented and configured ETL and EAI integrations for data mapping and system-to-system communication, including troubleshooting integration failures and data processing issues.",
      "Worked across the full SDLC — requirements analysis, design, implementation, testing, debugging, release and production deployment.",
      "Collaborated with cross-functional and technical stakeholders to analyse defects, implement enhancements, validate fixes and deliver successful application releases.",
    ],
  },
  {
    title: "Automation Intern",
    company: "Cogito Corp",
    location: "Pune, India",
    period: "Dec 2023 – Mar 2024",
    type: "internship",
    points: [
      "Developed and maintained automated test suites using Java, Selenium and Maven, refactoring test flows to improve coverage and reduce regression execution time.",
      "Debugged automation failures and improved test reliability through reusable test components and structured test execution.",
    ],
  },
];

export const projects = [
  {
    title: "DFOMS",
    emoji: "🚍",
    description:
      "Digital transit management platform for regional bus operations. Implements a five-step pre-departure depot gate — crew check-in, mechanic fitness, fuelling, gate-out — where the order is enforced twice: by domain guards and by a database check constraint that rejects out-of-order rows even if the application is bypassed. Adds geofenced station sign-offs, row-level security so a controller cannot read another depot's data, and an append-only hash-chained audit trail that records refusals alongside approvals.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "PostGIS", "React", "TypeScript", "Docker", "Gradle"],
    highlight: true,
  },
  {
    title: "PrepVault",
    emoji: "📚",
    description:
      "Competitive exam preparation platform for SSC aspirants, covering general awareness, vocabulary, previous-year questions, practice sets and progress analytics. Turborepo monorepo pairing a Next.js web app and admin panel with an Expo mobile client over a shared Prisma schema, plus a content pipeline that bulk-imports full chapters of notes, MCQs and flashcards.",
    tech: ["Next.js", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Expo", "Tailwind CSS", "Turborepo"],
    highlight: true,
  },
  {
    title: "Expense Report",
    emoji: "📊",
    description:
      "Bank statement analyser that parses HDFC and ICICI statement exports through a pluggable parser registry, de-duplicates transactions on import, and resolves UPI narrations into normalised counterparties. Supports manual and bulk tagging, splitting one transaction into several categorised parts, and a split-aware analytics dashboard with Excel export and JSON backup or restore.",
    tech: ["React 19", "Express 5", "MongoDB", "Mongoose", "Recharts", "Tailwind CSS"],
    highlight: true,
  },
];

export const education = {
  degree: "B.Tech in Computer Engineering",
  college: "PCCOE, Pune",
  period: "2020 – 2024",
  cgpa: "8.59",
};

export const certifications = [
  "Ivalua — L1, L2 Technical, L3 SQL, L3 INT (Integration)",
  "Ivalua Platform Skill Badges — Configuration & Technical tracks",
  "JavaScript — Udemy",
  "Docker Foundational — LinkedIn Learning",
  "Shell Scripting — LinkedIn Learning",
];

export const leadership = [
  "Served as NSS Coordinator and Sports Cell Head (CESA) during 3rd year at PCCOE.",
  "Participated in a 7-day NSS Camp — directed a street play with school children, promoting cleanliness and awareness.",
  "Represented college in Cricket, Kabaddi, and Volleyball at SPPU Inter-Collegiate Competitions.",
];
