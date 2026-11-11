import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { missionsData } from "@/data/missionsData";
import { Compass, CheckCircle2, Monitor, Hand, ArrowLeft, ArrowRight, MapPin, Award, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ sol: string }>;
}

export async function generateStaticParams() {
  return missionsData.map((m) => ({
    sol: m.sol.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sol } = await params;
  const solNum = parseInt(sol, 10);
  const mission = missionsData.find((m) => m.sol === solNum);
  if (!mission) return { title: "Mission Not Found" };

  return {
    title: `SOL ${mission.sol}: ${mission.title} | PHOBOSIA Expedition`,
    description: mission.primaryObjective,
  };
}

export default async function SolDetailPage({ params }: Props) {
  const { sol } = await params;
  const solNum = parseInt(sol, 10);
  const mission = missionsData.find((m) => m.sol === solNum);

  if (!mission) {
    notFound();
  }

  const prevMission = missionsData.find((m) => m.sol === solNum - 1);
  const nextMission = missionsData.find((m) => m.sol === solNum + 1);

  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/missions" className="hover:text-mars-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Missions Overview</span>
          </Link>
          <span>/</span>
          <span className="text-mars-400 font-bold">SOL {mission.sol}</span>
        </div>

        {/* Header Section */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-lg text-sm font-mono font-bold bg-mars-500/20 text-mars-300 border border-mars-500/40">
              SOL {mission.sol < 10 ? `0${mission.sol}` : mission.sol}
            </span>
            <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-space-900 border border-space-800">
              {mission.category}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-mars-400" />
              {mission.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {mission.title}
          </h1>

          {mission.subtitle && (
            <p className="text-lg font-light text-mars-300">
              {mission.subtitle}
            </p>
          )}
        </div>

        {/* Primary Objective Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-space-900 to-space-850 border border-space-700/80 shadow-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-mars-400 font-bold block mb-2">
            Primary Mission Directive
          </span>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-semibold">
            {mission.primaryObjective}
          </p>
        </div>

        {/* Story & Context Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Narrative & Operational Context</span>
          </h2>
          <div className="p-6 rounded-2xl bg-space-900/50 border border-space-800 text-sm text-slate-300 leading-relaxed">
            {mission.storyContext}
          </div>
        </div>

        {/* Two-Column Grid: Tasks & Consoles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Tasks Column */}
          <div className="p-6 rounded-2xl bg-space-900/50 border border-space-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Step-by-Step Task Sequence</span>
            </h3>
            <ul className="space-y-3">
              {mission.tasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-space-800 border border-space-700 flex items-center justify-center font-mono text-[10px] text-cyan-400 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consoles & Physical Screens */}
          <div className="p-6 rounded-2xl bg-space-900/50 border border-space-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-cyan-400" />
              <span>Required Consoles & Physical Screens</span>
            </h3>
            <ul className="space-y-3">
              {mission.screens.map((screen, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="leading-relaxed font-mono">{screen}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactions & Educational Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Player Interactions */}
          <div className="p-6 rounded-2xl bg-space-900/50 border border-space-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Hand className="w-4 h-4 text-amber-400" />
              <span>Explorer Interactions</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {mission.interactions.map((interaction, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400">›</span>
                  <span>{interaction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Output & Learnings */}
          <div className="p-6 rounded-2xl bg-space-900/50 border border-space-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Expected Output & Discoveries</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white block mb-0.5">Mission Output:</strong>
                {mission.expectedOutput}
              </p>
              <p>
                <strong className="text-white block mb-0.5">What the Player Learns:</strong>
                {mission.whatYouLearn}
              </p>
            </div>
          </div>
        </div>

        {/* Prev / Next Mission Pagination */}
        <div className="pt-8 border-t border-space-800 flex items-center justify-between gap-4">
          {prevMission ? (
            <Link
              href={`/missions/${prevMission.sol}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-space-900 hover:bg-space-800 border border-space-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>SOL {prevMission.sol}: {prevMission.title.replace(/^SOL\s*\d+\s*[—–-]\s*/i, "")}</span>
            </Link>
          ) : <div />}

          {nextMission ? (
            <Link
              href={`/missions/${nextMission.sol}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white text-xs font-semibold shadow-md transition-colors"
            >
              <span>SOL {nextMission.sol}: {nextMission.title.replace(/^SOL\s*\d+\s*[—–-]\s*/i, "")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
