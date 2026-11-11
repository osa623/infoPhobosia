import React from "react";
import Link from "next/link";
import { missionsData } from "@/data/missionsData";
import { Compass, CheckCircle2, ArrowRight, ShieldAlert, Cpu, Wind, Rocket } from "lucide-react";

export function MissionTimelineTeaser() {
  // Select key milestone SOLs: SOL 1 (Orientation), SOL 3 (Target Selection), SOL 5 (Drone Flight), SOL 7 (Dust Storm), SOL 11 (Departure)
  const milestoneSols = [1, 3, 5, 7, 11].map(
    (num) => missionsData.find((m) => m.sol === num)!
  );

  return (
    <section className="py-24 bg-space-950 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-mars-dust mb-2">
            11-Day Expedition Campaign
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The SOL 1–11 Journey
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Every SOL features distinct operational goals, interactive consoles, and scientific activities. From initial habitat pressurization to drone surveys and interplanetary handover.
          </p>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {milestoneSols.map((mission, idx) => (
            <div
              key={mission.sol}
              className="relative p-5 rounded-2xl bg-space-900/50 border border-space-800/80 hover:border-mars-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-mars-500/10 text-mars-400 border border-mars-500/20">
                    SOL {mission.sol < 10 ? `0${mission.sol}` : mission.sol}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Day {mission.sol}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-mars-300 transition-colors line-clamp-1">
                  {mission.title.replace(/^SOL\s*\d+\s*[—–-]\s*/i, "")}
                </h3>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {mission.primaryObjective}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-space-800/80">
                <span className="text-[11px] font-mono text-cyan-400 block truncate">
                  📍 {mission.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Link to Full Missions Page */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-space-700/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-mars-500/10 border border-mars-500/30 flex items-center justify-center text-mars-400">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Detailed Breakdown of all 11 Mission SOLs
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Inspect objectives, step-by-step task trees, screen inventories, and scientific outcomes.
              </p>
            </div>
          </div>
          <Link
            href="/missions"
            className="px-6 py-3 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>View Full SOL 1–11 Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
