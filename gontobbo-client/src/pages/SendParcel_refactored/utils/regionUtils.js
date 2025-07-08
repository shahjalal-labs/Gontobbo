export const getUniqueRegions = (centers) =>
  Array.from(new Set(centers.map(c => c.region)));

export const getDistrictsByRegion = (centers, region) =>
  centers
    .filter(c => c.region === region)
    .map(c => c.district);
