"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, Compass, ArrowRight, Play, Sparkles, Orbit, Radio } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video autoplay muted to comply with browser security policies
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      video.volume = 0.8;
      video.play().catch(() => {});
      setIsMuted(false);
      setHasInteracted(true);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-space-950 text-white">
      {/* 1. Background Video Layer */}
      <video
        ref={videoRef}
        src="/videos/trailer_phobosia.mp4"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        poster="/images/outpost_1.png"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.08] scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
      />

      {/* 2. Layered Cinematic Gradients & Subtle Atmospheric Blur */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] bg-gradient-to-t from-space-950 via-space-950/60 to-space-950/80" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-space-950/40 to-space-950/90 pointer-events-none" />

      {/* 3. Subtle Mars Horizon Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-mars-500/20 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* 4. Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-space-900/90 border border-space-700/80 text-cyan-glow shadow-sm backdrop-blur-md">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Interactive 3D Planetary Simulation</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-space-900/90 border border-space-700/80 shadow-sm backdrop-blur-md">
            <Orbit className="w-3 h-3 text-mars-400" />
            <span>Elysium Planitia • 4.5° N, 135.9° E</span>
          </span>
        </div>

        {/* Primary Brand Logo */}
        <div className="relative my-4 flex items-center justify-center">
          <Image
            src="/images/PHOBOSIA_Martian_Modern_Logo_4K.png"
            alt="PHOBOSIA — 3D Mars Exploration Experience"
            width={800}
            height={200}
            priority
            className="w-[300px] sm:w-[480px] md:w-[600px] lg:w-[700px] max-w-full h-auto object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)] brightness-110"
          />
          <h1 className="sr-only">PHOBOSIA — A Journey Beyond Earth. An Experience of Mars.</h1>
        </div>

        {/* Supporting Tagline */}
        <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-mars-300">
          A Journey Beyond Earth. An Experience of Mars.
        </p>

        {/* Descriptive Lede */}
        <p className="mt-6 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          An interactive 3D Mars exploration experience bringing a fictional Martian outpost, scientific planetary observation, and a comprehensive 11-day mission journey together in your browser.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full max-w-lg">
          <a
            href="http://phobosia.sim623.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 min-w-[210px] flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-mars-500 to-amber-600 hover:from-mars-600 hover:to-amber-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-mars-500/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Open Experience ↗</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/missions"
            className="flex-1 min-w-[180px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-space-900/90 hover:bg-space-800 text-slate-200 hover:text-white font-medium text-sm tracking-wide border border-space-700/80 backdrop-blur-md transition-all hover:border-slate-500"
          >
            <span>Explore SOL 1–11</span>
          </Link>
        </div>

        {/* Secondary Quick Access Bar */}
        <div className="mt-10 pt-8 border-t border-space-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/models" className="hover:text-mars-400 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-mars-500" />
            <span>5 Custom 3D Modules</span>
          </Link>
          <Link href="/science" className="hover:text-cyan-glow transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>NASA HiRISE Elevation DTM</span>
          </Link>
          <Link href="/experience" className="hover:text-amber-glow transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Physical Console System</span>
          </Link>
          <Link href="/creator" className="hover:text-slate-200 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Creator Profile</span>
          </Link>
        </div>
      </div>

      {/* 5. Floating Audio Control Button (Dedicated Mute/Unmute Control) */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          type="button"
          onClick={toggleSound}
          className={`group flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all shadow-xl ${
            isMuted
              ? "bg-space-900/80 border-space-700/80 text-slate-300 hover:border-mars-500/60 hover:text-white"
              : "bg-mars-500/20 border-mars-500/80 text-mars-300 shadow-mars-500/20"
          }`}
          title={isMuted ? "Click to play trailer sound" : "Click to mute audio"}
          aria-label={isMuted ? "Unmute trailer background audio" : "Mute trailer background audio"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-mars-400 transition-colors" />
              <span className="text-xs font-mono font-medium tracking-wider">
                SOUND: OFF
              </span>
            </>
          ) : (
            <>
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-3 bg-mars-400 animate-pulse rounded-full" />
                <span className="w-0.5 h-2 bg-mars-400 animate-pulse rounded-full" style={{ animationDelay: "150ms" }} />
                <span className="w-0.5 h-4 bg-mars-400 animate-pulse rounded-full" style={{ animationDelay: "300ms" }} />
              </div>
              <Volume2 className="w-4 h-4 text-mars-400" />
              <span className="text-xs font-mono font-medium tracking-wider text-mars-300">
                SOUND: ON
              </span>
            </>
          )}
        </button>
      </div>

      {/* Unmute Prompt Hint for First-Time Visitors */}
      {isMuted && !hasInteracted && (
        <div className="hidden sm:flex absolute bottom-20 right-6 z-20 items-center gap-2 px-3 py-1.5 rounded-lg bg-space-900/90 border border-mars-500/40 text-mars-300 text-[11px] shadow-lg animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Click to play cinematic trailer audio</span>
        </div>
      )}
    </div>
  );
}
