"use client";

import React, { useState } from "react";
import { socialLinks } from "@/data/portfolio";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "prepared">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailSocial = socialLinks.find((s) => s.name === "Email");
  const githubSocial = socialLinks.find((s) => s.name === "GitHub");
  const linkedinSocial = socialLinks.find((s) => s.name === "LinkedIn");

  const emailAddress = "surjomitra72@gmail.com";
  const githubUrl = githubSocial?.url || "https://github.com/surjocode";
  const linkedinUrl = linkedinSocial?.url || "https://www.linkedin.com/in/piel-mitra-1743322ba/";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Client-side validation & direct mailto link creation
    setTimeout(() => {
      setFormStatus("prepared");
    }, 400);
  };

  const handleDirectEmailClient = () => {
    const encodedSubject = encodeURIComponent(formData.subject || "Portfolio Contact Inquiry");
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-surface-card/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-cyan-500/10">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            I am available for remote internship opportunities, open source collaboration, and software engineering inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Verified Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-surface-card/85 border border-slate-200 dark:border-slate-800/90 backdrop-blur-md space-y-6 shadow-md dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span>Contact Channels</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Feel free to reach out via email or connect on LinkedIn and GitHub. I respond promptly to internship and engineering inquiries.
              </p>

              {/* Email Card with Clickable mailto link and Copy button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-surface-200/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all space-y-2 group shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    Direct Email
                  </span>
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-mono px-2 py-0.5 rounded border border-cyan-500/20">
                    Mailto
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-mono text-cyan-700 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200 truncate transition-colors underline-offset-4 hover:underline"
                    title="Click to compose email"
                    aria-label={`Send email to ${emailAddress}`}
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-surface-card dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1 animate-in fade-in">
                    <Check className="w-3 h-3" />
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* GitHub Link Card */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-surface-200/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-surface-100 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
                aria-label="Visit GitHub Profile (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      github.com/surjocode
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  <span className="text-xs font-mono hidden sm:inline">surjocode</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-surface-200/90 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 hover:bg-slate-100 dark:hover:bg-surface-100 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 shadow-sm"
                aria-label="Visit LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      LinkedIn Profile
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      linkedin.com/in/piel-mitra-1743322ba
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  <span className="text-xs font-mono hidden sm:inline">Connect</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Work Availability Badge */}
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 text-xs text-purple-900 dark:text-purple-200 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  <span>Remote Readiness</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Location: Bangladesh (Available for global teams)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Timezone: Flexible hours for international team overlap</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-surface-card/85 border border-slate-200 dark:border-slate-800/90 backdrop-blur-md shadow-md dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Have a question, feedback, or an internship opportunity? Leave your message below.
              </p>

              {formStatus === "prepared" && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-200 text-sm space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <Info className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span>Message Ready to Send</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Your message has been formatted. Click below to open your email client and send it directly to <strong className="text-cyan-700 dark:text-cyan-300">{emailAddress}</strong>:
                  </p>
                  <button
                    type="button"
                    onClick={handleDirectEmailClient}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Send to {emailAddress}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-cyan-500 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Email <span className="text-cyan-500 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Remote Internship Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Message <span className="text-cyan-500 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Piel, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors outline-none resize-none shadow-sm"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-200 shadow-neon-cyan active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === "submitting" ? "Validating..." : "Submit Message"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmailClient}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-surface-card border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-sm cursor-pointer shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    <span>Open Email App</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
