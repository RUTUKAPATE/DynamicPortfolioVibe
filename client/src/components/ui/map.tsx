import { useEffect, useRef } from "react";

interface MapProps {
  location?: string;
  zoom?: number;
}

export function Map({ location = "7/47/03 KTPS Colony Koradi Nagpur", zoom = 16 }: MapProps) {
  const mapContainerRef = useRef<HTMLIFrameElement>(null);
  
  // Using a specific iframe embed for KTPS Colony, Koradi, Nagpur with a pin
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe 
        ref={mapContainerRef}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6194361373537!2d79.09945867575176!3d21.242886179618443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c9ba2c7ba1%3A0x9c0318b6d1ced7a3!2sKTPS%20Colony%2C%20Koradi%2C%20Maharashtra%20441111!5e0!3m2!1sen!2sin!4v1684223455307!5m2!1sen!2sin"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="KTPS Colony, Koradi, Nagpur"
        className="map-container"
      />
      
      {/* Pin overlay for specific location */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-primary animate-bounce shadow-lg"></div>
          <div className="w-1 h-6 bg-primary -mt-1"></div>
        </div>
      </div>
      
      {/* Location label */}
      <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 shadow-lg px-4 py-2 rounded-lg text-sm">
        <p className="font-medium">7/47/03 KTPS Colony, Koradi, Nagpur</p>
      </div>
    </div>
  );
}
