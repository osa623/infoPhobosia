import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { interactionsData } from "@/data/interactionsData";
import { Hand, Terminal, Monitor, Navigation, Compass, Layers, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "User Experience & Physical Consoles | PHOBOSIA",
  description:
    "Explore the first-person controls, physical screen interfaces, 'E' key interactions, and simulated outpost systems in PHOBOSIA.",
};

export default function ExperiencePage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Hand className="w-3.5 h-3.5" />
            <span>Interactive Systems Architecture</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            User Experience & Interactions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            PHOBOSIA is an active, tactile simulation. Discover how players navigate pressurized modules, operate physical command screens, cycle airlocks, and control field equipment.
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="relative w-full h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-space-800 shadow-2xl mb-16 bg-space-900">
          <Image
            src="/images/mission_control.png"
            alt="Mission Control Physical Screens"
            fill
            className="object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 max-w-xl bg-space-950/80 backdrop-blur-md p-5 rounded-2xl border border-space-700/60">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
              Press [E] Proximity Interaction
            </span>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
              Every console in Mission Control, Habitat, Engineering, and the Science Lab is interactive. Approaching within 2.5 meters reveals dynamic UI prompts to access operational telemetry.
            </p>
          </div>
        </div>

        {/* Interaction Systems Cards */}
        <div className="space-y-8 mb-20">
          {interactionsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-space-900/50 border border-space-800/80 hover:border-space-600 transition-all shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-space-800 text-cyan-300 border border-space-700">
                      {item.triggerKey}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      📍 {item.primaryLocation}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.systemName}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-white">Mechanics & Underlying System: </strong>
                      {item.mechanism}
                    </p>
                    <p>
                      <strong className="text-white">Player Experience: </strong>
                      {item.userExperience}
                    </p>
                    <p>
                      <strong className="text-white">Mission Relevance: </strong>
                      {item.missionSignificance}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="lg:w-80 p-5 rounded-2xl bg-space-950 border border-space-800/80 shrink-0">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-mars-400 mb-3">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mars-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Models & Missions */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/models"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Inspect 3D Outpost Modules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/missions"
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            See which screens are active in SOL 1–11 →
          </Link>
        </div>
      </div>
    </div>
  );
}
