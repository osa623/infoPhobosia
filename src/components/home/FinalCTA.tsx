import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-space-950 to-space-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest text-mars-400 bg-mars-500/10 border border-mars-500/20 mb-4">
          Interactive Planetary Exploration
        </span>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto">
          Step Foot onto the Plains of Elysium Planitia
        </h2>

        <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Discover the complete mission timeline, inspect high-resolution 3D models, and review the technical engineering behind the browser-based simulation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="http://phobosia.sim623.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-mars-500 to-amber-600 hover:from-mars-600 hover:to-amber-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-mars-500/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Open 3D Experience ↗</span>
          </a>

          <Link
            href="/missions"
            className="px-8 py-4 rounded-xl bg-space-800/90 hover:bg-space-700 text-white font-medium text-sm tracking-wide border border-space-600 transition-all hover:border-slate-400"
          >
            Explore SOL 1–11 Missions
          </Link>

          <a
            href="https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-space-900 hover:bg-space-800 text-slate-300 hover:text-white font-medium text-sm border border-space-700 flex items-center gap-2 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </section>
  );
}
