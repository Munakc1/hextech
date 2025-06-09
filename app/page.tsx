import React from "react";
import Footer from "./components/Footer";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-black p-[35px]">
      <div className="border border-black rounded-md">
        <div
          className="border rounded-md"
          style={{ borderColor: "#bcaaa4" }}
        >
          <div className="bg-black text-black grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
              {/* Your main content here */}
              <p className="text-white">Hello World</p>
            </main>

            <footer className="row-start-3 w-full">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
