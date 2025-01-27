import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;

const MapPage = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  const INITIAL_CENTER = [121.04186, 14.57421];
  const INITIAL_ZOOM = 18;

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/jaycyivan31/cm637kusz006101stgorb09q9",
      center: [121.04186, 14.57421],
      zoom: 18,
      pitch: 45,
      maxBounds: [
        [121.03537, 14.56699],
        [121.05146, 14.58205],
      ],
      bearing: 172.03,
    });

    mapRef.current.on("move", () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    mapRef.current.on("click", (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["rtu-buildings"],
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(`<h3>${feature.properties.name}</h3>`)
        .addTo(mapRef.current);
    });

    return () => mapRef.current.remove();
  }, []);

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };
  // FOrmat the button to look nice
  // get the geojson
  // ayusin yung mga markers
  return (
    <>
      <button onClick={handleButtonClick}>Reset Map</button>
      <div
        id="map-container"
        ref={mapContainerRef}
        className="h-[750px] w-screen"
      />
    </>
  );
};

export default MapPage;
