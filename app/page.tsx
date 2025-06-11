// Home.tsx
import React from "react";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBySection from "./components/TrustedBySection";
import HexPlatformOverview from "./components/HexPlatformOverview";
import NotebookIntro from "./components/NotebookIntro";
import { Text } from "./components/Text"; // ✅ Your new section
import DisNotebook from "./components/DisNotebook";
import CoreFeatures from "./components/CoreFeatures";
import Testimonials from './components/Testimonials';
import DataAppsSection from './components/DataAppsSection';
import AppsSection from './components/AppsSection';
import GetStartedPlans from './components/GetStartedPlans';
import LovedSection from './components/LovedSection';
import Section from './components/Section';
import IntegrationSection from './components/IntegrationSection';
import {GlowingStarsGrid} from './components/GlowingStarsGrid';
import SecurityControl from './components/SecurityControl';
import TwoSectionLayout from './components/TwoSectionLayout';
import GlowingEffectDemo from './components/GlowingEffectDemo';


export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#141217] px-[35px] pt-[35px] pb-[5px]">
      {/* Top Announcement */}
      <AnnouncementBar />

      <div className="bg-black mb-[35px] rounded-md">
        <div className="border border-[#bcaaa4] rounded-md overflow-hidden">
          <div className="rounded-b-md">
            {/* Top Nav */}
            <Navbar />

            {/* Main content container */}
            <main className="bg-[#06040a] text-white flex flex-col gap-[32px] items-center justify-center w-full">
              {/* Hero Section */}
              <Hero />

              {/* Logo Grid Section */}
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] translate-x-[-50%]">
                <TrustedBySection />
              </div>

              {/* Analytics, AI, and Apps Section */}
              <HexPlatformOverview />

              {/* ✅ Insert the new Text Section */}
              <Text />
            </main>

            {/* Notebook Intro Section */}
            <div className="w-full">
              <NotebookIntro />
            </div>

            <div className="w-full">
              <DisNotebook />
            </div>

            <div className="w-full">
              <CoreFeatures />
            </div>

            <div className="w-full">
              <Testimonials />
            </div>

            <div className="w-full">
              <DataAppsSection />
            </div>

            <div className="w-full">
              <AppsSection />
            </div>

            <div className="w-full">
              <LovedSection />
            </div>

            <div className="w-full">
              <Section />
            </div>

            <div className="w-full">
              <IntegrationSection />
            </div>

           
            <div className="w-full">
              <SecurityControl />
            </div>
            <div className="w-full">
              <GlowingStarsGrid />
            </div>
            <div className="w-full">
              <TwoSectionLayout />
            </div>
            <div className="w-full">
              <GlowingEffectDemo />
            </div>

            <div className="w-full">
              <GetStartedPlans />
            </div>

            {/* Footer */}
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
