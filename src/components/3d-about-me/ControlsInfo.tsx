export default function ControlsInfo() {
  return (
    <div className="absolute bottom-6 right-6 z-10 text-white text-xs bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
      <div className="space-y-1">
        <div>🖱️ Drag to orbit around</div>
        <div>🎯 Click objects to explore</div>
        <div>🔍 Scroll to zoom</div>
        <div>✨ Watch for animations</div>
      </div>
    </div>
  );
}
