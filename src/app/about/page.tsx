import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Sparkles, Orbit, Target, Globe, BookOpen, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About PHOBOSIA — Project Concept & Vision",
  description:
    "Discover the background, objectives, and artistic vision behind PHOBOSIA, an interactive 3D Mars exploration and scientific observation experience.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Orbit className="w-3.5 h-3.5" />
            <span>Project Manifesto & Architecture</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            About PHOBOSIA
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            PHOBOSIA is an independent, browser-based 3D exploration and scientific observation experience powered by authentic planetary elevation data.
          </p>
        </div>

        {/* Hero Editorial Image Feature */}
        <div className="relative w-full h-[400px] sm:h-[520px] rounded-3xl overflow-hidden border border-space-800 shadow-2xl mb-20 bg-space-900">
          <Image
            src="/images/outpost_1.png"
            alt="PHOBOSIA Outpost in Elysium Planitia"
            fill
            priority
            className="object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-2xl bg-space-950/80 backdrop-blur-md p-6 rounded-2xl border border-space-700/60">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              Outpost Location: Elysium Planitia (4.5° N, 135.9° E)
            </p>
            <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              A self-contained research enclave built to study Martian volcanology, mineralogical stratigraphy, and closed-loop bioregenerative life support.
            </p>
          </div>
        </div>

        {/* Section 1: Core Concept & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Mars? Why a Browser Experience?
            </h2>
            <p className="text-xs font-mono text-mars-400 uppercase tracking-wider">
              Accessible Planetary Science for Everyone
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Space exploration games often gravitate toward exaggerated sci-fi tropes: alien shootouts, faster-than-light hyperdrives, or sprawling fantasy space stations. In contrast, <strong className="text-white">PHOBOSIA was founded on scientific grounding and quiet human reality</strong>.
            </p>
            <p>
              Mars is the next frontier of human habitation. Yet, the genuine technical constraints—such as surviving in an atmosphere less than 1% the density of Earth&apos;s, managing tight kilowatt budgets under dust-choked skies, and navigating uneven boulder-strewn basaltic fields—are rarely simulated authentically in an accessible medium.
            </p>
            <p>
              By engineering PHOBOSIA as a zero-install browser application using Three.js and WebGL, anyone with a modern web browser can step into the boots of an astronaut without purchasing high-end gaming consoles or downloading multi-gigabyte client installers.
            </p>
          </div>
        </div>

        {/* Section 2: Fictional Outpost Concept & Scientific Observation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-space-900/60 border border-space-800 mb-20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-mars-500/10 border border-mars-500/30 flex items-center justify-center text-mars-400 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">The Fictional Outpost</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                PHOBOSIA is envisioned as a prototype surface base consisting of five interconnected pressurized pods: Habitat, Mission Control, Science Lab, Engineering, and Airlock. It illustrates how modular architecture could sustain human endurance on Mars.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Scientific Observation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than arbitrary quest markers, daily tasks revolve around authentic scientific methods: conducting rock spectroscopy, measuring atmospheric pressure drops, launching aerial drone sweeps, and balancing hydroponic cultivation chemistry.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Target Audience & Impact</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed for aerospace enthusiasts, STEM students, educators, and gamers who appreciate thoughtful realism, technical depth, and atmospheric environmental storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Two Imagery Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-space-800 bg-space-900">
              <Image
                src="/images/habitat_zone.png"
                alt="Habitat Zone Pod"
                fill
                className="object-cover object-center"
              />
            </div>
            <h4 className="text-base font-bold text-white">Human Factors & Psychological Well-being</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Living quarters engineered to simulate Earth circadian lighting, personal workspace privacy, and nutritional recycling to safeguard astronaut mental health during multi-year expeditions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-space-800 bg-space-900">
              <Image
                src="/images/Science_lab.png"
                alt="Science Lab Cultivation Chamber"
                fill
                className="object-cover object-center"
              />
            </div>
            <h4 className="text-base font-bold text-white">Bioregenerative Ecology & Sample Analysis</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dual closed-loop cultivation pods testing crop transpiration under simulated Martian light recipes alongside spectrometers analyzing volcanic regolith.
            </p>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/missions"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Explore The 11-Day Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/science"
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Review Scientific Data Sources & HiRISE Terrain →
          </Link>
        </div>
      </div>
    </div>
  );
}
