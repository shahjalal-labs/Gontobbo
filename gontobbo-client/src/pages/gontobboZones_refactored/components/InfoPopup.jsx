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
