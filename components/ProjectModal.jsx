"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!project) return null;

  const tabs = ["Overview", "How It Works", "Tech Stack"];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex justify-center items-end md:items-center px-4 md:px-0 pt-20 md:pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)"
        }}
      >
        <motion.div
          className="bg-[var(--bg-secondary)] w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-[var(--border-subtle)] relative flex flex-col"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--bg-tertiary)] rounded-full transition-colors z-10"
          >
            ✕
          </button>

          {/* Header */}
          <div className="p-8 md:p-10 pb-6 border-b border-[var(--border-subtle)]">
            <h2 className="font-syne font-extrabold text-3xl md:text-[32px] text-[var(--text-primary)] mb-3 pr-8">
              {project.name}
            </h2>
            <p className="text-[var(--text-secondary)] text-[16px] max-w-2xl mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 text-[12px] font-medium rounded-full bg-[var(--accent-violet)]/10 text-[var(--accent-violet)] border border-[var(--accent-violet)]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex px-8 md:px-10 border-b border-[var(--border-subtle)] pt-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 mr-8 text-[14px] font-medium whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === tab 
                  ? "border-[var(--accent-gold)] text-[var(--accent-gold)]" 
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-10 flex-grow bg-[var(--bg-primary)]/50">
            {activeTab === "Overview" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-[var(--bg-tertiary)] p-6 rounded-xl border border-[var(--border-subtle)]" style={{ borderLeftWidth: "3px", borderLeftColor: "var(--accent-gold)" }}>
                  <h4 className="font-syne font-bold text-[var(--text-primary)] mb-2">The Problem</h4>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                    {project.overview.problem}
                  </p>
                </div>
                <div className="px-1">
                  <h4 className="font-syne font-bold text-[var(--text-primary)] mb-2 text-lg">The Solution</h4>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                    {project.overview.solution}
                  </p>
                </div>
                <div className="px-1">
                  <h4 className="font-syne font-bold text-[var(--accent-gold)] mb-2 text-lg">The Outcome</h4>
                  <p className="text-[var(--text-primary)] font-medium text-[15px] leading-relaxed">
                    {project.overview.outcome}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "How It Works" && (
              <div className="animate-in fade-in duration-500 relative pl-4 md:pl-8">
                {/* Vertical Dotted Line */}
                <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-px border-l-2 border-dashed border-[var(--accent-gold)]/30"></div>

                <div className="space-y-8 relative">
                  {project.works.map((item, idx) => (
                    <div key={idx} className="relative pl-10 md:pl-12">
                      <div className="absolute left-[-23px] md:left-[-15px] top-0 w-8 h-8 rounded-full bg-[var(--bg-secondary)] border-2 border-[var(--accent-gold)] flex items-center justify-center text-[11px] font-bold text-[var(--accent-gold)]">
                        {item.step.replace('Step ', '')}
                      </div>
                      <h4 className="font-syne font-semibold text-lg text-[var(--text-primary)] mb-2 inline-block bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
                        {item.name}
                      </h4>
                      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Tech Stack" && (
              <div className="animate-in fade-in duration-500 overflow-x-auto pb-4">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-[var(--text-tertiary)] font-mono text-xs uppercase tracking-wider">
                      <th className="py-4 px-4 pl-0 font-medium w-1/4">Tool</th>
                      <th className="py-4 px-4 font-medium w-1/4">Purpose</th>
                      <th className="py-4 px-4 pr-0 font-medium w-1/2">Why This Tool</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-[var(--text-secondary)]">
                    {project.techTable.map((tech, idx) => (
                      <tr key={idx} className="border-b border-[var(--border-subtle)]/50 last:border-0 hover:bg-[var(--bg-tertiary)]/50 transition-colors">
                        <td className="py-5 px-4 pl-0 font-semibold text-[var(--text-primary)]">
                          {tech.tool}
                        </td>
                        <td className="py-5 px-4">
                          <span className="inline-block px-2.5 py-1 text-[12px] rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                            {tech.purpose}
                          </span>
                        </td>
                        <td className="py-5 px-4 pr-0 leading-relaxed text-[14px]">
                          {tech.why}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
