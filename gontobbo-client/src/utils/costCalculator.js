export const calculateCostWithBreakdown = (data) => {
  const baseCost = 100;
  const perKgRate = 50;
  const isNonDocument = data.type === "non-document";
  const weight = parseFloat(data.weight) || 0;
  const weightCost = isNonDocument ? weight * perKgRate : 0;
  const total = baseCost + weightCost;

  return {
    baseCost,
    weightCost,
    perKgRate,
    weight,
    isNonDocument,
    total,
  };
};

export const generateTrackingId = () =>
  "TRK-" + Math.random().toString(36).substring(2, 10).toUpperCase();
