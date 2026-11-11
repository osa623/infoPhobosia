import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { creatorData } from "@/data/creatorData";
import { Mail, ExternalLink, Award, Code2, Layers, Cpu, ShieldAlert, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Creator & Developer Profile — Osanda Hirushaka | PHOBOSIA",
  description:
    "Meet Osanda Hirushaka (Muthukumarana), the software engineer and 3D technical artist from Sri Lanka who conceived, 3D modeled, and engineered PHOBOSIA.",
};

export default function CreatorPage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-space-900 to-space-850 border border-space-800 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-mars-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 relative z-10">
            {/* Portrait Image */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-space-950 border-2 border-space-700 shadow-2xl shrink-0">
              <Image
                src={creatorData.portraitImage}
                alt={creatorData.name}
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Title & Bio Details */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-mars-500/20 text-mars-300 border border-mars-500/30">
                Software Engineer & 3D Technical Artist
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {creatorData.name}
              </h1>

              <p className="text-xs sm:text-sm font-mono text-cyan-300">
                {creatorData.fullName} • {creatorData.discipline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Software Engineer from Sri Lanka 🇱🇰
              </p>

              {/* Verified External Links */}
              <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href={creatorData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-space-800 hover:bg-space-700 text-white text-xs font-semibold border border-space-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub (@osa623)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={creatorData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-space-800 hover:bg-space-700 text-white text-xs font-semibold border border-space-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn (@osanda623)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={`mailto:${creatorData.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-space-800 hover:bg-space-700 text-white text-xs font-semibold border border-space-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{creatorData.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Distinction Notice: Developer vs Fictional Character */}
        <div className="p-6 rounded-2xl bg-space-900/60 border border-amber-500/30 mb-16 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">
              Important Narrative Distinction: Real Developer vs. Fictional Astronaut
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Osanda Hirushaka</strong> is the real-world software engineer and 3D technical artist who created the PHOBOSIA application. He is distinct from <strong>Carl Ashwindu</strong>, the fictional 35-year-old astronaut character stationed inside the simulation. Narrative lore and character backstories do not reflect the developer&apos;s biography.
            </p>
            <div className="pt-2">
              <Link href="/story" className="text-xs font-semibold text-amber-400 hover:underline">
                Read Carl Ashwindu&apos;s Story Dossier →
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Narrative Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
              Background & Drive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Bridging Web Engineering & 3D Planetary Simulation
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
            {creatorData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="space-y-6 mb-20">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Technical Capabilities & Engineering Focus</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creatorData.technicalCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-space-900/50 border border-space-800 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  {item.category}
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {item.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-space-700" />
                      <span className="text-slate-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/40 border border-space-800 mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Key Project Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creatorData.keyAchievements.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-mars-500/10 text-mars-400 border border-mars-500/20 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-xs tracking-wider uppercase border border-space-700 transition-colors"
          >
            <span>Read Astronaut Carl Ashwindu&apos;s Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={creatorData.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-mars-400 hover:text-mars-300 transition-colors"
          >
            View Official Phobosia Repository on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
