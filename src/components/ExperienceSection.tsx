import React from "react";
import { Timeline } from "@/components/ui/timeline";

const jobs = [
  {
    company: "Dovetail",
    role: "Software Developer",
    location: "Zirakpur, Punjab",
    period: "Dec 2023 – Present",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RAG",
      "Vector Embeddings",
      "WebSockets",
    ],
    bullets: [
      "Building and optimizing AI Agent Chatbots using Retrieval-Augmented Generation (RAG) architecture",
      "Designing secure and optimized REST APIs for real-time user interactions",
      "Integrating external APIs with proper authentication and structured error handling",
      "Improving system performance for intelligent and context-aware AI responses",
    ],
    problem:
      "Slow response time and high latency caused by large document context in AI chatbot workflows",
    solution:
      "Implemented document chunking, vector embeddings, and similarity-based retrieval to reduce processing overhead",
    impact:
      "Significantly improved response speed, scalability, and reliability of the chatbot system",
  },

  {
    company: "Promatics Technology",
    role: "Software Developer",
    location: "Ludhiana, Punjab",
    period: "Nov 2022 – 2023",
    techStack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
    ],
    bullets: [
      "Developed and deployed production-ready backend applications using Node.js and Express.js",
      "Built scalable REST APIs with structured middleware and centralized error handling",
      "Worked on multiple project modules under tight deadlines while maintaining code quality",
      "Received positive client feedback for reliable delivery and backend stability",
    ],
    problem:
      "Ensuring code quality and system stability while delivering features at a fast pace",
    solution:
      "Adopted modular backend architecture, reusable middleware patterns, and consistent coding standards",
    impact:
      "Improved maintainability, reduced bugs, and enabled smoother feature delivery",
  },
];


const timelineData = jobs.map((job) => ({
  title: job.company,
  content: (
    <div className="space-y-4">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">[ROLE]</span> {job.role} · {job.period}
      </p>
      <ul className="space-y-2">
        {job.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary mt-0.5">›</span>
            {b}
          </li>
        ))}
      </ul>
      {job.problem && (
        <div className="rounded border border-border bg-card p-3 font-mono text-xs">
          <p>
            <span className="font-bold text-destructive">[ERR]</span>{" "}
            <span className="text-muted-foreground">{job.problem}</span>
          </p>
          <p className="mt-1">
            <span className="font-bold text-primary">[FIX]</span>{" "}
            <span className="text-muted-foreground">{job.solution}</span>
          </p>
        </div>
      )}
    </div>
  ),
}));

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="mx-auto max-w-6xl px-6">
      <p className="mb-2 font-mono text-xs text-muted-foreground">// section::experience</p>
      <h3 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
        <span className="text-primary">&gt;</span> git log --oneline
      </h3>
      <p className="mb-8 font-mono text-sm text-muted-foreground">
        // A timeline of commits to my professional career
      </p>
      <Timeline data={timelineData} />
    </div>
  </section>
);

export default ExperienceSection;
