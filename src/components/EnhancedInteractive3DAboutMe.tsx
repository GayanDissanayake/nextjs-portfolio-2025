"use client";

import { useState } from "react";
import Scene from "./3d-about-me/Scene";
import UIOverlay from "./3d-about-me/UIOverlay";
import ControlsInfo from "./3d-about-me/ControlsInfo";
import { enhancedAboutMeData } from "./3d-about-me/aboutMeData";

export default function EnhancedInteractive3DAboutMe() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  const handleObjectClick = (id: string) => {
    setSelectedObject(selectedObject === id ? null : id);
  };

  const selectedData = enhancedAboutMeData.find(
    (item) => item.id === selectedObject
  );

  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* UI Overlay */}
      <UIOverlay selectedData={selectedData || null} />

      {/* Controls Info */}
      <ControlsInfo />

      {/* Three.js Canvas */}
      <Scene
        selectedObject={selectedObject}
        onObjectClick={handleObjectClick}
      />
    </div>
  );
}
