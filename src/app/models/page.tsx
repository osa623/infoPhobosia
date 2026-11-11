"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { modelsData, ModelShowcase } from "@/data/modelsData";
import { Layers, Maximize2, Monitor, Hand, Compass, Filter, ArrowRight, Moon, Sparkles, Radio, Shield, ThermometerSnowflake, Eye } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const categories = ["All Models", "Architecture", "Operations", "Science", "Exterior", "Aviation"];

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Models");
  const [lightboxModel, setLightboxModel] = useState<ModelShowcase | null>(null);

  const filteredModels = selectedCategory === "All Models"
    ? modelsData
    : modelsData.filter((m) => m.category === selectedCategory);

  const nightObservationModel = modelsData.find((m) => m.id === "outpost-night-observation");

  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Handmade 3D Assets & Environments</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            3D Outpost Architecture
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every primary architectural structure, habitat interior, and terrain lighting system in PHOBOSIA was modeled from scratch in Blender specifically for this project. Explore the pressurized pods, command hubs, exterior terrain sectors, and nocturnal exploration systems.
          </p>
        </div>

        {/* FEATURED SECTION: Night-Time Martian Terrain Investigation */}
        <div className="mb-20 rounded-3xl overflow-hidden bg-gradient-to-b from-space-900/90 via-space-900/60 to-space-950 border border-cyan-500/30 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-mars-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center relative z-10">
            {/* Visual Preview Container */}
            <div className="lg:col-span-7">
              <div
                className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border border-space-700/80 group cursor-pointer shadow-2xl"
                onClick={() => nightObservationModel && setLightboxModel(nightObservationModel)}
              >
                <Image
                  src="/images/outpost_night_observation.png"
                  alt="PHOBOSIA — Outpost Night Observation and Terrain Investigation on Mars"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950/90 via-space-950/30 to-transparent" />

                {/* Night Indicator Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-space-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300">
                    <Moon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Nocturnal Planetary Simulation</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-space-950/80 backdrop-blur-md border border-space-700">
                    <span>Elysium Planitia • Night SOL</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300 bg-space-950/80 px-3 py-1 rounded-lg backdrop-blur-sm border border-space-800">
                    Temp: -84°C • PBR Floodlight Array Active
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (nightObservationModel) setLightboxModel(nightObservationModel);
                    }}
                    className="p-2.5 rounded-xl bg-cyan-600/90 text-white hover:bg-cyan-500 transition-colors shadow-lg"
                    title="Enlarge Night Observation render"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Narrative & Scientific Breakdown */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Environmental Spotlight</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Night-Time Investigation on Mars Terrain
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Martian nights in Elysium Planitia plunge temperatures down to -100°C under an intensely dark, hyper-thin carbon-dioxide atmosphere. PHOBOSIA faithfully recreates the technical challenge and scientific necessity of nocturnal surface operations.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-space-950/80 border border-space-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">High-Intensity Outpost Floodlights</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Custom directional lighting shaders cast long, razor-sharp shadows across the volcanic basalt and loose regolith dunes, illuminating EVAs and equipment checks.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-space-950/80 border border-space-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-mars-950/60 border border-mars-800/40 text-mars-400 shrink-0">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">Cryogenic Terrain & Telemetry Sweeps</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Explorers track thermal contraction stress across outpost airlock seals, log nighttime seismic micro-tremors, and gather low-temperature mineral samples.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => nightObservationModel && setLightboxModel(nightObservationModel)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  <span>Inspect Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="http://phobosia.sim623.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white transition-colors underline underline-offset-4 font-medium"
                >
                  Experience in Simulation ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading & Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Full 3D Architecture Gallery</h2>
            <p className="text-xs text-slate-400 mt-0.5">Filter by functional outpost sector or architectural domain</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-mars-500 text-white border-mars-400 shadow-md shadow-mars-500/20"
                    : "bg-space-900 text-slate-300 border-space-800 hover:border-space-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="group rounded-3xl overflow-hidden bg-space-900/50 border border-space-800/80 hover:border-space-600 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Large Reference Image Container */}
                <div
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-space-900 cursor-pointer"
                  onClick={() => setLightboxModel(model)}
                >
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-space-950/80 backdrop-blur-md border border-space-700/60 text-cyan-300">
                      {model.category}
                    </span>
                    {model.id === "outpost-night-observation" && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 flex items-center gap-1">
                        <Moon className="w-3 h-3" />
                        <span>Nocturnal</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxModel(model);
                    }}
                    className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-space-900/90 text-white border border-space-700 hover:bg-mars-500 hover:border-mars-400 transition-colors shadow-lg"
                    title="Enlarge 3D model render"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Model Narrative & Role */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-mars-300 transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs font-mono text-mars-400 mt-1">
                      {model.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-2 text-xs space-y-1.5">
                    <p>
                      <strong className="text-white font-mono text-[11px] uppercase">Outpost Role: </strong>
                      <span className="text-slate-300">{model.role}</span>
                    </p>
                    <p>
                      <strong className="text-white font-mono text-[11px] uppercase">Expedition Relevance: </strong>
                      <span className="text-cyan-300 font-mono text-[11px]">{model.solRelevance}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer with Technical Highlights */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-space-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{model.triangles}</span>
                <button
                  type="button"
                  onClick={() => setLightboxModel(model)}
                  className="text-mars-400 hover:text-mars-300 font-sans font-semibold flex items-center gap-1"
                >
                  <span>Detailed Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on External 3D Models & Link to Credits */}
        <div className="mt-16 p-8 rounded-3xl bg-space-900/60 border border-space-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              3D Asset Credits & External Model Attribution
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              While the outpost architectural pods, night investigation environment, and terrain pipeline are custom-built, selected equipment props (such as the surface drone, terrain rover, and observation chairs) incorporate externally sourced 3D models.
            </p>
          </div>
          <Link
            href="/credits"
            className="px-5 py-3 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-xs tracking-wider uppercase border border-space-700 whitespace-nowrap transition-colors"
          >
            View Asset Attribution Page →
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxModel && (
        <Modal
          isOpen={!!lightboxModel}
          onClose={() => setLightboxModel(null)}
          title={lightboxModel.name}
          maxWidth="max-w-5xl"
        >
          <div className="space-y-6">
            <div className="relative w-full h-80 sm:h-[450px] rounded-2xl overflow-hidden bg-space-950 border border-space-800">
              <Image
                src={lightboxModel.image}
                alt={lightboxModel.name}
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <p className="text-sm font-mono text-mars-400">{lightboxModel.tagline}</p>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">{lightboxModel.description}</p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-space-950 border border-space-800 text-xs font-mono">
              <div>
                <span className="text-slate-400 uppercase text-[10px] block">Architectural Category:</span>
                <span className="text-white font-bold">{lightboxModel.category}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block">Spatial Dimensions:</span>
                <span className="text-cyan-300 font-bold">{lightboxModel.dimensions}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block">Geometric Budget:</span>
                <span className="text-mars-400 font-bold">{lightboxModel.triangles}</span>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="p-4 rounded-xl bg-space-950 border border-space-800">
              <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-2">
                Modeling & Technical Features:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {lightboxModel.technicalHighlights.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screens & Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-space-950 border border-space-800">
                <span className="font-mono text-[11px] uppercase text-amber-400 font-bold block mb-2">
                  Associated Hardware Consoles:
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {lightboxModel.associatedScreens.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400">›</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-space-800">
                <span className="font-mono text-[11px] uppercase text-emerald-400 font-bold block mb-2">
                  In-Game Player Interactions:
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {lightboxModel.inGameInteractions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
