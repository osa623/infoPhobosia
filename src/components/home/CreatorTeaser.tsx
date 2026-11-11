import React from "react";
import Image from "next/image";
import Link from "next/link";
import { creatorData } from "@/data/creatorData";
import { Mail, ArrowRight, UserCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function CreatorTeaser() {
  return (
    <section className="py-24 bg-space-900/40 border-b border-space-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-space-950 border border-space-800/80 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mars-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-space-900 border-2 border-space-700/80 shadow-xl shrink-0">
            <Image
              src={creatorData.portraitImage}
              alt={creatorData.name}
              fill
              className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info Details */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-space-800 text-slate-300 border border-space-700">
              <UserCheck className="w-3.5 h-3.5 text-mars-400" />
              <span>Project Creator & Software Engineer</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {creatorData.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-mars-400 mt-1">
                {creatorData.role} • Sri Lanka 🇱🇰
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Software engineer and 3D technical artist from Sri Lanka who conceived, custom-modeled, and programmed PHOBOSIA over ~2.5 months. Bridging computer graphics, geospatial data analysis, and web engineering.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                href="/creator"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-mars-500 hover:bg-mars-600 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>View Full Profile & Bio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={creatorData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-space-900 hover:bg-space-800 text-slate-300 hover:text-white border border-space-700 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={creatorData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-space-900 hover:bg-space-800 text-slate-300 hover:text-white border border-space-700 text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
