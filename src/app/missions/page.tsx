"use client";

import React, { useState } from "react";
import Link from "next/link";
import { missionsData, SolMission } from "@/data/missionsData";
import { Compass, CheckCircle2, ChevronRight, Layers, Monitor, Play, Sparkles, Filter, MapPin } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const categories = ["All Sols", "Orientation & Setup", "Outpost Operations", "Scientific Research", "Field Exploration & Recon", "Hazard Response & Recovery", "Life Support & Ecology", "Mission Handover & Departure"];

export default function MissionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Sols");
  const [activeModalMission, setActiveModalMission] = useState<SolMission | null>(null);

  const filteredMissions = selectedCategory === "All Sols"
    ? missionsData
    : missionsData.filter((m) => m.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Authoritative Expedition Architecture</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            SOL 1–11 Mission Progress
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A comprehensive, day-by-day expedition schedule across eleven Martian SOLs. Sourced directly from the official project mission specification and JSON data files.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
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

        {/* Timeline / Mission List */}
        <div className="space-y-6">
          {filteredMissions.map((mission) => (
            <div
              key={mission.sol}
              className="p-6 sm:p-8 rounded-3xl bg-space-900/50 border border-space-800/80 hover:border-space-600 transition-all hover:bg-space-900/80 shadow-xl group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: SOL Number & Main Info */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-mars-500/20 text-mars-300 border border-mars-500/30">
                      SOL {mission.sol < 10 ? `0${mission.sol}` : mission.sol}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-space-800 border border-space-700">
                      {mission.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-mars-400" />
                      {mission.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-mars-300 transition-colors">
                    {mission.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                    {mission.primaryObjective}
                  </p>

                  {/* Summary Tags */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{mission.tasks.length} Verified Tasks</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{mission.screens.length} Interactive Screens</span>
                    </span>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 self-start lg:self-center shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveModalMission(mission)}
                    className="px-4 py-2.5 rounded-xl bg-space-800 hover:bg-space-700 text-slate-200 hover:text-white border border-space-700 text-xs font-medium transition-colors"
                  >
                    Quick Briefing
                  </button>
                  <Link
                    href={`/missions/${mission.sol}`}
                    className="px-5 py-2.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <span>Full Dossier</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Briefing Modal */}
      {activeModalMission && (
        <Modal
          isOpen={!!activeModalMission}
          onClose={() => setActiveModalMission(null)}
          title={`SOL ${activeModalMission.sol} Briefing — ${activeModalMission.title}`}
        >
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-mars-400">Primary Objective</span>
              <p className="mt-1 text-sm text-slate-200 leading-relaxed font-semibold">
                {activeModalMission.primaryObjective}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-slate-400">Story & Operational Context</span>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                {activeModalMission.storyContext}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-space-800">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">Tasks to Complete:</span>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                  {activeModalMission.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-amber-400">Active Consoles & Screens:</span>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                  {activeModalMission.screens.map((screen, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{screen}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-space-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Location: {activeModalMission.location}
              </span>
              <Link
                href={`/missions/${activeModalMission.sol}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-mars-500 hover:bg-mars-600 text-white text-xs font-semibold"
              >
                <span>Read Full Technical Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
