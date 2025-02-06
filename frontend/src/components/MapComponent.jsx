import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const position = [-6.966667, 110.416664]; // Contoh koordinat (Semarang)

  return (
    <div className="w-full h-96">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Ini adalah lokasi contoh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
