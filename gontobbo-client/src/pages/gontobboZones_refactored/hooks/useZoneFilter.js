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
