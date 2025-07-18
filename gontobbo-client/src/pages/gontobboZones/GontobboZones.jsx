import GontobboSearchBox from "./components/GontobboSearchBox";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { gontobboZones } from "./gontobbo.constants";
import BangladeshMap from "./components/BangladeshMap";

const GontobboZones = () => {
  const [query, setQuery] = useState("");

  // Custom lightweight search filter
  const filteredZones = useMemo(() => {
    const normalize = (str) =>
      String(str || "")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")
        .trim();

    const q = normalize(query);

    return gontobboZones.filter((zone) => {
      const values = [zone.district, zone.city, zone.covered_area].map(
        normalize,
      );

      return values.some((val) => val.includes(q));
    });
  }, [query]);

  return (
    <div className="px-4 md:px-10 py-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
      >
        📍 Gontobbo Zones in Bangladesh
      </motion.h1>

      <GontobboSearchBox query={query} setQuery={setQuery} />

      {/* Map Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={filteredZones} />
      </motion.div>

      {/* Optional: No Match UI */}
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
