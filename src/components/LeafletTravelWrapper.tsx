"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import to avoid SSR issues
const LeafletTravelMap = dynamic(
  () => import("@/components/LeafletMapComponent"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-green-200 text-lg">
            Loading Interactive Travel Map...
          </p>
        </div>
      </div>
    ),
  }
);

export default function LeafletTravelWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-green-200 text-lg">
            Loading Interactive Travel Map...
          </p>
        </div>
      </div>
    );
  }

  return <LeafletTravelMap />;
}
