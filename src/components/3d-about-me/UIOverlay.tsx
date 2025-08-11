import { AboutMeItem } from "./aboutMeData";

interface UIOverlayProps {
  selectedData: AboutMeItem | null;
}

export default function UIOverlay({ selectedData }: UIOverlayProps) {
  return (
    <div className="absolute top-6 left-6 z-10 text-white max-w-sm">
      <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Meet Gayan
      </h1>
      <p className="text-gray-300 text-sm mb-3">
        Explore different aspects of my personality by clicking on the floating
        objects around me!
      </p>

      {selectedData && (
        <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 mt-4 border border-white/20 shadow-lg">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
            <span className="text-xl">{selectedData.icon}</span>
            {selectedData.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            {selectedData.description}
          </p>

          <div className="space-y-1">
            {selectedData.details.map((detail, index) => (
              <div
                key={index}
                className="text-xs text-gray-400 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                {detail}
              </div>
            ))}
          </div>

          <button
            className="mt-3 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg text-sm transition-all transform hover:scale-105"
            onClick={() => {
              console.log(`Navigate to ${selectedData.id} section`);
            }}
          >
            Learn More About This →
          </button>
        </div>
      )}
    </div>
  );
}
