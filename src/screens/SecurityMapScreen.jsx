import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function SecurityMapScreen() {
  // Dummy SOS alert data
  const sosAlerts = [
    {
      id: 1,
      username: 'User A',
      timestamp: 1672527600,
      location: {
        latitude: 12.944255350057654,
        longitude: 77.69394167802636,
      },
    },
    {
      id: 2,
      username: 'User B',
      timestamp: 1672531200,
      location: {
        latitude: 12.945,
        longitude: 77.694,
      },
    },
    {
      id: 3,
      username: 'User C',
      timestamp: 1672534800,
      location: {
        latitude: 11.0804, // Vellakinar, Coimbatore
        longitude: 76.9947,
      },
    },
    {
      id: 4,
      username: 'User D',
      timestamp: 1672538400,
      location: {
        latitude: 11.0183, // Avinashi Road, Coimbatore
        longitude: 76.9747,
      },
    },
  ];

  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      width: '100vw',
      height: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: '1.8rem',
      color: '#4CAF50',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    mapBox: {
      height: '70vh',
      width: '100%',
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚨 SOS Alert Map</h2>
      <div style={styles.mapBox}>
        <MapContainer
          center={[12.944255350057654, 77.69394167802636]} // Centered at your current location
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {sosAlerts.map((alert) => (
            <Marker
              key={alert.id}
              position={[
                alert.location.latitude,
                alert.location.longitude,
              ]}
            >
              <Popup>
                🚨 <strong>{alert.username}</strong>
                <br />
                🕓 {new Date(alert.timestamp * 1000).toLocaleString()}
                <br />
                📍 {alert.location.latitude.toFixed(4)},
                {alert.location.longitude.toFixed(4)}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
