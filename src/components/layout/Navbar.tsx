"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, ExternalLink, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/missions", label: "Missions" },
  { href: "/experience", label: "Experience" },
  { href: "/models", label: "3D Models" },
  { href: "/science", label: "Science & Data" },
  { href: "/development", label: "Development" },
  { href: "/story", label: "Astronaut Lore" },
  { href: "/creator", label: "Creator" },
  { href: "/credits", label: "Credits" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-space-950/90 backdrop-blur-md border-b border-space-700/60 shadow-lg shadow-black/40 py-3"
          : "bg-space-950/40 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-90"
          aria-label="PHOBOSIA Home"
        >
          <Image
            src="/images/PHOBOSIA_Martian_Modern_Logo_4K.png"
            alt="PHOBOSIA"
            width={170}
            height={40}
            priority
            className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 bg-space-900/60 border border-space-700/40 rounded-full px-3 py-1.5 shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "text-white bg-space-700/80 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-space-800/60"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-mars-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="http://phobosia.sim623.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-mars-500 to-amber-600 hover:from-mars-600 hover:to-amber-700 text-white text-xs font-bold tracking-wide shadow-md shadow-mars-500/25 transition-all hover:scale-105"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Open Experience ↗</span>
          </a>
          <a
            href="https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-800/80 hover:bg-space-700 text-slate-200 text-xs font-medium border border-space-700/60 transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-space-800 border border-space-700/40 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-b border-space-700/80 bg-space-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-mars-500/20 text-mars-300 border border-mars-500/40"
                      : "text-slate-300 hover:bg-space-800/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-space-800 flex items-center justify-between gap-3">
            <a
              href="http://phobosia.sim623.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg bg-gradient-to-r from-mars-500 to-amber-600 text-white font-bold text-xs tracking-wider uppercase hover:from-mars-600 hover:to-amber-700 transition-all shadow-md"
            >
              Open Experience ↗
            </a>
            <Link
              href="/missions"
              className="px-3 py-2 rounded-lg bg-space-800 text-slate-200 text-xs font-medium border border-space-700/60"
            >
              SOL 1–11
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
