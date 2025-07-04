// GontobboZones.jsx
import { useState, useMemo } from "react";
import { gontobboZones } from "./gontobbo.constants";
import BangladeshMap from "./components/BangladeshMap";
import { motion } from "framer-motion";
import Fuse from "fuse.js";

const GontobboZones = () => {
  const [search, setSearch] = useState("");

  // Setup Fuse.js config
  const fuse = useMemo(() => {
    return new Fuse(gontobboZones, {
      keys: ["district", "city", "covered_area"],
      threshold: 0.4, // 0 = perfect match, 1 = match everything
    });
  }, []);

  const filteredZones = useMemo(() => {
    if (!search.trim()) return gontobboZones;
    const results = fuse.search(search.trim());
    return results.map((result) => result.item);
  }, [search, fuse]);

  return (
    <div className="px-4 md:px-10 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary"
      >
        📍 Gontobbo Zones in Bangladesh
      </motion.h1>

      {/* 🔍 Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="🔎 Search district, city or area (fuzzy match)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
        />
      </div>

      {/* 🗺️ Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={filteredZones} />
      </motion.div>

      {/* ⚠️ No match found */}
      {filteredZones.length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          No zones found for your search.
        </p>
      )}
    </div>
  );
};

export default GontobboZones;
