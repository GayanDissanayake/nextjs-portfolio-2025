"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";

// Fix for default markers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

interface TravelLocation {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  description: string;
  visitDate: string;
  type: "city" | "landmark" | "nature";
}

const travelLocations: TravelLocation[] = [
  {
    id: "1",
    name: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    description: "The City of Light with iconic Eiffel Tower",
    visitDate: "2023-06",
    type: "city",
  },
  {
    id: "2",
    name: "Tokyo",
    country: "Japan",
    coordinates: [35.6762, 139.6503],
    description: "Modern metropolis with rich cultural heritage",
    visitDate: "2023-08",
    type: "city",
  },
  {
    id: "3",
    name: "New York",
    country: "USA",
    coordinates: [40.7128, -74.006],
    description: "The Big Apple - bustling financial and cultural hub",
    visitDate: "2023-10",
    type: "city",
  },
  {
    id: "4",
    name: "Sydney",
    country: "Australia",
    coordinates: [-33.8688, 151.2093],
    description: "Harbor city with iconic Opera House",
    visitDate: "2024-01",
    type: "city",
  },
  {
    id: "5",
    name: "London",
    country: "United Kingdom",
    coordinates: [51.5074, -0.1278],
    description: "Historic capital with modern attractions",
    visitDate: "2024-03",
    type: "city",
  },
  {
    id: "6",
    name: "Machu Picchu",
    country: "Peru",
    coordinates: [-13.1631, -72.545],
    description: "Ancient Incan citadel in the Andes Mountains",
    visitDate: "2024-05",
    type: "landmark",
  },
];

export default function LeafletMapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<TravelLocation | null>(null);
  const [mapStyle, setMapStyle] = useState<"street" | "satellite" | "terrain">(
    "street"
  );

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 1,
      maxZoom: 18,
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: false, // Prevent world repetition
      maxBounds: [
        [-90, -180], // Southwest coordinates
        [90, 180], // Northeast coordinates
      ],
      maxBoundsViscosity: 1.0, // How much to resist dragging outside bounds
    });

    mapInstanceRef.current = map;

    // Add tile layers
    const tileLayers = {
      street: L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenStreetMap contributors",
          noWrap: true, // Prevent world repetition
          bounds: [
            [-90, -180], // Southwest coordinates
            [90, 180], // Northeast coordinates
          ],
        }
      ),
      satellite: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "© Esri & contributors",
          noWrap: true, // Prevent world repetition
          bounds: [
            [-90, -180], // Southwest coordinates
            [90, 180], // Northeast coordinates
          ],
        }
      ),
      terrain: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenTopoMap contributors",
        noWrap: true, // Prevent world repetition
        bounds: [
          [-90, -180], // Southwest coordinates
          [90, 180], // Northeast coordinates
        ],
      }),
    };

    // Add default layer
    tileLayers.street.addTo(map);

    // Create custom icons for different location types
    const createCustomIcon = (type: string) => {
      const colors = {
        city: "#3B82F6",
        landmark: "#EF4444",
        nature: "#10B981",
      };

      return L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            background-color: ${colors[type as keyof typeof colors]};
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });
    };

    // Add markers
    travelLocations.forEach((location) => {
      const marker = L.marker(location.coordinates, {
        icon: createCustomIcon(location.type),
      }).addTo(map);

      marker.bindPopup(`
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold;">${location.name}</h3>
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">${location.country}</p>
          <p style="margin: 0 0 8px 0; color: #374151; font-size: 13px;">${location.description}</p>
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">Visited: ${location.visitDate}</p>
        </div>
      `);

      marker.on("click", () => {
        setSelectedLocation(location);
      });
    });

    // Store layers for style switching
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (map as any).tileLayers = tileLayers;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const changeMapStyle = (style: "street" | "satellite" | "terrain") => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tileLayers = (map as any).tileLayers;

    // Remove current layer
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    // Add new layer
    tileLayers[style].addTo(map);
    setMapStyle(style);
  };

  const flyToLocation = (location: TravelLocation) => {
    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(location.coordinates, 8, {
      duration: 2,
    });
    setSelectedLocation(location);
  };

  const resetMapView = () => {
    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo([20, 0], 2, {
      duration: 2,
    });
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-green-900 p-6">
        <h1 className="text-4xl font-bold text-center mb-2">
          Interactive Travel Map
        </h1>
        <p className="text-center text-blue-200">
          Explore my journey around the world using Leaflet
        </p>

        {/* Map Style Controls */}
        <div className="flex justify-center mt-4 space-x-2">
          {(["street", "satellite", "terrain"] as const).map((style) => (
            <button
              key={style}
              onClick={() => changeMapStyle(style)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                mapStyle === style
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {style}
            </button>
          ))}
          <button
            onClick={resetMapView}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            title="Reset to world view"
          >
            🌍 Reset View
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)]">
        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-800 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Travel Destinations
          </h2>

          <div className="space-y-3">
            {travelLocations.map((location) => (
              <div
                key={location.id}
                onClick={() => flyToLocation(location)}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:bg-gray-700 ${
                  selectedLocation?.id === location.id
                    ? "border-green-400 bg-gray-700"
                    : "border-gray-600 bg-gray-750"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{location.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      location.type === "city"
                        ? "bg-blue-600"
                        : location.type === "landmark"
                        ? "bg-red-600"
                        : "bg-green-600"
                    }`}
                  >
                    {location.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{location.country}</p>
                <p className="text-gray-300 text-sm mb-2">
                  {location.description}
                </p>
                <p className="text-gray-500 text-xs">
                  Visited: {location.visitDate}
                </p>
              </div>
            ))}
          </div>

          {selectedLocation && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg">
              <h3 className="text-lg font-semibold text-green-300 mb-2">
                Currently Viewing
              </h3>
              <h4 className="text-white font-medium">
                {selectedLocation.name}
              </h4>
              <p className="text-gray-300 text-sm">
                {selectedLocation.country}
              </p>
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div ref={mapRef} className="h-full w-full" />

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-3 rounded-lg">
            <h4 className="text-white font-semibold mb-2 text-sm">Legend</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-white text-xs">Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-white text-xs">Landmarks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-white text-xs">Nature</span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-600">
              <span className="text-gray-300 text-xs">
                🌍 World bounds locked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
