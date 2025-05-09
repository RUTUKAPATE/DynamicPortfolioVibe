import { useEffect, useRef } from "react";

interface MapProps {
  location: string;
  zoom?: number;
}

export function Map({ location, zoom = 14 }: MapProps) {
  const mapContainerRef = useRef<HTMLIFrameElement>(null);
  
  // Encode the location for use in the URL
  const encodedLocation = encodeURIComponent(location);

  return (
    <iframe 
      ref={mapContainerRef}
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.98347845047!2d79.01869077759756!3d21.151584743826743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1666677601882!5m2!1sen!2sin`}
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
      className="map-container"
    />
  );
}
