// GontobboZones.jsx
import { gontobboZones } from "./gontobbo.constants";
import BangladeshMap from "./components/BangladeshMap";
import { motion } from "motion/react";

const GontobboZones = () => {
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={gontobboZones} />
      </motion.div>
    </div>
  );
};

export default GontobboZones;
