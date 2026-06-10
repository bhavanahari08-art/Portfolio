"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi";

const SOCIAL_LINKS = [
  { icon: <FiMail size={18} />, label: "Email", href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: <FiGithub size={18} />, label: "GitHub", href: personalInfo.social.github, value: "github.com/bhavanahari08-art" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", href: personalInfo.social.linkedin, value: "linkedin.com/in/bhavana-hariharan-0449a1381" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon 🚀");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have an opportunity, project idea, or just want to chat? My inbox is always open."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-8">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass rounded-2xl p-6 border border-white/6">
              <h3 className="font-display font-semibold text-text-primary mb-1">Get in Touch</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I'm currently open to internships, full-time SWE roles, hackathon collaborations, and
                interesting freelance projects. Response time: usually within 24h.
              </p>
            </div>

            <div className="space-y-3">
              {SOCIAL_LINKS.map(({ icon, label, href, value }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass border border-white/6 hover:border-accent-blue/25 transition-all group"
                >
                  <span className="text-text-muted group-hover:text-accent-blue transition-colors">{icon}</span>
                  <div>
                    <p className="text-xs text-text-muted font-mono">{label}</p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl border border-white/6 p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "name", label: "Name *", placeholder: "John Doe", type: "text" },
                { name: "email", label: "Email *", placeholder: "john@example.com", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wide">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.label.includes("*")}
                    className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship opportunity / Project collaboration / etc."
                className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wide">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity, project, or just say hello…"
                required
                rows={5}
                className="w-full bg-surface-2 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={!sending ? { scale: 1.02, boxShadow: "0 0 24px rgba(79,156,249,0.35)" } : {}}
              whileTap={!sending ? { scale: 0.98 } : {}}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
