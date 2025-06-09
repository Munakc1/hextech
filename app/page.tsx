import React from "react";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBySection from "./components/TrustedBySection";
import HexPlatformOverview from "./components/HexPlatformOverview";
import NotebookIntro from "./components/NotebookIntro"; // ✅ New import

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

             

              {/* Logo Grid Section - full width */}
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] translate-x-[-50%]">
                <TrustedBySection />
              </div>

              {/* Analytics, AI, and Apps Section */}
              <HexPlatformOverview />
            </main>
             {/* Notebook Intro Section - full width with black bg */}
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] translate-x-[-50%] bg-black">
                <NotebookIntro />
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
