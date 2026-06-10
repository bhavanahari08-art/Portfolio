"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";

const STATUS_COLORS: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  Beta: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Open Source": "bg-purple-500/15 text-purple-400 border-purple-500/25",
};

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-2xl border border-white/6 overflow-hidden transition-all duration-300 shine ${
        featured ? "lg:col-span-2" : ""
      } ${hovered ? "border-accent-blue/25 shadow-glow" : ""}`}
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(79,156,249,0.06) 0%, rgba(168,85,247,0.04) 100%)"
          : "rgba(255,255,255,0.02)",
      }}
    >
      <div className={`p-6 ${featured ? "sm:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {featured && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold tracking-wider bg-accent-blue/15 text-accent-blue border border-accent-blue/25 uppercase">
                  Featured
                </span>
              )}
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                  STATUS_COLORS[project.status] ?? "bg-gray-500/15 text-gray-400 border-gray-500/25"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h3
              className={`font-display font-bold text-text-primary group-hover:gradient-text transition-all ${
                featured ? "text-xl sm:text-2xl" : "text-lg"
              }`}
            >
              {project.title}
            </h3>
          </div>

          {project.stats && (
            <div className="flex items-center gap-3 text-text-muted text-xs flex-shrink-0">
              <span className="flex items-center gap-1">
                <FiStar size={11} />
                {project.stats.stars}
              </span>
              <span className="flex items-center gap-1">
                <FiGitBranch size={11} />
                {project.stats.forks}
              </span>
            </div>
          )}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {featured ? project.longDescription : project.description}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-2 text-text-muted border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-white/8 text-sm text-text-secondary hover:text-text-primary hover:border-white/15 transition-all"
          >
            <FiGithub size={14} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-sm text-accent-blue hover:bg-accent-blue/20 transition-all"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects from hackathons, open source, and personal obsessions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
