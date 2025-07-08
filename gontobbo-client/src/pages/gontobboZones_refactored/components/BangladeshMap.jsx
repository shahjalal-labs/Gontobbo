import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { InfoPopup } from "./InfoPopup";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export const BangladeshMap = ({ zones }) => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
    <MapContainer
      center={[23.685, 90.3563]}
      zoom={8}
      scrollWheelZoom={true}
      className="h-[75vh] w-full z-0"
    >
      <TileLayer
        attribution="Map data © OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {zones.map((zone, idx) => (
        <Marker key={idx} position={[zone.latitude, zone.longitude]} icon={customIcon}>
          <Popup>
            <InfoPopup zone={zone} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
