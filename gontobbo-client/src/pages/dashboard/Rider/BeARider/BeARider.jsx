import { useState } from "react";
import { gontobboZones } from "../../../gontobboZones/gontobbo.constants"; // replace with actual path

const RegionDistrictForm = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Extract unique regions
  const regions = Array.from(new Set(gontobboZones.map((z) => z.region)));

  // Filter districts based on selected region
  const districts = gontobboZones
    .filter((z) => z.region === selectedRegion)
    .map((z) => z.district);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">🏙️ Select Region & District</h2>

      {/* Region Dropdown */}
      <div className="mb-4">
        <label className="font-semibold">🌍 Region</label>
        <select
          className="select select-bordered w-full mt-1"
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            setSelectedDistrict(""); // Reset district on region change
          }}
        >
          <option value="">Select a region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* District Dropdown */}
      <div>
        <label className="font-semibold">🏞️ District</label>
        <select
          className="select select-bordered w-full mt-1"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedRegion}
        >
          <option value="">
            {selectedRegion ? "Select a district" : "Select region first"}
          </option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RegionDistrictForm;
