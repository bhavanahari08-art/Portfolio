"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";

const CATEGORIES = [
  { key: "languages", label: "Languages", icon: "< >" },
  { key: "frameworks", label: "Frameworks", icon: "{ }" },
  { key: "tools", label: "DevOps & Tools", icon: "⚙" },
  { key: "aiml", label: "AI / ML", icon: "🧠" },
  { key: "cybersecurity", label: "Security", icon: "🛡" },
  { key: "iot", label: "IoT", icon: "📡" },
  { key: "softSkills", label: "Soft Skills", icon: "✦" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors font-mono">
          {name}
        </span>
        <span className="text-xs text-text-muted font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: delay * 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("languages");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentCat = CATEGORIES.find((c) => c.key === active)!;
  const isSoftSkills = active === "softSkills";
  const items = skills[active] as unknown[];

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          eyebrow="Skills"
          title="What I bring to the table"
          subtitle="A broad technical toolkit built through projects, competitions, and obsessive learning."
        />

        <div ref={ref}>
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat.key
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary glass border border-white/6"
                }`}
              >
                {active === cat.key && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple"
                    transition={{ type: "spring", damping: 28, stiffness: 400 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-xs opacity-70">{cat.icon}</span>
                  {cat.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Skills content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass rounded-2xl border border-white/6 p-6 sm:p-8"
            >
              {isSoftSkills ? (
                <div className="flex flex-wrap gap-3">
                  {(items as string[]).map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2 rounded-xl glass border border-white/8 text-sm text-text-secondary hover:text-text-primary hover:border-accent-blue/30 transition-colors font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  {(items as { name: string; level: number }[]).map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i} />
                  ))}
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/4 flex items-center gap-2">
                <span className="text-xl">{currentCat.icon}</span>
                <span className="text-xs text-text-muted font-mono">
                  {currentCat.label} · {items.length} {isSoftSkills ? "skills" : "technologies"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
