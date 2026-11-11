import React from "react";
import Link from "next/link";
import { scienceData } from "@/data/scienceData";
import { Database, Compass, Orbit, ArrowRight, ShieldCheck } from "lucide-react";

export function ScientificPurposeTeaser() {
  return (
    <section className="py-24 bg-space-950 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/40 border border-cyan-800/50 text-cyan-400">
              <Database className="w-3.5 h-3.5" />
              <span>Planetary Science Foundations</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Grounded in NASA HiRISE & MOLA Topography
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rather than generic procedural mountains, PHOBOSIA uses genuine NASA Digital Terrain Models (DTM) derived from the High Resolution Imaging Science Experiment (HiRISE) onboard the Mars Reconnaissance Orbiter.
            </p>

            <div className="space-y-3 pt-2">
              {scienceData.transparencyPrinciples.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-space-900/60 border border-space-800/60">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-space-800 text-cyan-300 border border-space-700 whitespace-nowrap mt-0.5">
                    {item.badge}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-sm font-semibold text-mars-400 hover:text-mars-300 transition-colors"
              >
                <span>Read scientific datasets, coordinates & Python pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Data Snapshot */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-b from-space-900 to-space-950 border border-space-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <Orbit className="w-5 h-5 text-cyan-400" />
              <span>Target Region Coordinates</span>
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-space-950 border border-space-800">
                <span className="text-slate-400 block text-[10px]">Martian Region:</span>
                <span className="text-white font-bold text-sm">{scienceData.region.name}</span>
                <span className="text-slate-400 block mt-0.5 text-[11px]">{scienceData.region.context}</span>
              </div>

              <div className="p-3 rounded-lg bg-space-950 border border-space-800">
                <span className="text-slate-400 block text-[10px]">Reference Coordinates:</span>
                <span className="text-mars-400 font-bold text-sm">{scienceData.region.coordinates}</span>
                <span className="text-slate-400 block mt-0.5 text-[11px]">Elevation Datum: {scienceData.region.elevationBaseline}</span>
              </div>

              <div className="p-3 rounded-lg bg-space-950 border border-space-800">
                <span className="text-slate-400 block text-[10px]">HiRISE Source Product:</span>
                <span className="text-cyan-300 font-bold text-xs truncate block">DTEEC_017983_1865 / ESP_017983_1865</span>
                <span className="text-slate-400 block mt-0.5 text-[11px]">1.0 m / px elevation grid resolution</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-space-800/80 text-[11px] text-slate-400">
              <span>Scientific attribution preserved under NASA Open Data Policy.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
