"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: "vibe",
    name: "VIBE Marketing Engine",
    tag: "n8n · OpenAI · Airtable",
    description: "End-to-end AI content system — from ideation to multi-platform publishing",
    stack: ["n8n", "OpenAI", "Claude", "Airtable", "Freepik", "Buffer", "LinkedIn API"],
    overview: {
      problem: "Manual content creation was disjointed across platforms with bottlenecks in idea generation and human review cycles.",
      solution: "A dual-stage AI pipeline dynamically tailoring copy for 6 platforms, routing it through an Airtable review dashboard before pushing to structured publishing endpoints.",
      outcome: "Eliminated tool-switching, saving approximately 15 hours per week of manual drafting and cross-posting."
    },
    works: [
      { step: "Step 1", name: "Content Intake Dashboard", desc: "Team enters topic, platform selection, and context into a web form" },
      { step: "Step 2", name: "LLM Copy Generation", desc: "Dual-stage AI pipeline generates platform-specific content (LinkedIn, Instagram, Facebook, X, YouTube, Blog) with different tones and formats" },
      { step: "Step 3", name: "Human Review Cycle", desc: "Email sent with dashboard link; team reviews, edits, approves, or requests revision" },
      { step: "Step 4", name: "Revision Loop", desc: "Rejected content re-enters LLM rewrite cycle; approved content proceeds" },
      { step: "Step 5", name: "Asset Request Dashboard", desc: "Designer selects reference images, uploads assets, adds notes per post" },
      { step: "Step 6", name: "Freepik Image Generation", desc: "AI generates graphics using Seedream model; designer reviews and approves" },
      { step: "Step 7", name: "Manager Final Approval", desc: "Final review, cross-platform repurposing, publish date set" },
      { step: "Step 8", name: "Scheduled Publishing", desc: "Airtable formula triggers publish workflow; posts to each platform automatically" }
    ],
    techTable: [
      { tool: "n8n", purpose: "Orchestration", why: "Complex routing and human-in-the-loop nodes." },
      { tool: "OpenAI + Claude", purpose: "Copy Generation", why: "OpenAI for rigid formatting, Claude for creative nuance." },
      { tool: "Airtable", purpose: "Database/UI", why: "Serves as the internal team dashboard and review system." },
      { tool: "Buffer", purpose: "Publishing", why: "Reliable cross-platform API." }
    ]
  },
  {
    id: "b2b",
    name: "B2B Lead Intelligence Engine",
    tag: "Serper · Firecrawl · GPT-4o",
    description: "3-phase automated prospect research and signal detection system",
    stack: ["n8n", "Serper", "Firecrawl", "Browserless", "Reddit RSS", "GPT-4o-mini", "Airtable"],
    overview: {
      problem: "Prospect research required manual Googling, navigating obscure UI/UX, and spending hours trying to identify intent signals.",
      solution: "An automated intelligence engine that accepts a generic intent query, searches up to 6 SERP layers, visits targets directly via headless browsing, and processes signal detection using LLMs.",
      outcome: "Generated deeply researched prospect files in minutes, entirely sidestepping manual navigation."
    },
    works: [
      { step: "Step 1", name: "Config Setup", desc: "User fills form: entity type, location, research intent; system builds search queries" },
      { step: "Step 2", name: "Multi-Source Scraping", desc: "Serper fires queries (6 URLs each), Firecrawl + Browserless scrape pages, Reddit RSS collects community signals" },
      { step: "Step 3", name: "LLM Summarization", desc: "GPT-4o-mini cleans and extracts intelligent insights from all scraped content; stores in Airtable" },
      { step: "Step 4", name: "Investigator Workflow", desc: "Groups URLs by entity; second LLM identifies which organizations people are discussing" },
      { step: "Step 5", name: "Report Generation", desc: "Structured signal report built per execution; includes all entities found + signals for human review" }
    ],
    techTable: [
      { tool: "Serper", purpose: "Search", why: "Fast and reliable Google Search extraction." },
      { tool: "Firecrawl", purpose: "Deep Scrape", why: "Excellent at converting pages to LLM-ready markdown." },
      { tool: "Browserless", purpose: "Dynamic Render", why: "Accessing pages needing JS execution." },
      { tool: "GPT-4o-mini", purpose: "Extraction", why: "Fast, cheap unstructured-to-structured insight generation." }
    ]
  },
  {
    id: "email",
    name: "Dynamic Email Writer",
    tag: "n8n · OpenAI · Instantly",
    description: "Personalized outreach engine that scrapes LinkedIn to write context-aware emails",
    stack: ["n8n", "Firecrawl", "OpenAI", "Instantly"],
    overview: {
      problem: "Cold emails were generic, leading to poor open and reply rates, while manual personalization was impossibly slow to scale.",
      solution: "A real-time scraper evaluating both specific lead dynamics on LinkedIn and their core team website to craft hyper-personalized outreach sequences natively loaded into Instantly.",
      outcome: "Boosted cold email open rates via direct relevance scaling at zero marginal time cost."
    },
    works: [
      { step: "Step 1", name: "Lead Input", desc: "CSV upload or API trigger provides lead name, company, LinkedIn URL" },
      { step: "Step 2", name: "LinkedIn Scraping", desc: "Firecrawl scrapes lead's personal LinkedIn and company LinkedIn page" },
      { step: "Step 3", name: "Website Scraping", desc: "Company website scraped for product, tone, recent news" },
      { step: "Step 4", name: "Email Generation", desc: "OpenAI generates fully personalized email using all scraped context" },
      { step: "Step 5", name: "Campaign Push", desc: "Email pushed to Instantly for sequence scheduling; report sent on completion" }
    ],
    techTable: [
      { tool: "n8n", purpose: "Integration", why: "Managing wait times and logic branching safely." },
      { tool: "Instantly", purpose: "Email Tool", why: "High volume cold outreach capabilities API." },
      { tool: "Firecrawl", purpose: "Scraper", why: "Bypasses standard blocks efficiently to read basic context." }
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp Lead Qualification Agent",
    tag: "WhatsApp API · OpenAI",
    description: "24/7 AI agent that qualifies inbound leads from ad traffic automatically",
    stack: ["n8n", "WhatsApp Business API", "OpenAI", "Google Sheets"],
    overview: {
      problem: "Inbound traffic generated leads during off-hours, losing intent due to delayed human follow-ups.",
      solution: "A prompt-engineered AI agent listening over WhatsApp Webhooks, engaging instantly, asking core qualifiers, and logging intents structured for direct handoff.",
      outcome: "24/7 response time achieving a zero-latency conversational funnel and pre-sorted lead sheet for the sales team every morning."
    },
    works: [
      { step: "Step 1", name: "Inbound Trigger", desc: "Lead messages agency WhatsApp number (from ad); n8n webhook fires instantly" },
      { step: "Step 2", name: "AI Greeting", desc: "Agent greets lead by name, starts structured qualification conversation" },
      { step: "Step 3", name: "Qualification Flow", desc: "Asks pre-defined questions (budget, timeline, service interest); handles freeform replies" },
      { step: "Step 4", name: "Data Logging", desc: "Full conversation + extracted lead data stored in Google Sheets for sales team" },
      { step: "Step 5", name: "Handoff", desc: "Once qualified, lead flagged for human sales rep follow-up; prompt retraining data also captured" }
    ],
    techTable: [
      { tool: "WhatsApp API", purpose: "Client", why: "Highest penetration and engagement channel." },
      { tool: "OpenAI", purpose: "Conversational Agent", why: "System-prompt controlled chat handling free text." },
      { tool: "Google Sheets", purpose: "CRM", why: "Free, instantly accessible spreadsheet for human teams." }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
      <div className="font-mono text-[12px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
        // selected.work
      </div>
      
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-12">
        Systems in Production
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent-gold-dim)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded border border-[var(--accent-gold-dim)] bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-[11px] font-mono font-medium mb-6">
                {project.tag}
              </div>
              <h3 className="font-syne font-bold text-2xl text-[var(--text-primary)] mb-3">
                {project.name}
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] mb-8">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--accent-violet)]/10 text-[var(--accent-violet)] border border-[var(--accent-violet)]/20">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
              
              <div className="text-[var(--accent-gold)] text-sm font-semibold flex items-center group-hover:underline">
                View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
