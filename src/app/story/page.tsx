import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { storyData } from "@/data/storyData";
import { BookOpen, User, Radio, Compass, ShieldAlert, ArrowRight, Flag } from "lucide-react";

export const metadata: Metadata = {
  title: "Astronaut Carl Ashwindu — Narrative Lore & Dossier | PHOBOSIA",
  description:
    "Explore the fictional backstory of astronaut Carl Ashwindu (35, Sri Lankan heritage / American citizen), the solitary observer of PHOBOSIA Outpost.",
};

export default function StoryPage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Fictional Expedition Lore & Narrative</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Astronaut Carl Ashwindu
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            The solitary human observer stationed on the rust-red plains of Elysium Planitia. Discover the backstory, heritage, and expedition departure of PHOBOSIA&apos;s protagonist.
          </p>
        </div>

        {/* Character Dossier Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-900 to-space-850 border border-space-800 shadow-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-space-800 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
                Expedition Personnel File #01
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                {storyData.characterName}
              </h2>
              <p className="text-xs font-mono text-cyan-300 mt-1">
                Role: {storyData.role} ({storyData.callsign})
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-space-950 border border-space-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Age</span>
                <span className="text-lg font-mono font-bold text-white">{storyData.age}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-space-950 border border-space-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Gender</span>
                <span className="text-lg font-mono font-bold text-white">{storyData.gender}</span>
              </div>
            </div>
          </div>

          {/* Heritage & Citizenship Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-space-950/80 border border-space-800 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <span>🇱🇰</span>
                <span>Heritage & Cultural Background</span>
              </span>
              <p className="text-slate-300 leading-relaxed">
                {storyData.heritageNotes}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-space-950/80 border border-space-800 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-cyan-400 flex items-center gap-2">
                <Flag className="w-3.5 h-3.5" />
                <span>Citizenship & Education Path</span>
              </span>
              <p className="text-slate-300 leading-relaxed">
                {storyData.educationalPath}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Biography Sections */}
        <div className="space-y-6 mb-16">
          <h3 className="text-2xl font-bold text-white">
            Character Role & Expedition Isolation
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {storyData.characterBio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* The SOL 11 Departure & Selina's Incoming Message */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/60 border border-space-800 shadow-xl mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The SOL 11 Departure & Incoming Transmission
            </h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {storyData.departureNarrative}
          </p>

          <div className="p-5 rounded-2xl bg-space-950 border border-space-800 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-space-800 pb-2">
              <span className="text-slate-400">Incoming Sender:</span>
              <span className="text-cyan-300 font-bold">{storyData.incomingTransmission.sender} (Astronaut)</span>
            </div>
            <div className="flex items-center justify-between border-b border-space-800 pb-2">
              <span className="text-slate-400">Route:</span>
              <span className="text-slate-200">{storyData.incomingTransmission.origin} → {storyData.incomingTransmission.destination}</span>
            </div>
            <div className="pt-2 text-slate-400">
              <p className="text-slate-300">{storyData.incomingTransmission.summary}</p>
            </div>
          </div>
        </div>

        {/* Timeline Verification Disclaimer */}
        <div className="p-5 rounded-2xl bg-space-900/40 border border-space-800/80 mb-16 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {storyData.timelineVerificationNote}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/missions/11"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Review SOL 11 Mission Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/creator"
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Meet Real Developer Osanda Hirushaka →
          </Link>
        </div>
      </div>
    </div>
  );
}
