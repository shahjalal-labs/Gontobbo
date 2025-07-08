#!/bin/bash

set -e

TARGET_DIR="gontobboZones_refactored"

mkdir -p "$TARGET_DIR"/{components,hooks,constants,utils}

# === constants/zones.js ===
cat << 'EOF' > "$TARGET_DIR/constants/zones.js"
export const zones = [
  // 👉 Paste your actual zones data here (district, city, covered_area, etc.)
];
EOF

# === utils/string.js ===
cat << 'EOF' > "$TARGET_DIR/utils/string.js"
export const normalizeString = (input = "") =>
  String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
EOF

# === hooks/useZoneFilter.js ===
cat << 'EOF' > "$TARGET_DIR/hooks/useZoneFilter.js"
import { useMemo } from "react";
import { normalizeString } from "../utils/string";

export const useZoneFilter = (zones, query) =>
  useMemo(() => {
    const q = normalizeString(query);
    return zones.filter(zone =>
      [zone.district, zone.city, ...zone.covered_area]
        .some(str => normalizeString(str).includes(q))
    );
  }, [zones, query]);
EOF

# === components/GontobboSearchBox.jsx ===
cat << 'EOF' > "$TARGET_DIR/components/GontobboSearchBox.jsx"
import { motion } from "motion/react";

export const SearchBox = ({ query, onQueryChange }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <input
      type="text"
      value={query}
      onChange={e => onQueryChange(e.target.value)}
      placeholder="🔍 Search by district, city or area..."
      className="w-full md:w-1/2 mx-auto block mb-8 px-5 py-3 rounded-2xl border shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
    />
  </motion.div>
);
EOF

# === components/InfoPopup.jsx ===
cat << 'EOF' > "$TARGET_DIR/components/InfoPopup.jsx"
import React from "react";

export const InfoPopup = React.memo(({ zone }) => (
  <>
    <h2 className="text-lg font-semibold">{zone.district}</h2>
    <p className="text-sm text-gray-600">
      {zone.covered_area.join(", ")}
    </p>
    <img
      src={zone.flowchart}
      alt={\`\${zone.district} flowchart\`}
      className="w-full mt-2 rounded-md"
    />
    <p className={\`text-xs mt-1 \${zone.status === "active" ? "text-green-600" : "text-orange-500"}\`}>
      {zone.status.toUpperCase()}
    </p>
  </>
));
EOF

# === components/BangladeshMap.jsx ===
cat << 'EOF' > "$TARGET_DIR/components/BangladeshMap.jsx"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { InfoPopup } from "./InfoPopup";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export const BangladeshMap = ({ zones }) => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
    <MapContainer
      center={[23.685, 90.3563]}
      zoom={8}
      scrollWheelZoom={true}
      className="h-[75vh] w-full z-0"
    >
      <TileLayer
        attribution="Map data © OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {zones.map((zone, idx) => (
        <Marker key={idx} position={[zone.latitude, zone.longitude]} icon={customIcon}>
          <Popup>
            <InfoPopup zone={zone} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
EOF

# === GontobboZones.jsx ===
cat << 'EOF' > "$TARGET_DIR/GontobboZones.jsx"
import React, { useState } from "react";
import { motion } from "motion/react";
import { zones as allZones } from "./constants/zones";
import { useZoneFilter } from "./hooks/useZoneFilter";
import { SearchBox } from "./components/GontobboSearchBox";
import { BangladeshMap } from "./components/BangladeshMap";

export const GontobboZones = () => {
  const [query, setQuery] = useState("");
  const filteredZones = useZoneFilter(allZones, query);

  return (
    <div className="px-4 md:px-10 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
      >
        📍 Gontobbo Zones in Bangladesh
      </motion.h1>

      <SearchBox query={query} onQueryChange={setQuery} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={filteredZones} />
      </motion.div>

      {filteredZones.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 mt-10 font-medium"
        >
          ❌ No matching zones found.
        </motion.p>
      )}
    </div>
  );
};

export default GontobboZones;
EOF

# === Git Commit ===
git add "$TARGET_DIR"
git commit -m "refactor: modularized gontobboZones into components, hooks, constants"
echo "✅ Refactor complete and committed."

