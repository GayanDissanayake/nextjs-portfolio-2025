"use client";

import { Suspense } from "react";
import Globe3D from "@/components/Globe3D";

export default function WorldMapPage() {
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 bg-navy-light/80 backdrop-blur-sm text-beige-accent hover:text-beige border border-gray-700 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-navy-light/90"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>

      <Suspense
        fallback={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-beige-accent mx-auto mb-4"></div>
              <p className="text-lg">Loading Interactive World Map...</p>
            </div>
          </div>
        }
      >
        <Globe3D />
      </Suspense>
    </div>
  );
}
