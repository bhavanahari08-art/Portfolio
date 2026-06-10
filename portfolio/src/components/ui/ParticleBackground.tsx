"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 55, density: { enable: true } },
          color: { value: ["#4f9cf9", "#a855f7", "#22d3ee"] },
          opacity: { value: { min: 0.05, max: 0.18 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 140,
            color: "#4f9cf9",
            opacity: 0.07,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.45,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 180, links: { opacity: 0.15 } } },
        },
      } as any}
    />
  );
}
