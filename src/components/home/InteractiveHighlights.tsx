import React from "react";
import Link from "next/link";
import { interactionsData } from "@/data/interactionsData";
import { Terminal, Monitor, Navigation, Play, Radio, ArrowRight } from "lucide-react";

export function InteractiveHighlights() {
  const highlights = interactionsData.slice(0, 4);

  return (
    <section className="py-24 bg-space-900/40 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-mars-400 mb-2">
              Tactile Exploration
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Physical Interaction Systems
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              PHOBOSIA eschews passive cutscenes. Players navigate the base in true first-person, trigger pneumatic airlocks, and operate hardware consoles.
            </p>
          </div>
          <Link
            href="/experience"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Learn all control mechanisms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-space-950 border border-space-800/80 hover:border-space-600 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-space-800 text-cyan-300 border border-space-700">
                  {item.triggerKey}
                </span>
                <h3 className="text-base font-bold text-white mt-4 mb-2">
                  {item.systemName}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.userExperience}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-space-800 text-[11px] font-mono text-slate-400">
                <span>📍 {item.primaryLocation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
