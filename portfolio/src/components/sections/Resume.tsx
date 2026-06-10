"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" className="section-padding">
      <div className="container-max max-w-3xl">
        <SectionHeader
          eyebrow="Resume"
          title="My resume"
          subtitle="View or download my full resume to learn more about my experience and skills."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl border border-white/8 overflow-hidden"
        >
          {/* Preview area */}
          <div
            className="relative h-72 sm:h-96 flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,156,249,0.06) 0%, rgba(168,85,247,0.06) 100%)",
            }}
          >
            {/* Decorative PDF mockup */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong rounded-2xl border border-white/10 p-8 shadow-glass"
              >
                {/* PDF header mockup */}
                <div className="w-52 sm:w-64 space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                      <FiFileText size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-text-primary/20 rounded" />
                      <div className="h-2 w-16 bg-text-muted/30 rounded mt-1.5" />
                    </div>
                  </div>
                  {[80, 65, 90, 55, 72, 45].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-text-secondary/10"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    {[50, 60, 45, 55].map((w, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-full bg-text-muted/15"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-3 px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
              >
                PDF ready
              </motion.div>
            </div>

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(79,156,249,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,156,249,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* CTA row */}
          <div className="px-6 py-5 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-semibold text-text-primary">
                {personalInfo.name} — Resume
              </p>
              <p className="text-text-muted text-sm mt-0.5">
                {personalInfo.title} · {personalInfo.location}
              </p>
            </div>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
              >
                <FiEye size={14} />
                View
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(79,156,249,0.3)" }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.resumePath}
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium shadow-glow transition-shadow"
              >
                <FiDownload size={14} />
                Download PDF
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted text-xs mt-4 font-mono"
        >
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </motion.p>
      </div>
    </section>
  );
}
