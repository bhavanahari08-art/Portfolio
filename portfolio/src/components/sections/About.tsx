"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiMail, FiCode, FiTarget } from "react-icons/fi";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="About Me"
          title="The person behind the code"
          subtitle="A quick look at who I am, what drives me, and where I'm headed."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Text columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-white/6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 p-2 rounded-lg bg-accent-blue/10 text-accent-blue flex-shrink-0">
                  <FiCode size={16} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">Who I Am</h3>
                  <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">{personalInfo.bio}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 p-2 rounded-lg bg-accent-purple/10 text-accent-purple flex-shrink-0">
                  <FiTarget size={16} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">Career Goal</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{personalInfo.careerGoal}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/6">
              <div className="flex items-start gap-3">
                <span className="mt-1 p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                  <FiCode size={16} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">Passion</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{personalInfo.passion}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 justify-center">
              <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                <FiMapPin size={13} className="text-accent-blue" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                <FiMail size={13} className="text-accent-blue" />
                {personalInfo.email}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
