import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function IncidentMap() {
  const incidents = [
    {
      id: 1,
      category: "Flood",
      location: "MG Road",
      coords: [17.385, 78.4867],
    },
    {
      id: 2,
      category: "Accident",
      location: "Airport Road",
      coords: [17.2403, 78.4294],
    },
    {
      id: 3,
      category: "Fire",
      location: "Market Area",
      coords: [17.4065, 78.4772],
    },
  ];

  return (
    <MapContainer
      center={[17.385, 78.4867]}
      zoom={11}
      className="h-96 w-full rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {incidents.map((incident) => (
        <Marker
          key={incident.id}
          position={incident.coords}
        >
          <Popup>
            <strong>{incident.category}</strong>
            <br />
            {incident.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default IncidentMap;