"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { personalInfo, typingStrings } from "@/data/portfolio";
import Image from "next/image";

const SOCIALS = [
  { icon: <FiGithub size={20} />, href: personalInfo.social.github, label: "GitHub" },
  { icon: <FiLinkedin size={20} />, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: <SiLeetcode size={20} />, href: personalInfo.social.leetcode, label: "LeetCode" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Build typing sequence from strings array
  const typingSequence = typingStrings.flatMap((s) => [s, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-0"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left side: text info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          {/* Welcome Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-4">
            <span className="text-purple-500 font-semibold text-lg md:text-xl tracking-wide font-mono">
              Welcome to my space
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight mb-4 text-text-primary"
          >
            Hi, I'm <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div {...fadeUp(0.35)} className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-6 font-body flex items-center justify-center lg:justify-start gap-2">
            <span>I am a </span>
            <TypeAnimation
              sequence={typingSequence as (string | number)[]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#a855f7", fontWeight: 600 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {personalInfo.tagline} Combining technical knowledge with analytical thinking to identify opportunities and develop effective solutions.
          </motion.p>

          {/* Socials */}
          <motion.div {...fadeUp(0.5)} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            {SOCIALS.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass border border-white/10 text-text-secondary hover:text-purple-500 hover:border-purple-500/40 transition-all shadow-sm"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.resumePath}
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-600 text-white font-semibold text-sm tracking-wide shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <FiDownload size={16} />
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass border border-white/10 text-text-primary font-semibold text-sm hover:border-purple-500/30 transition-all flex items-center justify-center gap-2"
            >
              <FiMail size={16} />
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Right side: photo & overlapping stats cards */}
        <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Glowing background under photo */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/30 to-blue-500/30 blur-2xl z-0" />

            {/* Circular Photo Container */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 z-10 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.25)]">
              <Image
                src="/assets/profile.png"
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>


          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors hidden lg:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}