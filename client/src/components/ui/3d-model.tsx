import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Fallback image when Three.js isn't available
    const fallbackImage = document.createElement('img');
    fallbackImage.src = "https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg";
    fallbackImage.alt = "Female Developer Cartoon";
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
      
      // Create a more interesting 3D model - laptop with coding elements
      // Create laptop base
      const laptopBase = new THREE.BoxGeometry(3, 0.2, 2);
      const laptopBaseMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.2,
        metalness: 0.8
      });
      const laptop = new THREE.Mesh(laptopBase, laptopBaseMaterial);
      scene.add(laptop);
      
      // Create laptop screen
      const laptopScreen = new THREE.BoxGeometry(3, 2, 0.1);
      const screenMaterial = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        roughness: 0.2,
        metalness: 0.5,
        emissive: 0x6366f1,
        emissiveIntensity: 0.3
      });
      const screen = new THREE.Mesh(laptopScreen, screenMaterial);
      screen.position.y = 1.1;
      screen.position.z = -1;
      screen.rotation.x = -0.2;
      laptop.add(screen);
      
      // Create a "developer girl" silhouette using simple shapes
      const headGeometry = new THREE.SphereGeometry(0.5, 32, 16);
      const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1, 32);
      const characterMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf472b6, // Pink color for feminine appearance
        roughness: 0.5,
        metalness: 0.1
      });
      
      // Head
      const head = new THREE.Mesh(headGeometry, characterMaterial);
      head.position.set(0, 1.5, 1.5);
      head.scale.set(0.5, 0.6, 0.5);
      scene.add(head);
      
      // Body
      const body = new THREE.Mesh(bodyGeometry, characterMaterial);
      body.position.set(0, 0.7, 1.5);
      body.scale.set(0.5, 0.5, 0.5);
      scene.add(body);
      
      // Hair (simple curved shape)
      const hairGeometry = new THREE.TorusGeometry(0.3, 0.2, 16, 32, 2.5);
      const hairMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x222222, 
        roughness: 1, 
        metalness: 0 
      });
      const hair = new THREE.Mesh(hairGeometry, hairMaterial);
      hair.position.set(0, 1.7, 1.5);
      hair.rotation.x = Math.PI / 2;
      hair.scale.set(0.7, 0.7, 0.7);
      scene.add(hair);
      
      // Group all elements 
      const characterGroup = new THREE.Group();
      characterGroup.add(laptop);
      characterGroup.add(head);
      characterGroup.add(body);
      characterGroup.add(hair);
      scene.add(characterGroup);
      
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
        characterGroup.rotation.y += 0.005;
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
        src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg" 
        alt="Female Developer Cartoon" 
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
