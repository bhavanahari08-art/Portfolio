"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications } from "@/data/portfolio";
import { FiExternalLink, FiAward } from "react-icons/fi";

function CertCard({ cert, index }: { cert: (typeof certifications)[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group block rounded-2xl p-5 border border-white/6 bg-gradient-to-br ${cert.color} hover:border-white/12 transition-all cursor-pointer`}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 glass border border-white/8"
        >
          {cert.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-text-primary text-sm leading-tight group-hover:text-accent-blue transition-colors">
              {cert.title}
            </h3>
            <FiExternalLink
              size={13}
              className="text-text-muted group-hover:text-accent-blue transition-colors flex-shrink-0 mt-0.5"
            />
          </div>
          <p className="text-text-muted text-xs mt-1">{cert.issuer}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[11px] font-mono text-text-muted">{cert.date}</span>
            <span className="text-[10px] font-mono text-text-muted bg-surface/60 px-2 py-0.5 rounded border border-white/5">
              {cert.credentialId}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials & achievements"
          subtitle="Industry-recognized certifications that validate my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-2 text-sm text-text-muted glass rounded-xl px-5 py-3 border border-white/6">
            <FiAward size={14} className="text-accent-purple" />
            All certifications are currently valid and verifiable
          </div>
        </motion.div>
      </div>
    </section>
  );
}
