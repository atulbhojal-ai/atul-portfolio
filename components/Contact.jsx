"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact.py", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("atulbhojal.ra1@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full relative">
      <div className="font-mono text-[12px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
        // get.in.touch
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN */}
        <motion.div 
          className="lg:w-1/2 flex flex-col pt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-syne font-bold text-4xl md:text-[44px] text-[var(--text-primary)] mb-6 leading-tight">
            Let's Build Something.
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] mb-12">
            Open to full-time roles, freelance projects, and consulting work.
          </p>

          <div className="space-y-4 mb-10 w-full max-w-md">
            <a 
              href="https://wa.me/919953475427?text=Hi%20Atul%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-semibold transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.015 2.015c-5.513 0-10.008 4.492-10.008 10.004 0 1.942.508 3.826 1.474 5.485l-1.481 5.481 5.613-1.47c1.619.897 3.447 1.365 5.395 1.365 5.514 0 10.008-4.495 10.008-10.006 0-5.512-4.494-10.008-10.001-10.008l-.004-.002zm5.725 14.394c-.237.669-1.375 1.288-1.921 1.364-.543.075-1.196.22-3.418-.7-2.671-1.106-4.385-3.821-4.516-3.996-.134-.176-1.077-1.433-1.077-2.735 0-1.303.676-1.944.914-2.196.237-.251.517-.315.69-.315.171 0 .343 0 .495.008.167.008.361-.064.566.425.207.495.706 1.728.77 1.854.062.126.104.275.02.45-.084.175-.126.284-.25.435-.127.15-.264.331-.378.435-.126.126-.26.262-.116.512.145.25 645 1.054 1.378 1.71 1.026.942 1.488 1.168 1.74 1.294.25.125.396.105.542-.062.146-.168.628-.731.796-.983.166-.251.332-.209.562-.126.23.085 1.458.69 1.708.815.25.126.417.189.479.294.061.104.061.606-.176 1.275z"/>
              </svg>
              <span>Message on WhatsApp</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/atulbhojal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#0A66C2] hover:bg-[#08529e] text-white py-4 rounded-xl font-semibold transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 max-w-md w-full p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <div className="font-mono text-[14px] text-[var(--accent-gold)] flex-grow">
              atulbhojal.ra1@gmail.com
            </div>
            <button 
              onClick={copyEmail}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2"
              title="Copy to clipboard"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 predefined 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - FORM */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col space-y-6">
            <div>
              <label htmlFor="name" className="block text-[13px] font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-gold)] rounded-lg p-3 text-[var(--text-primary)] outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[13px] font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-gold)] rounded-lg p-3 text-[var(--text-primary)] outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[13px] font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                rows="4"
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] focus:border-[var(--accent-gold)] rounded-lg p-3 text-[var(--text-primary)] outline-none transition-colors duration-300 resize-y"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full bg-[var(--accent-gold)] hover:brightness-110 text-black font-semibold py-4 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="text-sm text-green-400 font-medium text-center bg-green-500/10 py-3 rounded-lg border border-green-500/20">
                Message sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm text-red-400 font-medium text-center bg-red-500/10 py-3 rounded-lg border border-red-500/20">
                Something went wrong. Please try emailing directly.
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
