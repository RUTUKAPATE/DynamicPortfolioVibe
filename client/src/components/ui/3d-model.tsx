import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Fallback image when Three.js isn't available
    const fallbackImage = document.createElement('img');
    fallbackImage.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800";
    fallbackImage.alt = "Female Developer";
    fallbackImage.className = "w-full h-full rounded-full object-cover";
    
    // Try to initialize Three.js, fallback to image if it fails
    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true
      });
      
      renderer.setSize(400, 400);
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
      
      // Create a simple sphere (placeholder for a 3D model)
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        roughness: 0.3,
        metalness: 0.8,
        emissive: 0x6366f1,
        emissiveIntensity: 0.2
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      // Add point light
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      
      // Position camera
      camera.position.z = 5;
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        renderer.setSize(400, 400);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    } catch (error) {
      // Fallback to static image if Three.js fails
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(fallbackImage);
      }
      
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full rounded-full overflow-hidden">
      {/* Fallback content while loading */}
      <img 
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
        alt="Female Developer" 
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
