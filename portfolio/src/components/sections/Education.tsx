"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/data/portfolio";
import { FiCalendar, FiAward, FiBookOpen } from "react-icons/fi";

function EducationCard({ edu, index }: { edu: (typeof education)[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < education.length - 1 && (
        <div className="absolute left-[23px] top-14 bottom-0 w-px bg-gradient-to-b from-accent-blue/30 to-transparent" />
      )}

      <div className="flex gap-5">
        {/* Timeline dot */}
        <div className="flex-shrink-0 mt-1">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
              edu.current
                ? "bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border-accent-blue/40"
                : "glass border-white/8"
            }`}
          >
            <FiBookOpen size={18} className={edu.current ? "text-accent-blue" : "text-text-muted"} />
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 glass rounded-2xl border border-white/6 p-6 mb-5 hover:border-white/12 transition-all">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-display font-bold text-text-primary text-lg">{edu.degree}</h3>
              <p className="text-accent-blue text-sm font-medium mt-0.5">{edu.institution}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                <FiCalendar size={11} />
                {edu.period}
              </span>
              {edu.current && (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-mono">
                  Current
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="flex items-center gap-1.5 text-sm text-text-secondary">
              <FiAward size={13} className="text-accent-purple" />
              GPA: <strong className="text-text-primary font-mono">{edu.gpa}</strong>
            </span>
            <span className="text-text-muted text-xs">·</span>
            <span className="text-xs text-text-muted">{edu.honors}</span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">{edu.description}</p>

          <div>
            <p className="text-[11px] text-text-muted font-mono uppercase tracking-widest mb-2">Key Courses</p>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-2 text-text-muted border border-white/5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max max-w-3xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic journey"
          subtitle="The institutions that shaped my technical foundation and critical thinking."
        />

        <div>
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
