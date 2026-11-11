import React from "react";
import { HeroVideo } from "@/components/home/HeroVideo";
import { ProjectHighlights } from "@/components/home/ProjectHighlights";
import { EnvironmentTeaser } from "@/components/home/EnvironmentTeaser";
import { MissionTimelineTeaser } from "@/components/home/MissionTimelineTeaser";
import { InteractiveHighlights } from "@/components/home/InteractiveHighlights";
import { ScientificPurposeTeaser } from "@/components/home/ScientificPurposeTeaser";
import { CreatorTeaser } from "@/components/home/CreatorTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroVideo />
      <ProjectHighlights />
      <EnvironmentTeaser />
      <MissionTimelineTeaser />
      <InteractiveHighlights />
      <ScientificPurposeTeaser />
      <CreatorTeaser />
      <FinalCTA />
    </div>
  );
}
