"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function AnimatedCounter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5 });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

function NodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="nodes" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="4" fill="var(--accent-gold)" />
            <circle cx="150" cy="120" r="3" fill="var(--accent-violet)" />
            <path d="M50 50 L150 120" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
            <path d="M150 120 L250 80" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
            <path d="M-50 80 L50 50" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nodes)" />
        {/* Simple animation logic: slowly drifting rect using framer motion */}
      </svg>
      {/* Fallback pattern for some animation */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'200\' height=\'200\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'4\' fill=\'%23F59E0B\' /%3E%3Ccircle cx=\'150\' cy=\'120\' r=\'3\' fill=\'%237C3AED\' /%3E%3Cpath d=\'M50 50 L150 120\' stroke=\'%231E1E28\' stroke-width=\'1\' fill=\'none\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23p)\' /%3E%3C/svg%3E")' }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 xl:px-24">
      <NodeBackground />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* LEFT COLUMN */}
        <motion.div 
          className="w-full md:w-[60%] flex flex-col space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 w-max px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-[var(--accent-gold)]">Available for Work</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-syne font-extrabold leading-[1.1] text-[var(--text-primary)]">
            I Build Systems<br />That Think.
          </h1>

          <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            AI Automation Engineer crafting intelligent pipelines
            that connect APIs, LLMs, and business workflows —
            turning manual operations into automated outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[var(--accent-gold)] text-black font-semibold hover:brightness-110 transition-all text-center"
            >
              Explore My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[var(--accent-gold)] text-[var(--accent-gold)] font-semibold hover:bg-[var(--accent-gold)] hover:text-black transition-all text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
          className="w-full md:w-[40%] bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
          style={{ borderLeftWidth: '2px', borderLeftColor: 'var(--accent-gold)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#111115] px-4 py-2 border-b border-[var(--border-subtle)] flex items-center space-x-2 relative z-20">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            <span className="text-xs text-[var(--text-tertiary)] ml-2 font-mono">workflow.config.ts</span>
          </div>
          <div 
            className={`p-6 flex-grow relative bg-[var(--bg-tertiary)] transition-all duration-500 cursor-pointer ${isCodeExpanded ? "overflow-y-auto max-h-[80vh] min-h-[530px]" : "cinematic-fade min-h-[320px]"}`}
            onDoubleClick={() => setIsCodeExpanded(!isCodeExpanded)}
            title="Double click to toggle full view"
          >
            <div className={isCodeExpanded ? "relative" : "absolute top-[100%] left-6 right-6 animate-crawl cursor-default"}>
              <div className="font-mono text-[15px] leading-8">
                {[
                  { num: "01", content: <><span className="text-[var(--accent-violet)]">const</span> <span className="text-white">engineer</span> = {"{"}</> },
                  { num: "02", indent: 1, content: <><span className="text-[var(--text-primary)]">name:</span> <span className="text-[var(--accent-gold)]">"Atul Kumar Singh"</span>,</> },
                  { num: "03", indent: 1, content: <><span className="text-[var(--text-primary)]">role:</span> <span className="text-[var(--accent-gold)]">"AI Automation Engineer"</span>,</> },
                  { num: "04", indent: 1, content: <><span className="text-[var(--text-primary)]">stack:</span> {"{"}</> },
                  { num: "05", indent: 2, content: <><span className="text-[var(--text-primary)]">orchestration:</span> [<span className="text-[var(--accent-gold)]">"n8n"</span>, <span className="text-[var(--accent-gold)]">"Webhooks"</span>, <span className="text-[var(--accent-gold)]">"Cron"</span>],</> },
                  { num: "06", indent: 2, content: <><span className="text-[var(--text-primary)]">ai:</span> [<span className="text-[var(--accent-gold)]">"OpenAI"</span>, <span className="text-[var(--accent-gold)]">"Claude"</span>, <span className="text-[var(--accent-gold)]">"LangChain"</span>],</> },
                  { num: "07", indent: 2, content: <><span className="text-[var(--text-primary)]">data:</span> [<span className="text-[var(--accent-gold)]">"Airtable"</span>, <span className="text-[var(--accent-gold)]">"REST APIs"</span>, <span className="text-[var(--accent-gold)]">"JSON"</span>],</> },
                  { num: "08", indent: 2, content: <><span className="text-[var(--text-primary)]">scripting:</span> [<span className="text-[var(--accent-gold)]">"Python"</span>, <span className="text-[var(--accent-gold)]">"OAuth 2.0"</span>]</> },
                  { num: "09", indent: 1, content: <>{"},"}</> },
                  { num: "10", indent: 1, content: <><span className="text-[var(--text-primary)]">systems_built:</span> <span className="text-teal-400">7</span>,</> },
                  { num: "11", indent: 1, content: <><span className="text-[var(--text-primary)]">in_production:</span> <span className="text-[var(--accent-violet)]">true</span>,</> },
                  { num: "12", indent: 1, content: <><span className="text-[var(--text-primary)]">open_to_work:</span> <span className="text-[var(--accent-violet)]">true</span></> },
                  { num: "13", content: <>{"};"}</> },
                  { num: "14", content: <span className="opacity-0">.</span> },
                  { num: "15", content: <><span className="text-white">engineer.</span><span className="text-blue-300">automate();</span></> },
                ].map((line, i) => (
                  <div key={i} className="flex hover:bg-white/5 py-0.5 px-2 -mx-2 rounded transition-colors whitespace-nowrap">
                    <span className="text-[var(--text-tertiary)] opacity-60 w-8 shrink-0 select-none block italic">{line.num}</span>
                    <span style={{ paddingLeft: `${(line.indent || 0) * 1.5}rem` }} className="text-[var(--text-secondary)]">{line.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* STATS BAR */}
      <motion.div 
        className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { num: 7, label: "Workflows Built", suffix: "+" },
          { num: 4, label: "Production Systems", suffix: "" },
          { num: 2, label: "Industries Automated", suffix: "" }
        ].map((stat, idx) => (
          <div key={idx} className={`flex items-center space-x-6 w-full ${idx !== 2 ? 'md:pr-12 md:border-r border-[var(--accent-gold-dim)]/30' : ''}`}>
            <div className="text-5xl font-syne font-extrabold text-[var(--accent-gold)]">
              <AnimatedCounter value={stat.num} />{stat.suffix}
            </div>
            <div className="text-[13px] text-[var(--text-secondary)] font-medium max-w-[100px] uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
