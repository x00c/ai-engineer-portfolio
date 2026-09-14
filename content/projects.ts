export type Project = {
  slug: string;
  title: string;
  category: "LLM Platform" | "RAG System" | "MLOps" | "Applied AI";
  featured?: boolean;
  impact: string;
  summary: string;
  stack: string[];
  detail: {
    challenge: string;
    architecture: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "full-stack-conversational-ai-platform",
    title: "Full-Stack Conversational AI Platform",
    category: "LLM Platform",
    featured: true,
    impact: "Automated multi-turn engagement with context-aware RAG responses",
    summary:
      "Full-stack conversational AI (Aug 2025 – Oct 2025) using Next.js and Supabase to automate user interactions via third-party messaging APIs.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "RAG", "OpenAI API"],
    detail: {
      challenge:
        "Product teams needed reliable automated conversations with accurate, context-aware replies across external messaging channels.",
      architecture:
        "Built a Next.js + Supabase stack with a RAG conversational engine, real-time sync between PostgreSQL and external data sources, and an admin dashboard for monitoring, human-in-the-loop intervention, and knowledge-base management.",
      result:
        "Delivered end-to-end automation for complex multi-turn dialogues with consistent data for reporting and continuous performance tuning.",
    },
  },
  {
    slug: "legco-insight-bot",
    title: "LegCo Insight Bot",
    category: "RAG System",
    featured: true,
    impact: "Domain-tuned legal Q&A via hybrid RAG on Legislative Council texts",
    summary:
      "AI conversational system (Sep 2025 – Oct 2025) with a RAG pipeline optimized for domain-specific accuracy on legal and policy documents.",
    stack: ["RAG", "Hybrid Search", "pgvector", "Supabase", "OpenAI API"],
    detail: {
      challenge:
        "General-purpose LLMs lacked reliable accuracy on Hong Kong Legislative Council and related legal corpora.",
      architecture:
        "Engineered a RAG pipeline with hybrid search and pgvector on Supabase, a production REST API for the LLM app, and a serverless ingestion pipeline for training data.",
      result:
        "Improved domain-specific response quality and enabled seamless integration into production workflows.",
    },
  },
  {
    slug: "full-stack-erp-wms",
    title: "Full-Stack ERP / WMS Migration",
    category: "Applied AI",
    featured: true,
    impact: "Replaced legacy Odoo with a validated, automation-first warehouse workflow",
    summary:
      "Client ERP modernization (Aug 2025 – Oct 2025): migrated from Odoo to a custom WMS with React, Node.js, TypeScript, PostgreSQL, and Docker.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    detail: {
      challenge:
        "Legacy Odoo workflows caused manual bottlenecks, data-entry errors, and slow order fulfillment for warehouse operations.",
      architecture:
        "Designed an automation-centric flow from order intake to dispatch, a centralized validated data pipeline, and GenAI-assisted spec coding and refactoring during migration.",
      result:
        "Reduced manual processing overhead and improved data integrity and order fulfillment accuracy.",
    },
  },
];
