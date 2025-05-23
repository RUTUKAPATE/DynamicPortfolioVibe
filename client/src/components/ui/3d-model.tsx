import { useEffect, useRef } from "react";
import HeroImg from "@/assets/Hero.jpeg";

export function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-full overflow-hidden relative shadow-2xl"
    >
      <img src={HeroImg}
        alt="3D Cartoon Developer Girl"
        className="w-full h-full object-cover"
      />

      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-slow"></div>

      {/* Interactive elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-24 h-24 rounded-full bg-primary/20 animate-ping"></div>
      </div>
    </div>
  );
}
