import { useEffect, useRef } from 'react';
import L from 'leaflet';

interface FrogMapProps {
  lat: number;
  lng: number;
  nom: string;
}

export default function FrogMap({ lat, lng, nom }: FrogMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Clean up previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Create map
    const map = L.map(mapRef.current).setView([lat, lng], 4);
    mapInstanceRef.current = map;

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Custom frog icon
    const frogIcon = L.divIcon({
      html: `<div style="font-size: 32px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">🐸</div>`,
      className: 'frog-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    // Add marker
    const marker = L.marker([lat, lng], { icon: frogIcon }).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center; padding: 4px;">
        <strong style="font-size: 14px; color: #1a4d2e;">🐸 ${nom}</strong><br/>
        <span style="font-size: 12px; color: #666;">Aquí viu aquesta granota!</span>
      </div>
    `).openPopup();

    // Fix map rendering
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, nom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[300px] rounded-xl border-2 border-frog-light/40 overflow-hidden"
    />
  );
}
