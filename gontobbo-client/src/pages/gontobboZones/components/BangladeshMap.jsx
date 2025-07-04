// components/BangladeshMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const BangladeshMap = ({ zones }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7.5}
        scrollWheelZoom={true}
        className="h-[75vh] w-full z-0"
      >
        <TileLayer
          attribution="Map data &copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {zones.map((zone, index) => (
          <Marker
            key={index}
            position={[zone.latitude, zone.longitude]}
            icon={customIcon}
          >
            <Popup>
              <h2 className="text-lg font-semibold">{zone.district}</h2>
              <p className="text-sm text-gray-600">
                {zone.covered_area.join(", ")}
              </p>
              <img
                src={zone.flowchart}
                alt="Flowchart"
                className="w-full mt-2 rounded-md"
              />
              <p
                className={`text-xs mt-1 ${
                  zone.status === "active"
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {zone.status.toUpperCase()}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
