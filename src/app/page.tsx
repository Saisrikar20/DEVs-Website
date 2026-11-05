import React from "react";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import DomainsSection from "@/components/domains-section";
import FlagshipProjects from "@/components/flagship-projects";
import EventsRadar from "@/components/events-radar";
import P2PSpotlight from "@/components/p2p-spotlight";
import TeamPreview from "@/components/team-preview";
import RecruitmentCTA from "@/components/recruitment-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <DomainsSection />
      <FlagshipProjects />
      <EventsRadar />
      <P2PSpotlight />
      <TeamPreview />
      <RecruitmentCTA />
    </div>
  );
}

