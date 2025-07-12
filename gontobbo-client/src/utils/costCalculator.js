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

export const generateTrackingId = () => {
  const prefix = "PCL";
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
  const random = Math.random().toString(36).substring(2, 7).toUpperCase(); // 5 characters
  return `${prefix}-${date}-${random}`;
};
