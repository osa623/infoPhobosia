import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Code2, Layers, Zap, Gauge, Server, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Development Process & WebGL Architecture | PHOBOSIA",
  description:
    "An engineering deep-dive into how PHOBOSIA was built in ~2.5 months using Next.js, Three.js, Blender 3D, and Python geospatial scripts.",
};

const techStack = [
  {
    category: "Real-time 3D Graphics",
    techs: [
      { name: "Three.js (0.174)", role: "Core WebGL rendering engine, scene graph, PBR shaders, and camera controller" },
      { name: "Draco Geometry Compression", role: "Lossless/near-lossless compression reducing multi-hundred MB GLB meshes to streaming chunks" },
      { name: "GPU Hardware Instancing", role: "Renders 100,000+ rocks and procedural scatter with a single draw call" },
    ]
  },
  {
    category: "Frontend & Web Architecture",
    techs: [
      { name: "Next.js 15 (App Router)", role: "Modular page routing, static site generation, and optimized metadata" },
      { name: "React 19 & TypeScript 5.8", role: "Component state management, strict type checking, and modular HUD overlays" },
      { name: "Tailwind CSS v4", role: "Zero-runtime utility styling system with custom space-dark tokens" },
    ]
  },
  {
    category: "Geospatial & 3D Modeling",
    techs: [
      { name: "Blender 3D", role: "Custom architectural modeling, UV unwrap, PBR material creation, and LOD management" },
      { name: "Python GDAL & Rasterio", role: "Raw NASA PDS elevation clipping, GeoTIFF reprojection, and slope matrix generation" },
      { name: "NumPy (.npz)", role: "High-speed binary storage for 100k rock coordinate matrices and elevation tables" },
    ]
  }
];

const engineeringChallenges = [
  {
    title: "1. Delivering High-End 3D on Modest Hardware (MX350)",
    challenge: "The developer's primary testing rig featured a modest NVIDIA GeForce MX350 GPU with only ~2 GB VRAM. Loading uncompressed 4K textures and high-polygon meshes immediately triggered WebGL context losses.",
    solution: "Implemented aggressive texture atlasing (combining multiple screens and wall panels into unified 2048x2048 sheets), converted heavy geometry to Draco-compressed GLBs, and utilized Three.js InstancedMesh for all repetitive ground debris."
  },
  {
    title: "2. Uneven Terrain Collision & Player Grounding",
    challenge: "Authentic NASA elevation models contain natural ridges, crater lips, and micro-channels that cause standard AABB (axis-aligned bounding box) physics controllers to jitter, float, or clip into the ground.",
    solution: "Engineered a dual-query grounding algorithm: a downward raycast constantly samples exact heightfield surface normals, interpolating vertical camera offset with spring damping to simulate natural walking over rough regolith."
  },
  {
    title: "3. Decoupled Mission State Machine (SOL 1–11)",
    challenge: "Hardcoding mission objectives inside Three.js render loops would lead to spaghetti code and brittle progression bugs.",
    solution: "Architected a declarative JSON-driven mission system (`src/jsons/Missions/sol-*.json`). Each SOL defines strict task trees, prerequisite validations, active screen registries, and completion triggers independently of 3D asset files."
  },
  {
    title: "4. Physical Consoles within a 3D World",
    challenge: "Rendering 20+ dynamic 2D screens inside a 3D scene can drastically inflate draw calls if every monitor is a separate canvas texture.",
    solution: "Implemented a shared emissive shader pipeline where inactive screens use baked low-resolution textures, and active screens mount interactive HTML/WebGL DOM layers only when the player enters the 2.5m interaction sphere."
  }
];

export default function DevelopmentPage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Deep-Dive</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Development & Technology
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            PHOBOSIA was built over approximately two and a half months of dedicated solo development. Discover the rendering optimizations, architectural patterns, and performance considerations.
          </p>
        </div>

        {/* Development Timeline & Milestone Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-space-800 shadow-xl mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
              Development Span
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ~2.5 Months of Intensive Authoring
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              From raw NASA PDS terrain download and Blender module modeling to Three.js first-person physics and the complete SOL 1–11 mission state machine.
            </p>
          </div>
          <div className="flex items-center gap-6 text-center shrink-0">
            <div className="p-4 rounded-2xl bg-space-950 border border-space-800">
              <span className="block text-2xl sm:text-3xl font-black text-mars-400 font-mono">11</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Mission SOLs</span>
            </div>
            <div className="p-4 rounded-2xl bg-space-950 border border-space-800">
              <span className="block text-2xl sm:text-3xl font-black text-cyan-400 font-mono">5+</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Custom Pods</span>
            </div>
            <div className="p-4 rounded-2xl bg-space-950 border border-space-800">
              <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">60</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Target FPS</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="space-y-8 mb-20">
          <div>
            <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
              Verified Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Core Technologies & Tooling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((col, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-space-900/50 border border-space-800/80 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-space-800 text-cyan-300 font-mono">
                    {col.category}
                  </h3>
                  <div className="space-y-4">
                    {col.techs.map((t, tIdx) => (
                      <div key={tIdx} className="space-y-1">
                        <span className="text-xs font-bold text-white block">
                          {t.name}
                        </span>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {t.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges & Solutions */}
        <div className="space-y-8 mb-20">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
              Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Key Engineering Challenges & Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringChallenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-space-900/40 border border-space-800 space-y-4"
              >
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <div className="p-3.5 rounded-xl bg-space-950/80 border border-space-800/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400 block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-space-950/80 border border-space-800/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block mb-1">
                    The Architectural Solution:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Creator Page */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/creator"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Meet Developer Osanda Hirushaka</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Inspect Source Code on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
