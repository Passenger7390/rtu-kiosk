import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geojsonData from "../../../../backend/geojson.geojson";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;

const Map = () => {
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

    mapRef.current.on("load", () => {
      mapRef.current.addSource("geojson-data", {
        type: "geojson",
        data: geojsonData,
      });
    });

    mapRef.current.addLayer({
      id: "room-extrusion",
      type: "fill-extrusion",
      source: "geojson-data",
      paint: {
        "fill-extrusion-color": ["get", "color"],
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "base_height"],
        "fill-extrusion-opacity": 0.5,
      },
    });

    mapRef.current.on("move", () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    mapRef.current.on("click", (event) => {
      const features = mapRef.current.queryRenderedFeatures(event.point, {
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

  const resetMap = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };

  return (
    <>
      <div className="h-[760px] w-screen bg-blue-800 flex-col items-center justify-center font-lex">
        <div className="absolute flex flex-col items-center justify-center inset-x-0">
          <button
            className="h-12 w-36 border border-black text-2xl bg-emerald-400 m-1 rounded-md"
            onClick={resetMap}
          >
            Reset
          </button>
          <div className="flex flex-1 w-full h-full">
            <div
              id="map-container"
              ref={mapContainerRef}
              className="h-[705px] w-full"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
