import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../config';

function UserHomeScreen() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const username = 'SampleUser'; // Replace with actual user state if needed

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        alert('❌ Location access denied.');
        setLoading(false);
      }
    );
  }, []);

  const handleSOS = async () => {
    if (!location) {
      alert('❌ Location not available.');
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/sos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, location }),
      });

      const data = await response.json();
      if (data.success) {
        alert('🚨 SOS Sent. Security has been notified.');
      } else {
        alert('❌ Failed to send SOS');
      }
    } catch {
      alert('❌ Network Error');
    }
  };

  const goToProfile = () => navigate('/user-profile');

  return (
    <div style={styles.container}>
      <button onClick={goToProfile} style={styles.profileButton}>
        👤 Profile
      </button>
      <h2 style={styles.title}>User Home</h2>
      {loading ? (
        <p style={styles.text}>Fetching location...</p>
      ) : (
        <>
          <p style={styles.text}>Latitude: {location.latitude}</p>
          <p style={styles.text}>Longitude: {location.longitude}</p>
          <button style={styles.sosButton} onClick={handleSOS}>
            🚨 Send SOS
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '18px',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#4CAF50',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  sosButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '1.1rem',
    backgroundColor: '#FF5252',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default UserHomeScreen;
