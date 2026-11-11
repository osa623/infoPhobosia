"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, Compass, Layers } from "lucide-react";
import { modelsData, ModelShowcase } from "@/data/modelsData";
import { Modal } from "@/components/ui/Modal";

export function EnvironmentTeaser() {
  const [selectedModel, setSelectedModel] = useState<ModelShowcase | null>(null);

  // Showcase 4 prominent modules
  const previewModels = modelsData.slice(0, 4);

  return (
    <section className="py-24 bg-space-900/40 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-glow mb-2">
              Virtual Architecture
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The 3D Martian Outpost
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Engineered entirely in Blender and rendered in real-time WebGL. Explore the interconnected pressurized modules designed for long-term Martian survival.
            </p>
          </div>
          <Link
            href="/models"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-mars-400 hover:text-mars-300 transition-colors"
          >
            <span>View all 13 models & galleries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewModels.map((model) => (
            <div
              key={model.id}
              className="group relative rounded-2xl overflow-hidden bg-space-950 border border-space-800/80 hover:border-space-600 transition-all shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-space-900">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-space-950/80 backdrop-blur-md border border-space-700/60 text-cyan-300">
                    {model.category}
                  </span>
                </div>

                {/* Quick inspect button */}
                <button
                  type="button"
                  onClick={() => setSelectedModel(model)}
                  className="absolute bottom-4 right-4 p-2 rounded-xl bg-space-900/90 text-white border border-space-700 hover:bg-mars-500 hover:border-mars-400 transition-colors shadow-lg"
                  title="Expand 3D preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-mars-300 transition-colors">
                  {model.name}
                </h3>
                <p className="mt-1 text-xs text-mars-400 font-mono">
                  {model.tagline}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 line-clamp-2">
                  {model.description}
                </p>

                {/* Specs Pill */}
                <div className="mt-4 pt-4 border-t border-space-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{model.triangles}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedModel(model)}
                    className="text-mars-400 hover:text-mars-300 font-medium"
                  >
                    Inspect details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedModel && (
        <Modal
          isOpen={!!selectedModel}
          onClose={() => setSelectedModel(null)}
          title={selectedModel.name}
        >
          <div className="space-y-6">
            <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-space-950 border border-space-800">
              <Image
                src={selectedModel.image}
                alt={selectedModel.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-sm font-mono text-mars-400">{selectedModel.tagline}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{selectedModel.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-space-800 text-xs">
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-mono">Outpost Role:</span>
                <p className="text-slate-200 mt-0.5">{selectedModel.role}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-mono">Dimensions & Budget:</span>
                <p className="text-slate-200 mt-0.5">{selectedModel.dimensions} ({selectedModel.triangles})</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/models"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-mars-500 hover:bg-mars-600 text-white text-xs font-semibold"
              >
                <span>Explore Full 3D Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
