"use client";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-lg gradient-text">
              {personalInfo.name}
            </p>
            <p className="text-text-muted text-sm mt-1">{personalInfo.title}</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={17} />, href: personalInfo.social.github, label: "GitHub" },
              { icon: <FiLinkedin size={17} />, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: <FiTwitter size={17} />, href: personalInfo.social.twitter, label: "Twitter" },
              { icon: <FiMail size={17} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-accent-blue transition-colors hover:bg-accent-blue/8"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-text-muted text-xs text-center sm:text-right">
            © {year} {personalInfo.name}. Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
