"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Orchestration",
    icon: "⚙️",
    skills: [
      { name: "n8n (Advanced)", desc: "Deep expertise in custom nodes and core logic." },
      { name: "Webhook Triggers", desc: "Setting up robust inbound webhooks." },
      { name: "Multi-step Pipelines", desc: "Chaining massive execution threads securely." },
      { name: "Conditional Routing", desc: "If/Else splits based on LLM outputs or API responses." },
      { name: "Error Handling", desc: "Try/catch loops within visual nodes." },
      { name: "Scheduled Workflows", desc: "Cron-based execution patterns." },
      { name: "Sub-workflows", desc: "Reusing logic modularly via sub-workflow nodes." }
    ]
  },
  {
    title: "AI & LLMs",
    icon: "🧠",
    skills: [
      { name: "OpenAI API", desc: "Structured outputs and functional calling." },
      { name: "Claude API", desc: "Handling massive context windows accurately." },
      { name: "Prompt Engineering", desc: "Systematic instruction design limiting hallucination." },
      { name: "LLM Chaining", desc: "Self-correcting pipelines using multiple prompts." },
      { name: "Dual-stage Pipelines", desc: "Routing creative tasks separately from analytic logic." },
      { name: "AI Agent Design", desc: "Stateful agents referencing memory loops." },
      { name: "LangChain", desc: "Framework for building complex orchestration layers.", building: true },
      { name: "RAG Architecture", desc: "Retrieval augmented generation over proprietary docs.", building: true }
    ]
  },
  {
    title: "APIs & Data",
    icon: "🔌",
    skills: [
      { name: "REST APIs", desc: "Interfacing, polling, and authenticating dynamically." },
      { name: "OAuth 2.0", desc: "Handling refresh token structures gracefully." },
      { name: "JSON Transformation", desc: "Splicing, merging, and cleaning payload data." },
      { name: "Airtable (Advanced)", desc: "Rollups, formulas, and API syncing capabilities." },
      { name: "Google Sheets", desc: "Simple database structures for fast team read-access." },
      { name: "Python (Automation Scripts)", desc: "Building local/lambdas for granular task execution.", building: true }
    ]
  },
  {
    title: "Tools & Integrations",
    icon: "🧰",
    skills: [
      { name: "Firecrawl", desc: "Deep document scraping capability." },
      { name: "Serper", desc: "Headless Google search result extraction." },
      { name: "Tavily", desc: "Optimized LLM search." },
      { name: "Apollo", desc: "B2B intelligence platform integration." },
      { name: "Instantly", desc: "Cold email sequencing at scale." },
      { name: "SalesHandy", desc: "Outreach scheduling and inbox warmup." },
      { name: "Zoho CRM", desc: "Injecting mapped JSON into standard records." },
      { name: "Freepik Seedream", desc: "Prompt-driven graphic generation." },
      { name: "Buffer", desc: "Multi-platform scheduled social pushes." },
      { name: "Reddit RSS", desc: "Tracking thread developments asynchronously." },
      { name: "SharePoint", desc: "Enterprise intranet storage integration." },
      { name: "WhatsApp Business API", desc: "Bot integration natively avoiding third-party apps." },
      { name: "Browserless", desc: "Renting chrome instances for JS-heavy scrapes." }
    ]
  },
  {
    title: "Ecosystem Awareness",
    icon: "🌍",
    skills: [
      { name: "Vercel", desc: "Deploying Edge/Serverless environments." },
      { name: "Vector Databases", desc: "Pinecone, Qdrant conceptual mapping." },
      { name: "Agent Orchestration", desc: "Multi-agent frameworks." },
      { name: "MCP Protocol", desc: "Model Context Protocol for localized tooling." },
      { name: "RAG Pipelines", desc: "Connecting vector data back into prompt engineering." }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
      <div className="font-mono text-[12px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
        // technical.stack
      </div>
      
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-12">
        My Toolkit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className={`bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-6 md:p-8 ${idx === categories.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xl">{category.icon}</span>
              <h3 className="font-syne font-bold text-lg text-[var(--accent-gold)]">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group relative">
                  <div className="cursor-default bg-[var(--bg-tertiary)] border border-[var(--border-accent)] rounded-full px-4 py-1.5 text-[13px] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] flex items-center shadow-sm">
                    {skill.building && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-violet)] animate-pulse mr-2"></span>
                    )}
                    {skill.name}
                  </div>
                  
                  {/* CSS Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] z-20 w-max max-w-[200px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-[11px] px-3 py-2 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl pointer-events-none text-center">
                    {skill.desc}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[var(--bg-primary)]"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
