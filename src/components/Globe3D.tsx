"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 text-white">
      Loading 3D Globe...
    </div>
  ),
});

interface TravelLocation {
  id: string;
  country: string;
  city: string;
  coordinates: [number, number]; // [lng, lat] for globe
  images: string[];
  description: string;
  year: string;
  highlights: string[];
}

const travelData: TravelLocation[] = [
  {
    id: "sri-lanka",
    country: "Sri Lanka",
    city: "Multiple Cities",
    coordinates: [80.7718, 7.8731],
    images: ["/images/travel/sri-lanka-1.jpg"],
    description:
      "My homeland - explored the beautiful beaches, ancient temples, and lush tea plantations.",
    year: "Born & Raised",
    highlights: [
      "Sigiriya Rock Fortress",
      "Kandy Temple",
      "Galle Fort",
      "Ella Nine Arches",
    ],
  },
  {
    id: "malaysia",
    country: "Malaysia",
    city: "Kuala Lumpur",
    coordinates: [101.6869, 3.139],
    images: ["/images/travel/malaysia-1.jpg"],
    description: "Amazing food culture and the iconic Petronas Twin Towers.",
    year: "2023",
    highlights: [
      "Petronas Towers",
      "Batu Caves",
      "Street Food Tours",
      "KLCC Park",
    ],
  },
  {
    id: "singapore",
    country: "Singapore",
    city: "Singapore",
    coordinates: [103.8198, 1.3521],
    images: ["/images/travel/singapore-1.jpg"],
    description:
      "The perfect blend of modern architecture and cultural diversity.",
    year: "2023",
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Hawker Centers",
      "Sentosa Island",
    ],
  },
  {
    id: "vietnam",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    coordinates: [106.6297, 10.8231],
    images: ["/images/travel/vietnam-1.jpg"],
    description:
      "Rich history, incredible street food, and bustling city life.",
    year: "2022",
    highlights: [
      "Cu Chi Tunnels",
      "Ben Thanh Market",
      "Mekong Delta",
      "Notre Dame Cathedral",
    ],
  },
  {
    id: "australia",
    country: "Australia",
    city: "Sydney & Melbourne",
    coordinates: [133.7751, -25.2744],
    images: ["/images/travel/australia-1.jpg"],
    description:
      "Multiple visits to experience the diverse landscapes and vibrant cities.",
    year: "2021-2024",
    highlights: [
      "Sydney Opera House",
      "Great Ocean Road",
      "Blue Mountains",
      "Federation Square",
    ],
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    city: "Auckland & Wellington",
    coordinates: [174.7633, -36.8485],
    images: ["/images/travel/nz-1.jpg"],
    description:
      "My current home base - exploring the stunning natural beauty.",
    year: "2020-Present",
    highlights: [
      "Milford Sound",
      "Rotorua Geysers",
      "Bay of Islands",
      "Mount Cook",
    ],
  },
];

interface TravelDetailsProps {
  location: TravelLocation | null;
  onClose: () => void;
}

function TravelDetails({ location, onClose }: TravelDetailsProps) {
  if (!location) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-navy-light rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-beige mb-1">
                {location.country}
              </h3>
              <p className="text-beige-accent">
                {location.city} • {location.year}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-beige-accent transition-colors p-2"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-300 mb-4">{location.description}</p>

          <div>
            <h4 className="text-beige font-semibold mb-2">Highlights:</h4>
            <div className="grid grid-cols-1 gap-2">
              {location.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300 p-2 rounded bg-gray-800/50"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Globe3D() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<TravelLocation | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countries, setCountries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load country data from Natural Earth
    fetch(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading country data:", err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (globeEl.current && !isLoading) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;

      // Set initial view to Asia-Pacific
      globeEl.current.pointOfView({ lat: 10, lng: 100, altitude: 2 });
    }
  }, [isLoading]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePointClick = (point: any) => {
    const location = travelData.find((loc) => loc.id === point.id);
    if (location && globeEl.current) {
      setSelectedLocation(location);
      globeEl.current.pointOfView(
        {
          lat: location.coordinates[1],
          lng: location.coordinates[0],
          altitude: 1.5,
        },
        1000
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-beige-accent mx-auto mb-4"></div>
          <p className="text-beige-accent text-lg">Loading 3D Globe...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Travel Journey
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Explore my adventures around the world
        </p>
        <div className="mt-6 inline-flex items-center bg-navy-light/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
          <span className="text-beige-accent font-mono text-sm mr-4">
            Countries Visited:
          </span>
          <span className="text-3xl font-bold text-beige">
            {travelData.length}
          </span>
        </div>
      </div>

      {/* Globe Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
          <div className="w-full h-[600px] rounded-xl overflow-hidden">
            <Globe
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              // Countries with real shapes from Natural Earth data
              polygonsData={countries}
              polygonCapColor={() => "#4ade80"}
              polygonSideColor={() => "#22c55e"}
              polygonStrokeColor={() => "#166534"}
              polygonAltitude={0.01}
              // Travel points
              pointsData={travelData.map((location) => ({
                ...location,
                lat: location.coordinates[1],
                lng: location.coordinates[0],
              }))}
              pointAltitude={0.02}
              pointColor={() => "#ef4444"}
              pointRadius={0.8}
              pointResolution={12}
              onPointClick={handlePointClick}
              // Labels
              labelsData={travelData.map((location) => ({
                ...location,
                lat: location.coordinates[1],
                lng: location.coordinates[0],
                text: location.country,
              }))}
              labelText="text"
              labelSize={1.5}
              labelDotRadius={0.5}
              labelColor={() => "#fbbf24"}
              labelResolution={3}
              // Atmosphere effect
              atmosphereColor="#1e40af"
              atmosphereAltitude={0.15}
              animateIn={true}
            />
          </div>

          {/* Controls info */}
          <div className="mt-4 bg-navy-light/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 justify-center">
              <span>🖱️ Drag to rotate</span>
              <span>🔍 Scroll to zoom</span>
              <span>📍 Click pins for details</span>
              <span>🌍 Auto-rotating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Details Modal */}
      <TravelDetails
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </div>
  );
}
