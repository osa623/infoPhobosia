import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { externalAssetCredits, customBuiltAssets } from "@/data/assetCredits";
import { Award, ExternalLink, ShieldCheck, Layers, Box, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Asset Credits & External Model Attribution | PHOBOSIA",
  description:
    "Transparency and attribution for custom-built 3D environments and externally sourced models used within the PHOBOSIA Mars exploration experience.",
};

export default function CreditsPage() {
  return (
    <div className="py-16 sm:py-24 bg-space-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-mars-500/10 border border-mars-500/20 text-mars-400 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Ethical Attribution & Transparency</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            3D Asset Credits & Attribution
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            PHOBOSIA combines custom-built 3D architectural modules and environments with selected third-party models to bring the Martian outpost experience to life. This registry fully attributes the original artists and licensing specifications.
          </p>
        </div>

        {/* Section 1: Externally Sourced Assets */}
        <div className="space-y-6 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-space-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                External Model Registry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Third-Party 3D Models
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Attributed under Creative Commons licenses with verified creator credits and direct platform links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalAssetCredits.map((asset) => (
              <div
                key={asset.id}
                className="p-6 rounded-3xl bg-space-900/50 border border-space-800/80 hover:border-space-600 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-space-800 text-cyan-300 border border-space-700">
                      {asset.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-space-950 px-2 py-0.5 rounded border border-space-800">
                      {asset.platform}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {asset.modelName}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-baseline justify-between py-1 border-b border-space-800/60">
                      <span className="text-slate-400 font-mono text-[11px] uppercase">Creator:</span>
                      <span className={asset.creator === "Unavailable right now" ? "text-amber-400/80 italic font-mono" : "text-slate-200 font-medium"}>
                        {asset.creator}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between py-1 border-b border-space-800/60">
                      <span className="text-slate-400 font-mono text-[11px] uppercase">License:</span>
                      {asset.licenseUrl ? (
                        <a
                          href={asset.licenseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline font-mono text-[11px] truncate max-w-[200px]"
                          title={asset.license}
                        >
                          {asset.license}
                        </a>
                      ) : (
                        <span className={asset.license === "Unavailable right now" ? "text-slate-500 italic font-mono text-[11px]" : "text-slate-300 font-mono text-[11px]"}>
                          {asset.license || "Unavailable right now"}
                        </span>
                      )}
                    </div>

                    <div className="py-1 border-b border-space-800/60">
                      <span className="text-slate-400 font-mono text-[11px] uppercase block mb-0.5">Outpost Placement:</span>
                      <span className="text-slate-300 font-mono text-[11px] leading-relaxed block">{asset.inGameLocation}</span>
                    </div>

                    {asset.notes && (
                      <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                        {asset.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-space-800/80 flex items-center justify-between">
                  {asset.sourceUrl ? (
                    <a
                      href={asset.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-mars-400 hover:text-mars-300 transition-colors"
                    >
                      <span>View on Sketchfab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic">
                      Link unavailable right now
                    </span>
                  )}

                  <span className="text-[10px] font-mono text-slate-500">
                    ID: {asset.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Custom-Built Architectural Assets */}
        <div className="space-y-6 mb-20">
          <div className="border-b border-space-800 pb-4">
            <span className="text-xs font-mono uppercase text-mars-400 font-bold tracking-wider">
              Original Creations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Custom-Built PHOBOSIA Assets
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              The following architectural modules were modeled specifically for PHOBOSIA from scratch in Blender 3D by Osanda Hirushaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customBuiltAssets.map((asset) => (
              <div
                key={asset.id}
                className="rounded-3xl overflow-hidden bg-space-900/40 border border-space-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-space-950">
                    <Image
                      src={asset.image}
                      alt={asset.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-mars-500/80 text-white">
                      Custom Built
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white">
                      {asset.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {asset.module} • {asset.software}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-[11px] font-mono text-slate-400 border-t border-space-800/60 mt-3 flex items-center justify-between">
                  <span>Author: {asset.author}</span>
                  <Link href="/models" className="text-mars-400 hover:underline">
                    View in 3D Gallery →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Attribution Integrity Declaration */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/60 border border-space-800 flex items-start gap-4 shadow-xl">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">
              Commitment to Ethical 3D Attribution
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
              PHOBOSIA strictly upholds intellectual property integrity. Externally sourced models are never claimed as original works regardless of modifications, retexturing, or scene integration. Creators and license sources are permanently acknowledged in the project codebase and public documentation.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-space-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/models"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mars-500 hover:bg-mars-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Explore 3D Models Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/science"
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Review Scientific Data Sources & Citations →
          </Link>
        </div>
      </div>
    </div>
  );
}
