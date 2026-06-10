"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { codingProfiles } from "@/data/portfolio";
import { FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";

// Simple SVG icons for platforms without react-icons entries
const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case "github":
      return <FiGithub size={22} />;
    case "linkedin":
      return <FiLinkedin size={22} />;
    case "leetcode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      );
    case "hackerrank":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.116.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.884.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.18-.053-.304-.16-.371a.5.5 0 0 0-.473-.038L7.026 7.553a.257.257 0 0 0-.155.236v8.21c0 .141.115.256.258.256h1.048c.141 0 .256-.115.256-.256v-4.007h4.074v4.007c0 .141.115.256.258.256h1.047c.141 0 .256-.115.256-.256V7.055a.256.256 0 0 0-.256-.256z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
        </svg>
      );
  }
};

export default function CodingProfiles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="profiles" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          eyebrow="Coding Profiles"
          title="Find me online"
          subtitle="Active across all major coding and professional platforms."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {codingProfiles.map((profile, i) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-gradient-to-br ${profile.bg} hover:border-white/14 transition-all cursor-pointer`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center glass border border-white/8 flex-shrink-0"
                style={{ color: profile.color }}
              >
                <PlatformIcon platform={profile.platform} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-text-primary text-base group-hover:text-accent-blue transition-colors">
                  {profile.platform}
                </h3>
                <p className="text-text-muted text-xs font-mono mt-0.5">@{profile.username}</p>
                <p className="text-text-secondary text-xs mt-1">{profile.stats}</p>
              </div>
              <FiExternalLink
                size={14}
                className="text-text-muted group-hover:text-accent-blue transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
