"use client";

import { motion } from "framer-motion";

export default function About() {
  const statCards = [
    { num: "8+", label: "Months in Production", subLabel: "Building real systems at scale" },
    { num: "12+", label: "APIs Integrated", subLabel: "Across 4 major projects" },
    { num: "3", label: "Countries Reached", subLabel: "India · UAE · US-market tools" }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
      
      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {statCards.map((card, idx) => (
          <motion.div 
            key={idx}
            className="bg-[var(--bg-secondary)] rounded-xl p-6 border border-[var(--border-subtle)]"
            style={{ borderLeftWidth: "2px", borderLeftColor: "var(--accent-gold)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="font-syne font-bold text-4xl text-[var(--accent-gold)] mb-2">
              {card.num}
            </div>
            <div className="text-[13px] text-[var(--text-secondary)] font-semibold uppercase tracking-wide mb-1">
              {card.label}
            </div>
            <div className="text-sm text-[var(--text-tertiary)]">
              {card.subLabel}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TEXT PARAGRAPHS */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-[12px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
          // about.me
        </div>
        
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-8">
          From Content to Code to Systems
        </h2>

        <div className="space-y-6 text-[16px] text-[var(--text-secondary)] leading-[1.8]">
          <p>
            I started as a content writer who got obsessed with how things work behind the scenes. 
            When I discovered workflow automation, I stopped writing about technology and started 
            building with it. That transition wasn't a detour — it's my competitive edge. 
            I think in systems AND in stories.
          </p>
          <p>
            Today I build AI-powered automation pipelines that connect data, LLMs, and business tools 
            into reliable, scalable systems. My background means I understand both the technical architecture 
            and the business outcome it serves — a combination most engineers don't have.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
