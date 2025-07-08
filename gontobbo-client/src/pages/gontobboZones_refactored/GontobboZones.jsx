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
