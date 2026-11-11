import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { scienceData } from "@/data/scienceData";
import { Database, Orbit, Layers, ShieldCheck, Cpu, Code2, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mars Terrain & Scientific Data Foundations | PHOBOSIA",
  description:
    "Explore the NASA HiRISE elevation models, Elysium Planitia coordinates, and programmatic Python terrain pipeline powering PHOBOSIA.",
};

export default function SciencePage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>Empirical Planetary Science & Geospatial Processing</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Mars Terrain & Scientific Data
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            PHOBOSIA is founded on actual NASA/JPL planetary datasets. Discover how raw orbital elevation products are transformed into an interactive 3D Martian terrain through a reproducible Python data pipeline.
          </p>
        </div>

        {/* Section 1: Geographic Region & Coordinates */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-space-900 to-space-850 border border-space-800 mb-20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
                Geographic Grounding
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                {scienceData.region.name}
              </h2>
              <p className="text-sm font-mono text-cyan-300">
                Context: {scienceData.region.context} ({scienceData.region.coordinates})
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Elysium Planitia was chosen for its vast, low-slope volcanic plains, ancient lava flows, and proximity to the NASA InSight seismological landing terrace. The relatively smooth topography provides a scientifically plausible site for a modular surface outpost.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                {scienceData.region.geologicalFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-mars-400 font-bold">›</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-space-950 border border-space-800 space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-space-800 pb-2">
                <span className="text-slate-400">Martian Latitude:</span>
                <span className="text-white font-bold">4.5° N</span>
              </div>
              <div className="flex justify-between border-b border-space-800 pb-2">
                <span className="text-slate-400">Martian Longitude:</span>
                <span className="text-white font-bold">135.9° E</span>
              </div>
              <div className="flex justify-between border-b border-space-800 pb-2">
                <span className="text-slate-400">Elevation Datum:</span>
                <span className="text-mars-400 font-bold">-2,600 m</span>
              </div>
              <div className="flex justify-between border-b border-space-800 pb-2">
                <span className="text-slate-400">Outpost Pad Size:</span>
                <span className="text-cyan-300 font-bold">400 m × 400 m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Playable Horizon:</span>
                <span className="text-emerald-400 font-bold">4.0 km × 4.0 km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: NASA Datasets Utilized */}
        <div className="space-y-6 mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Orbit className="w-6 h-6 text-cyan-400" />
            <span>Verified NASA Planetary Data Sources</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scienceData.datasets.map((ds) => (
              <div
                key={ds.id}
                className="p-6 rounded-2xl bg-space-900/50 border border-space-800/80 hover:border-space-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-space-800 text-cyan-300 border border-space-700">
                    {ds.instrument}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3 mb-2">
                    {ds.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {ds.roleInProject}
                  </p>
                </div>

                <div className="pt-4 border-t border-space-800 space-y-1.5 text-[11px] font-mono text-slate-400">
                  <p><strong className="text-slate-300">Product ID:</strong> {ds.productId}</p>
                  <p><strong className="text-slate-300">Resolution:</strong> {ds.resolution}</p>
                  <p className="text-[10px] text-slate-500 italic mt-2">{ds.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Programmatic Python & Blender Terrain Pipeline */}
        <div className="space-y-8 mb-20">
          <div>
            <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
              Technical Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Scripted Terrain Generation (Not Sculpted by Hand)
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
              The Martian terrain in PHOBOSIA was not manually sculpted with digital clay brushes. Instead, it was synthesized programmatically through reproducible Python scripts that read NASA PDS raster arrays, evaluate slope gradients, and instantiate rock distributions.
            </p>
          </div>

          <div className="space-y-4">
            {scienceData.pipelineSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-space-900/40 border border-space-800 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-space-800 border border-space-700 flex items-center justify-center font-mono font-bold text-cyan-400 shrink-0">
                    0{step.stepNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-800 text-mars-300 border border-space-700">
                        {step.technology}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="md:w-72 p-3 rounded-xl bg-space-950 border border-space-800/80 font-mono text-[11px] space-y-1 shrink-0 text-slate-400">
                  <p><span className="text-slate-500">In:</span> {step.input}</p>
                  <p><span className="text-cyan-400">Out:</span> {step.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Data Provenance & Transparency Principles */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/60 border border-space-800 shadow-xl mb-12">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Scientific Provenance & Transparency Declaration</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {scienceData.transparencyPrinciples.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-space-950 border border-space-800 space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-space-800 text-cyan-300 border border-space-700">
                  {item.badge}
                </span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Nocturnal Atmospheric & Terrain Investigation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-950 via-space-900 to-space-950 border border-cyan-500/30 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-space-800">
              <img
                src="/images/outpost_night_observation.png"
                alt="Martian Terrain Night-Time Investigation"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-cyan-300 bg-space-950/90 px-3 py-1 rounded-lg border border-cyan-500/40">
                Night Observation • Elysium Planitia
              </span>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                Planetary Thermodynamics
              </span>
              <h3 className="text-2xl font-bold text-white">
                Nocturnal Science & Extreme Thermal Gradients
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Mars has an ultra-thin atmosphere (surface pressure ~610 Pa, less than 1% of Earth), ground heat rapidly radiates into space at nightfall. Temperatures in Elysium Planitia plunge from a daytime peak of -15°C down to -100°C before dawn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <span className="text-slate-500 block text-[10px]">Thermal Swing:</span>
                  <span className="text-mars-400 font-bold">ΔT ~85°C per Sol</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <span className="text-slate-500 block text-[10px]">Nocturnal Min:</span>
                  <span className="text-cyan-400 font-bold">-100°C (-148°F)</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                In PHOBOSIA, nocturnal EVA investigations require monitoring cryogenic structural contractions, ground regolith frost behavior, and managing floodlight power grids under severe battery discharge rates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/development"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Review Full Development Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/credits"
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Inspect 3D Model Attribution & Credits →
          </Link>
        </div>
      </div>
    </div>
  );
}
