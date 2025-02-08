import React, { useEffect, useRef, useState } from "react";
import Map from "../components/Map";

const INITIAL_CENTER = [121.04186, 14.57421];
const INITIAL_ZOOM = 18;

const MapPage = () => {
  const mapRef = useRef();

  return (
    <>
      <Map />
    </>
  );
};

export default MapPage;
