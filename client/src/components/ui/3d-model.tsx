import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Using a higher quality realistic image instead of 3D model
  // This responds to your request for a more realistic looking developer image
  return (
    <div ref={containerRef} className="w-full h-full rounded-full overflow-hidden relative shadow-2xl">
      <img 
        src="https://img.freepik.com/free-photo/young-beautiful-woman-sitting-table-working-laptop-office_1258-80499.jpg" 
        alt="Female Developer Professional" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay with animated gradient to create an interactive effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-slow"></div>
      
      {/* Interactive elements that suggest 3D movement */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-24 h-24 rounded-full bg-primary/20 animate-ping"></div>
      </div>
    </div>
  );
}
