import React from "react";
import Link from "next/link";
import { Compass, Box, Cpu, Eye, Layers, ShieldCheck, ArrowRight } from "lucide-react";

const distinctiveFeatures = [
  {
    icon: <Box className="w-6 h-6 text-mars-400" />,
    title: "Handmade 3D Outpost Architecture",
    description: "Every module—from the multi-deck Habitat and Science Lab to the octagonal Central Hub—was custom-modeled in Blender from scratch specifically for the project.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "Authentic NASA Planetary Data",
    description: "Built upon real NASA HiRISE Digital Terrain Models (DTM) of Elysium Planitia, processed via Python GDAL into optimized, lightweight WebGL heightfields.",
  },
  {
    icon: <Compass className="w-6 h-6 text-amber-400" />,
    title: "Complete SOL 1–11 Mission Arc",
    description: "A coherent 11-day campaign with real mission JSON architecture, task validations, physical console systems, and scientific investigations.",
  },
  {
    icon: <Eye className="w-6 h-6 text-emerald-400" />,
    title: "First-Person Immersion & Physical Screens",
    description: "Walk inside pressurized modules with genuine collision, press 'E' to operate 20+ functional screens, deploy drones, and board surface rovers.",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    title: "Browser-Based 60 FPS WebGL Engine",
    description: "Runs straight in modern web browsers without downloads or plugins, rigorously optimized with Draco compression and GPU instancing for modest hardware.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
    title: "Scientific Integrity & Attribution",
    description: "Clear transparency between empirical NASA elevation data, procedural surface synthesis, and creative storytelling elements.",
  },
];

export function ProjectHighlights() {
  return (
    <section className="py-24 bg-space-950 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-mars-400 mb-2">
            Distinctive Engineering & Design
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            What Sets PHOBOSIA Apart
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            PHOBOSIA is neither a simple concept art gallery nor an oversimplified landing page. It is a fully implemented, browser-based Mars exploration simulation that bridges planetary science with game design.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distinctiveFeatures.map((feat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-space-900/60 border border-space-800/80 hover:border-space-600 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="w-12 h-12 rounded-xl bg-space-800 flex items-center justify-center mb-4 border border-space-700/60 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-glow transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA to About Page */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mars-400 hover:text-mars-300 transition-colors"
          >
            <span>Read full project concept and philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
