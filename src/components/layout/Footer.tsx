import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Mail, ExternalLink, ShieldAlert } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-space-800 bg-space-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Synopsis */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <Image
                src="/images/PHOBOSIA_Martian_Modern_Logo_4K.png"
                alt="PHOBOSIA"
                width={140}
                height={32}
                className="h-7 w-auto object-contain filter drop-shadow-sm"
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              An interactive 3D Mars exploration experience developed in Next.js, Three.js, and Blender. Showcasing authentic planetary science data, custom-modeled outpost architecture, and an 11-day mission progression.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700/60 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/osanda623"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700/60 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:osandam23@gmail.com"
                className="p-2 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700/60 text-slate-300 hover:text-white transition-colors"
                aria-label="Contact Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Exploration & Systems */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Exploration & Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="http://phobosia.sim623.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mars-400 hover:text-mars-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Open 3D Experience (Live)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/missions" className="hover:text-mars-400 transition-colors">
                  SOL 1–11 Mission Campaign
                </Link>
              </li>
              <li>
                <Link href="/models" className="hover:text-mars-400 transition-colors">
                  3D Outpost Architecture & Models
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-mars-400 transition-colors">
                  User Experience & Physical Consoles
                </Link>
              </li>
              <li>
                <Link href="/science" className="hover:text-mars-400 transition-colors">
                  Mars Terrain & Scientific Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Documentation & Lore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Project & Documentation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-mars-400 transition-colors">
                  About PHOBOSIA
                </Link>
              </li>
              <li>
                <Link href="/development" className="hover:text-mars-400 transition-colors">
                  Development Process & Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-mars-400 transition-colors">
                  Astronaut Carl Ashwindu Lore
                </Link>
              </li>
              <li>
                <Link href="/creator" className="hover:text-mars-400 transition-colors">
                  Developer Profile (Osanda Hirushaka)
                </Link>
              </li>
              <li>
                <Link href="/credits" className="hover:text-mars-400 transition-colors flex items-center gap-1">
                  <span>3D Asset Credits & Attribution</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-space-800 text-slate-400 border border-space-700">Dedicated</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Scientific Provenance & Challenge Notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              Scientific Transparency
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              PHOBOSIA is an independent educational planetary exploration software project.
            </p>
            <p className="text-[11px] leading-relaxed text-slate-500">
              It is not an official NASA mission, nor does it receive formal endorsement from NASA or JPL. Surface telemetry and fictional character arcs are simulated for interactive engagement.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-space-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PHOBOSIA — Conceived & Developed by Osanda Hirushaka.</p>
          <div className="flex items-center gap-4">
            <Link href="/credits" className="hover:text-slate-400 transition-colors">
              External Model Credits
            </Link>
            <span>•</span>
            <Link href="/science" className="hover:text-slate-400 transition-colors">
              Data Citations
            </Link>
            <span>•</span>
            <a
              href="https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
